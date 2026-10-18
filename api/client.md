# API: WaClient

Kelas utama untuk berinteraksi dengan WhatsApp.

## new WaClient(options, logger)
Membuat instance client baru.
- options: Objek berisi store, sessionId, dan konfigurasi perangkat.
- logger: Instance logger (misal ConsoleLogger).

## client.connect()
Memulai koneksi ke server WhatsApp.

## client.disconnect()
Memutuskan koneksi dari server.

## Event Penting:
- client.on('auth_qr', callback)
- client.on('auth_paired', callback)
- client.on('connection', callback)
- client.on('message', callback)
