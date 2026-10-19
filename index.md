---
layout: page
title: Zhuxe Asistance
---

<div class="hero-wrap">
  <div class="badge">v1.0 • MIT • Node.js 20.9+</div>
  <h1>Zhuxe Asistance</h1>
  <p>Library TypeScript untuk protokol WhatsApp Web. Pesan, media, grup, newsletter, dan panggilan suara dalam satu paket, dengan banyak akun dalam satu proses.</p>
  <div class="hero-actions">
    <a class="btn primary" href="/guide/quickstart">Mulai Cepat</a>
    <a class="btn" href="/guide/installation">Instalasi</a>
    <a class="btn" href="https://github.com/abay62096-dotcom/zhuxe">GitHub</a>
  </div>
  <pre class="hero-code"><code>npm install zhuxe-assistance</code></pre>
</div>

<div class="home-body">

## Kenapa Zhuxe

<div class="cards three">
  <div class="card"><div class="ic">💬</div><div class="t">Pesan lengkap</div><div class="d">Teks, gambar, video, audio, dokumen, stiker, dan voice note dengan thumbnail dan waveform otomatis.</div></div>
  <div class="card"><div class="ic">👥</div><div class="t">Grup dan newsletter</div><div class="d">Event grup, pesan grup terenkripsi SenderKey, dan dukungan newsletter.</div></div>
  <div class="card"><div class="ic">📞</div><div class="t">Panggilan suara</div><div class="d">Plugin VoIP dengan codec MLow, SRTP, dan WebRTC/SCTP.</div></div>
  <div class="card"><div class="ic">🗄️</div><div class="t">Store persisten</div><div class="d">SQLite, PostgreSQL, MySQL, MongoDB, dan Redis. Login tersimpan, tanpa scan QR ulang.</div></div>
  <div class="card"><div class="ic">🧩</div><div class="t">Sistem plugin</div><div class="d">Perluas client lewat array <code>plugins</code>, seperti <code>client.voip</code> dan <code>client.wam</code>.</div></div>
  <div class="card"><div class="ic">⚡</div><div class="t">Kripto native</div><div class="d">Akselerator Rust opsional untuk X25519 dan XEdDSA tanpa ubah kode.</div></div>
</div>

## Contoh singkat

```ts
import { ConsoleLogger, createStore, WaClient } from 'zhuxe-assistance'
import { createSqliteStore } from '@zhuxe-js/store-sqlite'

const store = createStore({
  backends: { sqlite: createSqliteStore({ path: '.auth/state.sqlite' }) },
  providers: { auth: 'sqlite', signal: 'sqlite', preKey: 'sqlite', session: 'sqlite' /* ... */ }
})

const client = new WaClient({ store, sessionId: 'default' }, new ConsoleLogger('info'))

client.on('auth_qr', ({ qr }) => console.log('scan ini:', qr))
client.on('message', async (event) => {
  if (event.message?.conversation === 'ping') {
    await client.message.send(event.key.remoteJid, 'pong')
  }
})

await client.connect()
```

Contoh lengkap ada di [Mulai Cepat](/guide/quickstart).

## Jelajahi

<div class="cards">
  <a class="card" href="/guide/installation"><div class="ic">🚀</div><div class="t">Instalasi</div><div class="d">Paket inti dan paket opsional.</div></a>
  <a class="card" href="/concepts/stores"><div class="ic">🗄️</div><div class="t">Penyimpanan Data</div><div class="d">Pilih backend dan atur provider.</div></a>
  <a class="card" href="/concepts/events"><div class="ic">📡</div><div class="t">Event</div><div class="d">Semua event yang bisa didengarkan.</div></a>
  <a class="card" href="/concepts/packages"><div class="ic">📦</div><div class="t">Daftar Paket</div><div class="d">Semua paket <code>@zhuxe-js/*</code>.</div></a>
  <a class="card" href="/api/client"><div class="ic">📚</div><div class="t">WaClient</div><div class="d">Opsi, koneksi, dan event.</div></a>
  <a class="card" href="/advanced/testing"><div class="ic">🧪</div><div class="t">Pengujian</div><div class="d">Tes end-to-end tanpa server WhatsApp asli.</div></a>
</div>

::: warning Pemberitahuan
Zhuxe Asistance tidak berafiliasi dengan WhatsApp. Gunakan dengan bijak dan patuhi ketentuan layanan WhatsApp.
:::

</div>
