# Panduan Instalasi

Untuk menjalankan **Zhuxe Asistance**, pastikan sistem Anda memenuhi persyaratan minimum berikut.

## Persyaratan Sistem
- **Node.js**: Versi 20.9.0 atau yang lebih baru.
- **Package Manager**: `npm`, `pnpm`, atau `yarn`.
- **Sistem Operasi**: Linux (Ubuntu/Debian sangat direkomendasikan untuk VPS), macOS, atau Windows (via WSL).

## 1. Instalasi Package Inti
Buka terminal server Anda, buat folder proyek baru, dan inisialisasi:

    mkdir bot-zhuxe-saya
    cd bot-zhuxe-saya
    npm init -y

Setelah itu, pasang library utama Zhuxe:

    npm install zhuxe-assistance

## 2. Instalasi Database (Sangat Direkomendasikan)
Secara default, Zhuxe akan menyimpan sesi di memori (akan hilang jika bot di-restart). Agar bot Anda tetap *login* (tidak perlu scan ulang), Anda wajib menggunakan database.

Contoh menggunakan SQLite (ringan dan tidak butuh server database terpisah):

    npm install @zhuxe-js/store-sqlite better-sqlite3

## 3. Instalasi Fitur Tambahan (Opsional)
Jika Anda ingin bot bisa memproses gambar, membuat stiker, atau mengirim pesan suara, pasang modul media:

    npm install @zhuxe-js/media-utils sharp

## Troubleshooting (Jika Gagal)
Jika saat `npm install` Anda melihat error terkait `node-gyp` atau `python`, pastikan server Anda memiliki *build tools*:

    sudo apt update
    sudo apt install -y build-essential python3
