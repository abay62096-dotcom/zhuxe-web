# Pengujian

`@zhuxe-js/fake-server` adalah server WhatsApp palsu yang berjalan satu proses dengan tesmu. `WaClient` dipakai penuh, termasuk handshake Noise, pairing QR, Signal Protocol (X3DH dan Double Ratchet), SenderKey untuk grup, upload dan download media, serta sinkronisasi app state, tanpa menghubungi WhatsApp asli.

## Instalasi

```bash
npm i -D @zhuxe-js/fake-server zhuxe-assistance
```

## Contoh tes end-to-end

Contoh memakai `node:test`. Sesuaikan dengan runner yang kamu pakai.

```ts
import { test } from 'node:test'
import { FakeWaServer } from '@zhuxe-js/fake-server'
import { createStore, WaClient } from 'zhuxe-assistance'

test('klien terhubung lalu bertukar pesan dengan peer simulasi', async () => {
  // 1. Jalankan server palsu (port acak, path default /ws/chat)
  const server = await FakeWaServer.start()

  // 2. Siapkan klien yang menunjuk ke server palsu
  const client = new WaClient({
    store: createStore({
      providers: { auth: 'memory', signal: 'memory', senderKey: 'memory', appState: 'memory' }
    }),
    chatSocketUrls: [server.url],
    testHooks: { noiseRootCa: server.noiseRootCa },
    proxy: {
      mediaUpload: server.mediaProxyAgent,
      mediaDownload: server.mediaProxyAgent
    }
  })

  try {
    // 3. Hubungkan klien dan tunggu pipeline terautentikasi.
    //    Untuk akun baru, lakukan pairing dulu dengan server.runPairing(...)
    await client.connect()
    const pipeline = await server.waitForAuthenticatedPipeline()

    // 4. Buat peer simulasi dengan kripto Signal sungguhan
    const peer = await server.createFakePeer({ jid: '5511888@s.whatsapp.net' }, pipeline)

    // 5. Peer mengirim pesan 1:1 ke klien
    await peer.sendConversation('halo dari peer simulasi')

    // 6. Tangkap pesan keluar dari klien
    await peer.expectMessage()
  } finally {
    // 7. Selalu matikan server agar tes tidak menggantung
    await server.stop()
  }
})
```

## Poin penting

- **Peer simulasi:** `createFakePeer` membuat peer dengan identitas, prekey, dan sesi Signal sendiri. Bisa mengirim pesan 1:1 (`sendConversation`) dan grup (`sendGroupConversation`), serta menerima dengan `expectMessage` atau `expectGroupMessage`.
- **Pairing:** untuk akun baru, pakai `server.runPairing(pipeline, { deviceJid }, ...)`. Lalu `waitForNextAuthenticatedPipeline()` menangkap pipeline baru setelah klien reconnect.
- **Banyak klien:** beri `sessionKey` saat `start()` supaya state tiap klien terisolasi. Akses lewat `server.sessionFor(pipeline)`.
- **Konkurensi:** suite proyek memakai `--test-concurrency=1`. Pakai pola yang sama kalau tesmu berbagi server atau pairing.
- **Mode mobile:** `FakeWaServer.start({ tcp: true })`, seed kredensial dengan `seedFakeMobilePrimary`, hubungkan klien lewat `mobileTransport.tcpUrl`.
