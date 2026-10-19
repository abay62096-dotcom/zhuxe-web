# Media

`@zhuxe-js/media-utils` memproses media: thumbnail gambar dan stiker (lewat `sharp`), serta thumbnail video, metadata, waveform voice note, dan normalisasi Opus (lewat `ffmpeg` dan `ffprobe`).

## Instalasi

```bash
npm install @zhuxe-js/media-utils sharp
```

`sharp` adalah peer dependency. `ffmpeg` dan `ffprobe` adalah binary eksternal.

### Pasang ffmpeg dan ffprobe

| Platform | Perintah |
|----------|----------|
| Debian / Ubuntu | `sudo apt update && sudo apt install -y ffmpeg` |
| macOS (Homebrew) | `brew install ffmpeg` |
| Alpine (Docker) | `apk add --no-cache ffmpeg` |
| Windows | `winget install Gyan.FFmpeg` atau `choco install ffmpeg-full` |

Tanpa package manager, pakai build statis:

```bash
npm install --save-dev @ffmpeg-installer/ffmpeg @ffprobe-installer/ffprobe
```

```ts
import { path as ffmpegPath } from '@ffmpeg-installer/ffmpeg'
import { path as ffprobePath } from '@ffprobe-installer/ffprobe'
import { createMediaProcessor } from '@zhuxe-js/media-utils'

const processor = createMediaProcessor({ ffmpegPath, ffprobePath })
```

Pastikan `ffmpeg -version` dan `ffprobe -version` jalan sebelum bot dinyalakan.

## Dipakai di WaClient

```ts
import { WaClient } from 'zhuxe-assistance'
import { createMediaProcessor } from '@zhuxe-js/media-utils'

const processor = createMediaProcessor()

const client = new WaClient({
  store,
  sessionId: 'default',
  media: { processor }
})

await client.message.send(jid, {
  type: 'video',
  media: '/tmp/clip.mp4',
  mimetype: 'video/mp4',
  caption: 'demo'
})
```

Video yang dikirim akan punya thumbnail, durasi, dan dimensi yang benar.

## Opsi `createMediaProcessor`

| Opsi | Keterangan |
|------|-----------|
| `ffmpegPath`, `ffprobePath` | Path binary. Default dicari dari `PATH`. |
| `imageThumbMaxEdge` | Sisi terpanjang thumbnail gambar dan video. |
| `imageThumbQuality` | Kualitas JPEG thumbnail (1 sampai 100). |
| `waveformPoints` | Jumlah titik waveform voice note (default WhatsApp: 64). |
| `voiceNoteBitRate` | Bitrate encoding Opus. |
| `voiceNoteSampleRate` | Sample rate encoding Opus. |
| `voiceNoteApplication` | Mode aplikasi encoding Opus. |

## Catatan

- Satu processor aman dipakai bersama oleh banyak `WaClient`, karena tidak menyimpan state.
- Kalau `ffmpeg` atau `ffprobe` tidak ada, operasi terkait dilewati dan dicatat sebagai `warn`. Bagian lain tetap jalan.
- WhatsApp hanya menampilkan waveform untuk Opus 16k mono, jadi voice note dinormalkan ke format itu.
- Di Docker Alpine, tambahkan `RUN apk add --no-cache ffmpeg` di Dockerfile.
