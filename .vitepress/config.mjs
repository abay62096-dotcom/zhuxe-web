import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id',
  title: 'Zhuxe Asistance',
  description: 'Implementasi protokol WhatsApp Web berbasis TypeScript untuk beban kerja berskala besar.',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Zhuxe Asistance',
    nav: [
      { text: 'Panduan', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: 'Konsep', link: '/concepts/stores', activeMatch: '/concepts/' },
      { text: 'API', link: '/api/client', activeMatch: '/api/' },
      { text: 'FAQ', link: '/guide/faq' }
    ],
    sidebar: [
      {
        text: 'Mulai',
        items: [
          { text: 'Pengenalan', link: '/guide/introduction' },
          { text: 'Instalasi', link: '/guide/installation' },
          { text: 'Mulai Cepat', link: '/guide/quickstart' }
        ]
      },
      {
        text: 'Konsep',
        items: [{ text: 'Penyimpanan Data (Store)', link: '/concepts/stores' }]
      },
      {
        text: 'API',
        items: [
          { text: 'WaClient', link: '/api/client' },
          { text: 'Pesan', link: '/api/messages' },
          { text: 'Grup', link: '/api/groups' }
        ]
      },
      {
        text: 'Lanjutan',
        items: [
          { text: 'Plugin', link: '/advanced/plugins' },
          { text: 'VoIP (Panggilan)', link: '/advanced/voip' }
        ]
      },
      {
        text: 'Lainnya',
        items: [
          { text: 'FAQ', link: '/guide/faq' },
          { text: 'Tentang', link: '/guide/about' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Cari', buttonAriaLabel: 'Cari' },
          modal: {
            noResultsText: 'Tidak ada hasil untuk',
            resetButtonTitle: 'Hapus pencarian',
            footer: { selectText: 'pilih', navigateText: 'pindah', closeText: 'tutup' }
          }
        }
      }
    },
    outline: { label: 'Di halaman ini', level: [2, 3] },
    docFooter: { prev: 'Sebelumnya', next: 'Selanjutnya' },
    darkModeSwitchLabel: 'Tema',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Kembali ke atas',
    lastUpdated: { text: 'Diperbarui' },
    editLink: { pattern: 'https://github.com/USERNAME/REPO/edit/main/:path', text: 'Edit halaman ini' },
    footer: { message: 'Dirilis dengan lisensi MIT.', copyright: 'Zhuxe Asistance' }
  }
})
