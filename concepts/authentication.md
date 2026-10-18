# Autentikasi & Sesi

Ada dua cara untuk menghubungkan bot ke akun WhatsApp:

## 1. Scan QR Code (Default)
Bot akan menghasilkan String QR Code. Anda cukup membuka WhatsApp di HP > Perangkat Tertaut > Tautkan Perangkat, lalu scan kode tersebut.

## 2. Pairing Code (Kode 8 Digit)
Jika Anda tidak bisa scan QR (misal bot berjalan di server headless), gunakan Pairing Code.

const code = await client.auth.requestPairingCode('6281234567890')
console.log('Masukkan kode ini di WhatsApp:', code)

## Penyimpanan Sesi
Agar tidak perlu scan ulang setiap kali bot restart, Anda wajib menggunakan database persisten (seperti store-sqlite). Sesi akan disimpan dalam file .sqlite.
