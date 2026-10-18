import{_ as e,o as n,c as t,a2 as o}from"./chunks/framework.CdvW4CUT.js";const k=JSON.parse('{"title":"Mulai Cepat: Bot Echo Pertama Anda","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickstart.md","filePath":"guide/quickstart.md","lastUpdated":null}'),i={name:"guide/quickstart.md"};function r(s,a,l,d,u,c){return n(),t("div",null,[...a[0]||(a[0]=[o(`<h1 id="mulai-cepat-bot-echo-pertama-anda" tabindex="-1">Mulai Cepat: Bot Echo Pertama Anda <a class="header-anchor" href="#mulai-cepat-bot-echo-pertama-anda" aria-label="Permalink to &quot;Mulai Cepat: Bot Echo Pertama Anda&quot;">​</a></h1><p>Pada tutorial ini, kita akan membuat bot WhatsApp pertama Anda. Bot ini akan membalas pesan &quot;Halo&quot; dengan &quot;Halo juga!&quot;.</p><h2 id="_1-struktur-folder" tabindex="-1">1. Struktur Folder <a class="header-anchor" href="#_1-struktur-folder" aria-label="Permalink to &quot;1. Struktur Folder&quot;">​</a></h2><p>Buat folder proyek Anda dan pastikan strukturnya seperti ini:</p><pre><code>bot-zhuxe-saya/
├── index.js
└── package.json
</code></pre><h2 id="_2-tulis-kode-bot" tabindex="-1">2. Tulis Kode Bot <a class="header-anchor" href="#_2-tulis-kode-bot" aria-label="Permalink to &quot;2. Tulis Kode Bot&quot;">​</a></h2><p>Buat file <code>index.js</code> menggunakan teks editor Anda, lalu masukkan kode berikut:</p><pre><code>import { WaClient, createStore, ConsoleLogger } from &#39;zhuxe-assistance&#39;
import { createSqliteStore } from &#39;@zhuxe-js/store-sqlite&#39;

// 1. Konfigurasi Database (agar sesi tersimpan)
const store = createStore({
    backends: { sqlite: createSqliteStore({ path: &#39;.auth/state.sqlite&#39; }) },
    providers: { 
        auth: &#39;sqlite&#39;, 
        signal: &#39;sqlite&#39;, 
        preKey: &#39;sqlite&#39;, 
        session: &#39;sqlite&#39;, 
        identity: &#39;sqlite&#39;, 
        senderKey: &#39;sqlite&#39;, 
        appState: &#39;sqlite&#39; 
    }
})

// 2. Inisialisasi Client
const client = new WaClient(
    { store, sessionId: &#39;sesi-bot-utama&#39; }, 
    new ConsoleLogger(&#39;info&#39;)
)

// 3. Tangkap Event QR Code (Login)
client.on(&#39;auth_qr&#39;, ({ qr }) =&gt; {
    console.log(&#39;\\n=== SCAN QR CODE INI DI WHATSAPP ===\\n&#39;)
    console.log(qr)
})

// 4. Tangkap Event Pesan Masuk
client.on(&#39;message&#39;, async (event) =&gt; {
    const pesanTeks = event.message?.conversation
    const pengirim = event.key.remoteJid
    
    // Abaikan pesan dari bot sendiri
    if (event.key.fromMe) return 

    if (pesanTeks === &#39;Halo&#39;) {
        console.log(\`Membalas pesan dari \${pengirim}\`)
        await client.message.send(pengirim, &#39;Halo juga! Saya Zhuxe Bot.&#39;)
    }
})

// 5. Jalankan Koneksi
console.log(&#39;Memulai bot...&#39;)
await client.connect()
</code></pre><h2 id="_3-jalankan-bot" tabindex="-1">3. Jalankan Bot <a class="header-anchor" href="#_3-jalankan-bot" aria-label="Permalink to &quot;3. Jalankan Bot&quot;">​</a></h2><p>Kembali ke terminal, lalu jalankan:</p><pre><code>node index.js
</code></pre><ol><li>Tunggu hingga muncul kode QR di terminal.</li><li>Buka WhatsApp di HP Anda.</li><li>Masuk ke <strong>Perangkat Tertaut</strong> &gt; <strong>Tautkan Perangkat</strong>.</li><li>Scan QR Code tersebut.</li><li>Coba kirim pesan &quot;Halo&quot; ke nomor bot Anda!</li></ol>`,12)])])}const m=e(i,[["render",r]]);export{k as __pageData,m as default};
