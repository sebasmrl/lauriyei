import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lauriyei.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://lauriyei.vercel.app/servicios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://lauriyei.vercel.app/contactanos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://lauriyei.vercel.app/quienes-somos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://lauriyei.vercel.app/nuestros-clientes',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

  ]
}