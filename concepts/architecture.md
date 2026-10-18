# Arsitektur Sistem

Zhuxe Asistance dibangun dengan prinsip Performance-First dan Async I/O. Sistem ini memisahkan logika protokol inti dari penyimpanan data (Store).

## Komponen Utama:
1. WaClient: Titik masuk utama yang menyatukan semua koordinator.
2. Coordinators: Modul internal yang menangani area spesifik (message, group, dll).
3. Store: Lapisan database (SQLite, Redis, dll).
4. Transport: Menangani WebSocket dan komunikasi biner ke server WhatsApp.

Semua operasi jaringan bersifat asynchronous, sementara kriptografi dioptimalkan agar berjalan sinkron guna meminimalisir beban CPU.
