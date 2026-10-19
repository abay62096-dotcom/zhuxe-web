# MCP Server

`@zhuxe-js/mcp-server` mengekspos sesi `WaClient` sebagai tool MCP, sehingga agen LLM seperti Claude Code atau Cursor bisa menjalankan alur WhatsApp end-to-end: connect, pairing, kirim pesan, query grup, memeriksa event, dan menelusuri state.

::: danger Hanya untuk pengembangan
Paket ini untuk development dan pengujian, **bukan** server protokol produksi.
:::

## Instalasi

```bash
npm install @zhuxe-js/mcp-server
```

Peer dependency: `zhuxe-assistance` dan `@modelcontextprotocol/sdk`. Untuk kredensial SQLite, tambahkan `better-sqlite3`.

## Daftarkan ke Claude Code

```bash
npm run build --workspace @zhuxe-js/mcp-server
claude mcp add zhuxe --scope user -- node <path-absolut>/packages/mcp-server/dist/bin.js
```

## Klien MCP lain (stdio)

```json
{
  "mcpServers": {
    "zhuxe": {
      "command": "node",
      "args": ["<path-absolut>/packages/mcp-server/dist/bin.js"],
      "env": {
        "MCP_AUTH_PATH": "<path-absolut>/.auth/state.sqlite",
        "MCP_SESSION_ID": "default_2",
        "MCP_LOG_LEVEL": "info"
      }
    }
  }
}
```

## Variabel lingkungan

| Variabel | Default | Fungsi |
|----------|---------|--------|
| `MCP_AUTH_PATH` | `<cwd>/.auth/state.sqlite` | Lokasi store kredensial |
| `MCP_SESSION_ID` | `default_2` | Id sesi default |
| `MCP_MAX_SESSIONS` | `16` | Batas sesi aktif |
| `MCP_LOG_LEVEL` | `info` | trace sampai error |
| `MCP_LOG_FILE` | tidak diset | Simpan log JSONL |
| `MCP_EVENT_BUFFER_SIZE` | `1000` | Ukuran buffer event |
| `MCP_TRANSPORT` | `stdio` | `stdio` atau `http` |
| `MCP_HTTP_HOST`, `MCP_HTTP_PORT`, `MCP_HTTP_PATH` | `127.0.0.1`, `3737`, `/mcp` | Listener HTTP |

## Tool

| Tool | Fungsi |
|------|--------|
| `call` | Memanggil fungsi pada `client` atau `lib`, mis. `connect`, `message.send`. |
| `inspect` | Menampilkan anggota suatu path beserta kelas asalnya. |
| `events`, `events_clear` | Membaca atau mengosongkan buffer event per sesi. |
| `logs`, `logs_clear` | Membaca atau mengosongkan buffer log. |
| `lifecycle` | `status`, `start`, `destroy` untuk sesi. |
| `restart` | `soft` mereset satu sesi, `process_exit` memutus semuanya. |

## Contoh: pairing

`connect` memblokir sampai pairing selesai, jadi pakai `noAwait`:

```text
call({ path: 'connect', noAwait: true })
events({ types: ['auth_qr', 'auth_pairing_code', 'auth_paired', 'connection'] })
```

Tampilkan QR ke pengguna, tunggu `auth_paired`, lalu lanjut.

## Catatan

- `WaClient` tidak auto-reconnect. Saat `connection: close`, panggil `connect` lagi.
- `restart` mode `soft` tidak memuat perubahan kode. Pakai `process_exit` dengan supervisor.
- Semua sesi berbagi satu backend `MCP_AUTH_PATH`. Pakai proses terpisah untuk store yang benar-benar terisolasi.
