import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                //disallow: '',
            }
        ],
        sitemap: 'https://lauriyei.vercel.app/sitemap.xml',
    }
}