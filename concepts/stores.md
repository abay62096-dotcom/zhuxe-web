# Penyimpanan Data (Store)

Secara default, Zhuxe Asistance menyimpan data sesi di memori, sehingga hilang saat bot di-restart. Supaya bot tetap *login* dan tidak perlu *scan* QR setiap kali menyala, kamu **wajib** memakai database persisten (Store).

Pilih satu backend, pasang paketnya, lalu atur di `createStore`.

::: warning Perlu dicek
Hanya `@zhuxe-js/store-sqlite` yang tercantum di halaman Instalasi. Pastikan paket backend lain memang ada di npm sebelum dokumen ini dipublikasikan.
:::

## Pilih yang mana?

| Store | Cocok untuk | Server terpisah |
|-------|-------------|:---------------:|
| SQLite | Pemula, bot kecil sampai menengah | Tidak |
| PostgreSQL | Trafik tinggi, integritas data kuat | Ya |
| MySQL / MariaDB | Aplikasi web dan bot pada umumnya | Ya |
| MongoDB | Data dengan struktur yang sering berubah | Ya |
| Redis | Respons sangat cepat, cache | Ya |

## Konfigurasi

Semua backend memakai bentuk `createStore` yang sama. Pilih tab sesuai database-mu.

### SQLite

**Instalasi**

```bash
npm install @zhuxe-js/store-sqlite better-sqlite3
```

**Konfigurasi**

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

**Instalasi**

```bash
npm install @zhuxe-js/store-postgres pg
```

**Konfigurasi**

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

**Instalasi**

```bash
npm install @zhuxe-js/store-mysql mysql2
```

**Konfigurasi**

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

**Instalasi**

```bash
npm install @zhuxe-js/store-mongo mongodb
```

**Konfigurasi**

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

**Instalasi**

```bash
npm install @zhuxe-js/store-redis ioredis
```

**Konfigurasi**

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

