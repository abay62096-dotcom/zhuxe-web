import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Zhuxe Asistance",
  description: "Dokumentasi Resmi Zhuxe Asistance",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // Menu Atas (Navbar)
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Panduan',
        items: [
          { text: 'Pengenalan', link: '/guide/introduction' },
          { text: 'Instalasi', link: '/guide/installation' },
          { text: 'Mulai Cepat', link: '/guide/quickstart' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'WaClient', link: '/api/client' },
          { text: 'Pesan (Messages)', link: '/api/messages' },
          { text: 'Grup (Groups)', link: '/api/groups' }
        ]
      },
      {
        text: 'Informasi',
        items: [
          { text: 'NPMJS Package', link: 'https://www.npmjs.com/package/zhuxe-assistance' },
          { text: 'Tentang Proyek', link: '/guide/about' },
          { text: 'FAQ', link: '/guide/faq' },
          { text: 'Changelog', link: '/guide/changelog' }
        ]
      }
    ],
    // Sidebar (Menu Kiri)
    sidebar: [
      {
        text: '🚀 Memulai',
        items: [
          { text: 'Pengenalan', link: '/guide/introduction' },
          { text: 'Instalasi', link: '/guide/installation' },
          { text: 'Mulai Cepat', link: '/guide/quickstart' }
        ]
      },
      {
        text: '🧠 Konsep Inti',
        items: [
          { text: 'Arsitektur Sistem', link: '/concepts/architecture' },
          { text: 'Autentikasi & Sesi', link: '/concepts/authentication' },
          { text: 'Penyimpanan Data', link: '/concepts/stores' }
        ]
      },
      {
        text: '📚 Referensi API',
        items: [
          { text: 'WaClient', link: '/api/client' },
          { text: 'Pesan (Messages)', link: '/api/messages' },
          { text: 'Grup (Groups)', link: '/api/groups' }
        ]
      },
      {
        text: '⚙️ Fitur Lanjutan',
        items: [
          { text: 'Membuat Plugin', link: '/advanced/plugins' },
          { text: 'Panggilan (VoIP)', link: '/advanced/voip' }
        ]
      },
      {
        text: 'ℹ️ Informasi',
        items: [
          { text: 'NPM Package', link: 'https://www.npmjs.com/package/zhuxe-assistance' },
          { text: 'Tentang Proyek', link: '/guide/about' },
          { text: 'FAQ', link: '/guide/faq' },
          { text: 'Changelog', link: '/guide/changelog' }
        ]
      }
    ],
    // Hanya menyisakan ikon GitHub di pojok kanan atas
    socialLinks: [
      { icon: 'github', link: 'https://github.com/abay62096-dotcom/zhuxe' }
    ],
    footer: {
      message: 'Dirilis di bawah Lisensi MIT. Dibuat dengan ❤️ oleh abay62096-dotcom.',
      copyright: 'Copyright © 2026 abay62096-dotcom'
    },
    outline: {
      level: 'deep',
      label: 'Di halaman ini'
    }
  }
})
