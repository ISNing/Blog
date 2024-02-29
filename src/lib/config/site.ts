import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/avatar@512.jpg',
    bio: 'BIO\'s here!',
    name: 'ISNing',
    status: '🤔'
  },
  description: 'Just for recording&sharing something useful/useless',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: '',
  themeColor: '#3D4451',
  title: 'isning/blog',
}
