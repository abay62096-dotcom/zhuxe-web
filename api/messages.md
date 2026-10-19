# Pesan

## Menerima pesan

```ts
client.on('message', async (event) => {
  const jid = event.key.remoteJid
  const text = event.message?.conversation
  console.log(jid, text, event.timestampSeconds)
})
```

| Field | Isi |
|-------|-----|
| `event.key.remoteJid` | JID pengirim atau grup. |
| `event.message` | Isi pesan. Teks biasa ada di `message.conversation`. |
| `event.timestampSeconds` | Waktu pesan (detik). |

## Mengirim teks

```ts
// teks langsung
await client.message.send(jid, 'pong')

// pesan terstruktur
await client.message.send(jid, {
  extendedTextMessage: { text: 'halo dengan format penuh' }
})
```

## Mengirim media

Pasang [media-utils](/advanced/media) supaya thumbnail, durasi, dan dimensi terisi benar.

```ts
await client.message.send(jid, {
  type: 'video',
  media: '/tmp/clip.mp4',
  mimetype: 'video/mp4',
  caption: 'demo'
})
```

| Field | Keterangan |
|-------|-----------|
| `type` | Jenis media, mis. `video`. |
| `media` | Path file lokal. |
| `mimetype` | MIME file. |
| `caption` | Teks keterangan. |

::: warning Jenis lain
Contoh di atas yang terdokumentasi di README. Untuk gambar, audio, dokumen, dan stiker, cek sumber di `src/` repositori atau gunakan `inspect` lewat [MCP server](/advanced/mcp) untuk melihat bentuk argumennya.
:::
