# Penyimpanan Data (Store)

Zhuxe tidak menyimpan data di memori secara default. Anda harus mengonfigurasi Store agar data sesi, kontak, dan pesan tersimpan permanen.

## Contoh Penggunaan SQLite
SQLite sangat direkomendasikan untuk bot skala kecil hingga menengah karena ringan dan tidak butuh server database terpisah.

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
        session: 'sqlite',
        identity: 'sqlite',
        senderKey: 'sqlite',
        appState: 'sqlite'
    }
})
