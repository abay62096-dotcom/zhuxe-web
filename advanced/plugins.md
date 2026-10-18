# Fitur Lanjutan: Membuat Plugin

Zhuxe mendukung sistem plugin untuk memperluas fungsionalitas tanpa mengubah kode inti.

## Apa itu Plugin?
Plugin dapat berupa modul yang menambahkan fungsi baru ke WaClient. Contoh plugin bawaan adalah @zhuxe-js/voip (panggilan) dan @zhuxe-js/wam (telemetri).

## Cara Install Plugin
import { voipPlugin } from '@zhuxe-js/voip'

// Saat inisialisasi client
const client = new WaClient({ ... }, logger)
client.plugin(voipPlugin)
