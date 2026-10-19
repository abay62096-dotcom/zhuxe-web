# Daftar Paket

Paket inti `zhuxe-assistance` tanpa dependensi runtime wajib. Fitur tambahan dipasang terpisah sesuai kebutuhan.

## Store

| Paket | Fungsi | Peer dependency |
|-------|--------|-----------------|
| `@zhuxe-js/store-sqlite` | Penyimpanan SQLite | `better-sqlite3` |
| `@zhuxe-js/store-redis` | Redis dengan eviksi TTL | `ioredis` |
| `@zhuxe-js/store-mongo` | MongoDB dengan TTL index | `mongodb` |
| `@zhuxe-js/store-mysql` | MySQL / MariaDB | `mysql2` |
| `@zhuxe-js/store-postgres` | PostgreSQL | `pg` |

## Fitur tambahan

| Paket | Fungsi |
|-------|--------|
| `@zhuxe-js/media-utils` | Thumbnail, waveform, normalisasi voice note. Butuh `sharp`, `file-type`, `ffmpeg`. |
| `@zhuxe-js/native` | Akselerator kripto Rust untuk X25519 dan XEdDSA. |
| `@zhuxe-js/voip` | Plugin panggilan (`client.voip`): codec MLow, SRTP, WebRTC/SCTP. |
| `@zhuxe-js/voip-media` | Bidang media panggilan yang bisa berjalan di browser. |
| `@zhuxe-js/wam` | Plugin telemetri WAM (`client.wam`). |

## Alat pengembangan

| Paket | Fungsi |
|-------|--------|
| `@zhuxe-js/fake-server` | Server WhatsApp palsu untuk tes end-to-end. Lihat [Pengujian](/advanced/testing). |
| `@zhuxe-js/mcp-server` | Server MCP untuk agen LLM. Hanya untuk pengembangan. Lihat [MCP](/advanced/mcp). |

<div class="cards">
  <a class="card" href="/advanced/media"><div class="ic">🎞️</div><div class="t">Media</div><div class="d">Thumbnail, waveform, ffmpeg.</div></a>
  <a class="card" href="/advanced/voip"><div class="ic">📞</div><div class="t">VoIP</div><div class="d">Panggilan suara.</div></a>
</div>
