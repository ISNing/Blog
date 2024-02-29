import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'isning/blog',
  subtitle: '',
  lang: 'en-US',
  description: 'Just for recording&sharing something useful/useless',
  author: {
    avatar: '/assets/avatar@512.jpg',
    name: 'ISNing',
    status: '🤔',
    bio: 'BIO\'s here!'
  },
  themeColor: '#3D4451'
}
