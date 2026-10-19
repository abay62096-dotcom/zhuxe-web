# Event

Dengarkan event lewat `client.on(nama, handler)`.

```ts
client.on('message', async (event) => {
  console.log(event.key.remoteJid, event.message)
})
```

## Event inti

| Event | Payload | Kapan terjadi |
|-------|---------|---------------|
| `connection` | `event` | Status koneksi berubah (buka, tutup). |
| `auth_qr` | `{ qr, ttlMs }` | QR untuk pairing siap discan. |
| `auth_pairing_code` | `{ code }` | Kode pairing untuk login tanpa QR. |
| `auth_pairing_required` | `{ forceManual }` | Pairing dibutuhkan. |
| `auth_paired` | `{ credentials }` | Berhasil terhubung. `credentials.meJid` adalah JID-mu. |
| `message` | `event` | Pesan masuk. Berisi `message`, `key.remoteJid`, `timestampSeconds`. |
| `message_bot_chunk` | `event` | Potongan balasan bot. |
| `group` | `event` | Perubahan atau aktivitas grup. |
| `mutation` | `event` | Mutasi app state. |

## Event VoIP

Tersedia setelah memasang plugin `@zhuxe-js/voip`. Lihat [VoIP](/advanced/voip).

| Event | Kegunaan |
|-------|----------|
| `voip_call_incoming` | Panggilan masuk (`callId`, `peerJid`, `canAccept`, `callerPn`). |
| `voip_call_state` | Perubahan status panggilan. |
| `voip_call_inbound_audio` | Audio PCM yang diterima. |
| `voip_call_outbound_audio_finished` | Audio keluar selesai dikirim. |
| `voip_call_ended` | Panggilan berakhir. |
| `voip_call_error` | Error terkait panggilan. |

## Contoh: login dan pesan

```ts
client.on('auth_qr', ({ qr }) => console.log('scan ini:', qr))
client.on('auth_pairing_code', ({ code }) => console.log('kode:', code))
client.on('auth_paired', ({ credentials }) => console.log('terhubung:', credentials.meJid))

client.on('connection', (event) => console.log('koneksi:', event))

client.on('message', async (event) => {
  if (event.message?.conversation === 'halo') {
    await client.message.send(event.key.remoteJid, 'halo juga!')
  }
})
```

::: warning Reconnect manual
`WaClient` tidak auto-reconnect. Saat `connection` melaporkan tertutup, panggil `client.connect()` lagi.
:::
