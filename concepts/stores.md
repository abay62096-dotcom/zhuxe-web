# Penyimpanan Data (Store)

Secara default, data sesi hanya di memori dan **hilang saat bot di-restart**. Supaya bot tetap *login* dan tidak perlu scan QR setiap kali menyala, pakai store persisten.

Cara kerjanya: `createStore` menerima **backends** (database yang dipakai) dan **providers** (jenis data mana disimpan di backend mana).

## Pilih backend

| Store | Paket | Cocok untuk | Server terpisah |
|-------|-------|-------------|:---------------:|
| SQLite | `@zhuxe-js/store-sqlite` | Pemula, bot kecil sampai menengah | Tidak |
| PostgreSQL | `@zhuxe-js/store-postgres` | Trafik tinggi, integritas data kuat | Ya |
| MySQL / MariaDB | `@zhuxe-js/store-mysql` | Aplikasi web dan bot pada umumnya | Ya |
| MongoDB | `@zhuxe-js/store-mongo` | Data dengan struktur yang sering berubah | Ya |
| Redis | `@zhuxe-js/store-redis` | Respons sangat cepat, cache | Ya |

## Daftar provider

| Provider | Isi |
|----------|-----|
| `auth` | Kredensial login |
| `signal` | Data protokol Signal |
| `preKey` | Pre-key |
| `session` | Sesi enkripsi |
| `identity` | Identitas kontak |
| `senderKey` | Kunci pengirim untuk grup |
| `appState` | Sinkronisasi app state |
| `privacyToken` | Token privasi |
| `messages` | Arsip pesan |
| `threads` | Daftar percakapan |
| `contacts` | Daftar kontak |

::: tip Melewati data tertentu
Untuk `messages`, `threads`, dan `contacts`, isi dengan `'none'` kalau kamu tidak butuh arsipnya. Untuk tes, backend `'memory'` juga bisa dipakai pada provider tertentu (lihat [Pengujian](/advanced/testing)).
:::

## Konfigurasi per backend

Semua backend memakai bentuk `createStore` yang sama. Contoh di bawah menulis empat provider inti supaya ringkas. Untuk bot sungguhan, isi semua provider di tabel atas seperti pada [Mulai Cepat](/guide/quickstart).

### SQLite

Ringan dan tanpa server database terpisah. Rekomendasi untuk pemula.

```bash
npm install @zhuxe-js/store-sqlite better-sqlite3
```

```javascript
import { createStore } from 'zhuxe-assistance'
import { createSqliteStore } from '@zhuxe-js/store-sqlite'

const store = createStore({
  backends: {
    sqlite: createSqliteStore({ path: '.auth/state.sqlite' })
  },
  providers: {
    auth: 'sqlite',
    signal: 'sqlite',
    preKey: 'sqlite',
    session: 'sqlite'
  }
})
```

### PostgreSQL

Cocok untuk trafik tinggi dan integritas data yang kuat.

```bash
npm install @zhuxe-js/store-postgres pg
```

```javascript
import { createStore } from 'zhuxe-assistance'
import { createPostgresStore } from '@zhuxe-js/store-postgres'

const store = createStore({
  backends: {
    postgres: createPostgresStore({
      connectionString: 'postgresql://user:pass@localhost:5432/zhuxedb'
    })
  },
  providers: {
    auth: 'postgres',
    signal: 'postgres',
    preKey: 'postgres',
    session: 'postgres'
  }
})
```

### MySQL / MariaDB

Pilihan klasik untuk aplikasi web dan bot.

```bash
npm install @zhuxe-js/store-mysql mysql2
```

```javascript
import { createStore } from 'zhuxe-assistance'
import { createMysqlStore } from '@zhuxe-js/store-mysql'

const store = createStore({
  backends: {
    mysql: createMysqlStore({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zhuxedb'
    })
  },
  providers: {
    auth: 'mysql',
    signal: 'mysql',
    preKey: 'mysql',
    session: 'mysql'
  }
})
```

### MongoDB

Fleksibel untuk data yang strukturnya sering berubah. Memakai TTL index.

```bash
npm install @zhuxe-js/store-mongo mongodb
```

```javascript
import { createStore } from 'zhuxe-assistance'
import { createMongoStore } from '@zhuxe-js/store-mongo'

const store = createStore({
  backends: {
    mongo: createMongoStore({
      url: 'mongodb://localhost:27017',
      dbName: 'zhuxedb'
    })
  },
  providers: {
    auth: 'mongo',
    signal: 'mongo',
    preKey: 'mongo',
    session: 'mongo'
  }
})
```

### Redis

Sangat cepat, dengan eviksi berbasis TTL. Cocok untuk cache dan bot yang butuh respons cepat.

```bash
npm install @zhuxe-js/store-redis ioredis
```

```javascript
import { createStore } from 'zhuxe-assistance'
import { createRedisStore } from '@zhuxe-js/store-redis'

const store = createStore({
  backends: {
    redis: createRedisStore({ url: 'redis://localhost:6379' })
  },
  providers: {
    auth: 'redis',
    signal: 'redis',
    preKey: 'redis',
    session: 'redis'
  }
})
```

::: warning Opsi backend
Nama paket dan penamaan provider sudah sesuai README. Opsi koneksi untuk PostgreSQL, MySQL, MongoDB, dan Redis di atas mengikuti pola umum drivernya, jadi cocokkan dengan README paket masing-masing bila ada yang berbeda.
:::

## Campur backend

Tiap provider bisa memakai backend berbeda, misalnya data sesi di SQLite dan cache di Redis. Definisikan dua backend di `backends`, lalu arahkan tiap provider ke nama yang dipilih.
