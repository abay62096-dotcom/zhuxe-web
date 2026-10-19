# WaClient

`WaClient` adalah pintu masuk utama. Satu instance mewakili satu sesi akun WhatsApp.

```ts
import { ConsoleLogger, createStore, WaClient } from 'zhuxe-assistance'

const client = new WaClient(
  { store, sessionId: 'default' },
  new ConsoleLogger('info')
)
```

## Konstruktor

`new WaClient(options, logger?)`

| Opsi | Keterangan |
|------|-----------|
| `store` | Store dari `createStore`. Lihat [Penyimpanan Data](/concepts/stores). |
| `sessionId` | Nama sesi. Pakai nilai berbeda untuk banyak akun dalam satu proses. |
| `plugins` | Array plugin, mis. `[voipPlugin({ maxConcurrentCalls: 1 })]`. |
| `media` | `{ processor }` dari `createMediaProcessor()`. Lihat [Media](/advanced/media). |
| `chatSocketUrls` | Alamat server chat kustom. Dipakai untuk [pengujian](/advanced/testing). |
| `proxy` | Agent proxy untuk upload dan download media. |
| `testHooks` | Hook khusus pengujian. |

Argumen kedua adalah logger. `ConsoleLogger('info')` bawaan, atau logger terstruktur seperti `pino`.

## Method

| Method | Fungsi |
|--------|--------|
| `client.connect()` | Menghubungkan. Untuk akun baru, menunggu sampai pairing selesai. |
| `client.disconnect()` | Memutus koneksi. |
| `client.on(event, handler)` | Mendengarkan [event](/concepts/events). |
| `client.message.send(jid, content)` | Mengirim pesan. Lihat [Pesan](/api/messages). |

Plugin menambah namespace baru, mis. `client.voip` dan `client.wam`.

## Multi-akun

```ts
const a = new WaClient({ store, sessionId: 'akun-a' }, logger)
const b = new WaClient({ store, sessionId: 'akun-b' }, logger)

await Promise.all([a.connect(), b.connect()])
```

## Shutdown rapi

```ts
process.on('SIGINT', async () => {
  await client.disconnect().catch(() => undefined)
  process.exit(0)
})
```

::: warning Tanpa auto-reconnect
Saat `connection` melaporkan koneksi tertutup, panggil `client.connect()` lagi.
:::
