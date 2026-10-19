# FAQ

## Kenapa harus scan QR terus?
Tanpa store persisten, sesi hanya di memori dan hilang saat restart. Pasang [store](/concepts/stores).

## Store mana yang cocok?
Pemula: SQLite. Trafik tinggi: PostgreSQL. Cache cepat: Redis. Data fleksibel: MongoDB.

## Apakah bot reconnect otomatis?
Tidak. `WaClient` tidak melakukan auto-reconnect. Saat koneksi tertutup, panggil `client.connect()` lagi.

## Bisa lebih dari satu akun?
Bisa. Buat beberapa `WaClient` dengan `sessionId` berbeda dalam satu proses.

## Thumbnail atau waveform tidak muncul?
Pasang [`@zhuxe-js/media-utils`](/advanced/media) dan `sharp`, serta pastikan `ffmpeg` dan `ffprobe` ada di `PATH`. Tanpa binary itu, operasi terkait dilewati dan hanya dicatat sebagai `warn`.

## Waveform voice note hilang?
WhatsApp hanya menampilkan waveform untuk Opus 16k mono. media-utils menormalkan voice note ke format itu.

## Bagaimana mematikan akselerator native?
Set `ZHUXE_NATIVE_BACKEND=js`.

## Node.js versi berapa?
20.9.0 atau lebih baru.

## Aman dipakai?
Proyek ini independen dan tidak berafiliasi dengan WhatsApp. Gunakan sesuai ketentuan layanan WhatsApp dan risiko ditanggung pengguna.
