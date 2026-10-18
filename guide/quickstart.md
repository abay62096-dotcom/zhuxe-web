# Mulai Cepat: Bot Echo Pertama Anda

Pada tutorial ini, kita akan membuat bot WhatsApp pertama Anda. Bot ini akan membalas pesan "Halo" dengan "Halo juga!".

## 1. Struktur Folder
Buat folder proyek Anda dan pastikan strukturnya seperti ini:

    bot-zhuxe-saya/
    ├── index.js
    └── package.json

## 2. Tulis Kode Bot
Buat file `index.js` menggunakan teks editor Anda, lalu masukkan kode berikut:

    import { WaClient, createStore, ConsoleLogger } from 'zhuxe-assistance'
    import { createSqliteStore } from '@zhuxe-js/store-sqlite'

    // 1. Konfigurasi Database (agar sesi tersimpan)
    const store = createStore({
        backends: { sqlite: createSqliteStore({ path: '.auth/state.sqlite' }) },
        providers: { 
            auth: 'sqlite', 
            signal: 'sqlite', 
            preKey: 'sqlite', 
            session: 'sqlite', 
            identity: 'sqlite', 
            senderKey: 'sqlite', 
            appState: 'sqlite' 
        }
    })

    // 2. Inisialisasi Client
    const client = new WaClient(
        { store, sessionId: 'sesi-bot-utama' }, 
        new ConsoleLogger('info')
    )

    // 3. Tangkap Event QR Code (Login)
    client.on('auth_qr', ({ qr }) => {
        console.log('\n=== SCAN QR CODE INI DI WHATSAPP ===\n')
        console.log(qr)
    })

    // 4. Tangkap Event Pesan Masuk
    client.on('message', async (event) => {
        const pesanTeks = event.message?.conversation
        const pengirim = event.key.remoteJid
        
        // Abaikan pesan dari bot sendiri
        if (event.key.fromMe) return 

        if (pesanTeks === 'Halo') {
            console.log(`Membalas pesan dari ${pengirim}`)
            await client.message.send(pengirim, 'Halo juga! Saya Zhuxe Bot.')
        }
    })

    // 5. Jalankan Koneksi
    console.log('Memulai bot...')
    await client.connect()

## 3. Jalankan Bot
Kembali ke terminal, lalu jalankan:

    node index.js

1. Tunggu hingga muncul kode QR di terminal.
2. Buka WhatsApp di HP Anda.
3. Masuk ke **Perangkat Tertaut** > **Tautkan Perangkat**.
4. Scan QR Code tersebut.
5. Coba kirim pesan "Halo" ke nomor bot Anda!
