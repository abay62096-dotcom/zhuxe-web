# Grup

## Event grup

```ts
client.on('group', (event) => {
  console.dir(event, { depth: null })
})
```

Event `group` dikirim saat ada perubahan atau aktivitas grup. Cetak `event` dengan `console.dir` untuk melihat bentuk payload di versi yang kamu pakai.

## Pesan grup

Pesan di grup masuk lewat event `message` biasa. `event.key.remoteJid` berisi JID grup. Mengirim ke grup memakai method yang sama:

```ts
await client.message.send(groupJid, 'halo semua')
```

Pesan grup dienkripsi dengan SenderKey, jadi pastikan provider `senderKey` aktif di [store](/concepts/stores).

::: warning Belum lengkap
Method khusus grup (membuat grup, menambah anggota, dll) belum tercantum di README. Lihat sumber di repositori atau jelajahi dengan `inspect` lewat [MCP server](/advanced/mcp), lalu kabari saya supaya halaman ini bisa dilengkapi.
:::
