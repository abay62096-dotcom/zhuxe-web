# Instalasi

Butuh **Node.js 20.9.0** atau lebih baru. Cek dengan `node -v`.

## Buat project

```bash
mkdir bot-zhuxe-saya
cd bot-zhuxe-saya
npm init -y
```

## Paket inti

```bash
npm install zhuxe-assistance
```

Paket inti tidak punya dependensi runtime wajib.

## Store persisten (pilih satu)

Tanpa store persisten, sesi hanya di memori dan hilang saat restart.

::: code-group

```bash [SQLite]
npm install @zhuxe-js/store-sqlite better-sqlite3
```

```bash [Redis]
npm install @zhuxe-js/store-redis ioredis
```

```bash [PostgreSQL]
npm install @zhuxe-js/store-postgres pg
```

```bash [MySQL]
npm install @zhuxe-js/store-mysql mysql2
```

```bash [MongoDB]
npm install @zhuxe-js/store-mongo mongodb
```

:::

Detail konfigurasi ada di [Penyimpanan Data](/concepts/stores).

## Paket opsional

### Media: thumbnail, waveform, voice note

```bash
npm install @zhuxe-js/media-utils sharp
```

Butuh juga `ffmpeg` dan `ffprobe` di `PATH`. Lihat [Media](/advanced/media).

### Akselerator kripto native

```bash
npm install @zhuxe-js/native
```

Terdeteksi otomatis, tidak perlu ubah kode. Build di npm berupa WASM. Untuk mematikannya, set variabel lingkungan `ZHUXE_NATIVE_BACKEND=js`. Versi NAPI belum tersedia di npm dan harus dibangun dari `packages/native`.

### Logging terstruktur

```bash
npm install pino pino-pretty
```

## Troubleshooting

::: tip Error `node-gyp` atau `python`?
`better-sqlite3` dan `sharp` kadang perlu alat build. Pasang lalu ulangi instalasi:

```bash
sudo apt update
sudo apt install -y build-essential python3
```
:::

Lanjut ke [Mulai Cepat](/guide/quickstart).
