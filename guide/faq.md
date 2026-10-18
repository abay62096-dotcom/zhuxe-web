# Frequently Asked Questions (FAQ)

Berikut adalah beberapa pertanyaan yang sering diajukan mengenai Zhuxe Asistance.

## Bot saya error "Cannot find module" saat dijalankan, kenapa?
Biasanya ini terjadi karena folder `dist` tidak ikut ter-*build* atau Anda belum menjalankan `npm install`. Pastikan Anda menjalankan `npm install` di folder proyek dan tidak menghapus folder `node_modules`.

## Bagaimana cara agar bot tetap online 24 jam?
Jangan jalankan bot menggunakan `node index.js` biasa di terminal. Gunakan *process manager* seperti **PM2** atau jalankan di dalam panel Pterodactyl (seperti yang sedang Anda gunakan).

## Apakah nomor WhatsApp saya bisa ter-banned?
Ya, WhatsApp memiliki sistem anti-spam yang ketat. **Jangan pernah** menggunakan bot untuk mengirim pesan massal (*broadcast*) ke nomor yang tidak menyimpan nomor Anda. Gunakan bot secara wajar.

## Bagaimana cara mengganti dari Scan QR ke Pairing Code?
Buka file `config.js` di proyek bot Anda, lalu ubah `usePairingCode: false` menjadi `usePairingCode: true`. Jangan lupa isi `pairingNumber` dengan nomor bot Anda.
