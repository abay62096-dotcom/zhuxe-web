# API: Grup (Groups)

Modul client.group memungkinkan bot untuk mengelola grup WhatsApp.

## Membuat Grup Baru
const group = await client.group.create('Nama Grup Baru', ['6281234@s.whatsapp.net'])

## Menambahkan Anggota
await client.group.addParticipants(group.id, ['6285678@s.whatsapp.net'])

## Promosikan menjadi Admin
await client.group.promoteParticipants(group.id, ['6285678@s.whatsapp.net'])
