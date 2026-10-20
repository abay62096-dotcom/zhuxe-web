# Contoh

## Balas otomatis

```ts
client.on('message', async (event) => {
  const text = event.message?.conversation
  if (text === 'ping') await client.message.send(event.key.remoteJid, 'pong')
})
```

## Login dengan kode pairing

```ts
client.on('auth_pairing_code', ({ code }) => console.log('masukkan kode:', code))
await client.connect()
```

## Reconnect manual

```ts
client.on('connection', async (event) => {
  console.log('koneksi:', event)
  // saat tertutup, panggil client.connect() lagi (beri jeda agar tidak loop cepat)
})
```

## Dua akun dalam satu proses

```ts
const a = new WaClient({ store, sessionId: 'akun-a' })
const b = new WaClient({ store, sessionId: 'akun-b' })
await Promise.all([a.connect(), b.connect()])
```

## Kirim video dengan thumbnail

```ts
import { createMediaProcessor } from '@zhuxe-js/media-utils'
const client = new WaClient({ store, sessionId: 'default', media: { processor: createMediaProcessor() } })
await client.message.send(jid, { type: 'video', media: '/tmp/clip.mp4', mimetype: 'video/mp4', caption: 'demo' })
```
