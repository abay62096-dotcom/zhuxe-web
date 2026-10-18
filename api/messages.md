# Modul Pesan (Messages)

Melalui client.message, Anda bisa mengirim berbagai jenis pesan. Berikut adalah contoh implementasi versi Zhuxe:

## 1. Mengirim Pesan Teks Biasa
await client.message.send(jid, 'Ini adalah pesan teks dari bot Zhuxe.')

## 2. Mengirim Media (Gambar/Video)
await client.message.send(jid, {
    image: { url: './poster-zhuxe.jpg' },
    caption: 'Ini adalah poster rilis Zhuxe Asistance v1.0!'
})

## 3. Membuat Polling (Voting)
await client.message.send(jid, {
    poll: {
        name: 'Makan siang di mana?',
        options: ['Nasi Padang', 'Ayam Geprek', 'Mie Ayam'],
        selectableCount: 1
    }
})

## 4. Mengecek Jenis Pesan Masuk
function ambilTeksPesan(message) {
    if (!message) return ''
    return (
        message.conversation || 
        message.extendedTextMessage?.text || 
        message.imageMessage?.caption || 
        ''
    )
}
