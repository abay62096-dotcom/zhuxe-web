# Instalasi

## Buat project

```bash
mkdir bot-zhuxe-saya
cd bot-zhuxe-saya
npm init -y
```

## Pasang library utama

```bash
npm install zhuxe-assistance
```

## Pasang penyimpanan sesi

Contoh dengan SQLite. Backend lain ada di [Penyimpanan Data](/concepts/stores).

```bash
npm install @zhuxe-js/store-sqlite better-sqlite3
```

## Pasang modul media (opsional)

```bash
npm install @zhuxe-js/media-utils sharp
```

::: tip Error `node-gyp` atau `python`?
Pasang alat build, lalu ulangi instalasi:

```bash
sudo apt update
sudo apt install -y build-essential python3
```
:::

Lanjut ke [Mulai Cepat](/guide/quickstart).
