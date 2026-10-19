# Mulai Cepat

Bot pertama ini mendengarkan pesan masuk. Kalau ada yang mengirim **`ping`**, bot membalas **`pong`**.

Pastikan sudah [memasang](/guide/installation) `zhuxe-assistance` dan `@zhuxe-js/store-sqlite` beserta `better-sqlite3`.

## Langkah 1: Buat `index.mjs`

```ts
import { ConsoleLogger, createStore, WaClient } from 'zhuxe-assistance'
import { createSqliteStore } from '@zhuxe-js/store-sqlite'

const store = createStore({
  backends: {
    sqlite: createSqliteStore({ path: '.auth/state.sqlite' })
  },
  providers: {
    auth: 'sqlite',
    signal: 'sqlite',
    preKey: 'sqlite',
    session: 'sqlite',
    identity: 'sqlite',
    senderKey: 'sqlite',
    appState: 'sqlite',
    privacyToken: 'sqlite',
    messages: 'sqlite', // 'none' untuk melewati arsip pesan
    threads: 'sqlite',  // 'none' untuk melewati
    contacts: 'sqlite'  // 'none' untuk melewati
  }
})

const client = new WaClient({ store, sessionId: 'default' }, new ConsoleLogger('info'))

client.on('auth_qr', ({ qr }) => {
  console.log('scan ini:', qr)
})

client.on('auth_paired', ({ credentials }) => {
  console.log('terhubung sebagai', credentials.meJid)
})

client.on('message', async (event) => {
  if (event.message?.conversation === 'ping') {
    await client.message.send(event.key.remoteJid, 'pong')
  }
})

await client.connect()
```

## Langkah 2: Jalankan

```bash
node index.mjs
```

Scan QR yang muncul di terminal lewat WhatsApp: **Perangkat tertaut → Tautkan perangkat**. Setelah `auth_paired`, kirim `ping` dari nomor lain dan bot akan membalas `pong`.

::: tip Login pakai kode, bukan QR
Dengarkan event `auth_pairing_code`. Payload-nya `{ code }`. Lihat [Event](/concepts/events).
:::

## Langkah 3: Jalankan ulang

Karena memakai [store](/concepts/stores), login tersimpan di `.auth/state.sqlite` dan tidak perlu scan QR lagi.

::: warning WaClient tidak auto-reconnect
Saat event `connection` melaporkan koneksi tertutup, panggil `client.connect()` lagi.
:::

## Selanjutnya

<div class="cards">
  <a class="card" href="/concepts/events"><div class="ic">📡</div><div class="t">Event</div><div class="d">Semua event yang tersedia.</div></a>
  <a class="card" href="/api/messages"><div class="ic">💬</div><div class="t">Pesan</div><div class="d">Kirim teks dan media.</div></a>
</div>
