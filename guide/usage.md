# Penggunaan Dasar

Berikut adalah contoh kode minimal untuk menghubungkan zhuxe-assistance dengan WhatsApp.

import { WaClient, createStore } from 'zhuxe-assistance'
import { createSqliteStore } from '@zhuxe-js/store-sqlite'

const store = createStore({
    backends: { sqlite: createSqliteStore({ path: '.auth/state.sqlite' }) },
    providers: { auth: 'sqlite', signal: 'sqlite', preKey: 'sqlite', session: 'sqlite' }
})

const client = new WaClient({ store, sessionId: 'default' })

client.on('auth_qr', ({ qr }) => {
    console.log('Scan QR ini:', qr)
})

await client.connect()
