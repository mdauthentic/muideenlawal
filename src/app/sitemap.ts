import { MetadataRoute } from 'next';

const HOST = "https://muideenlawal.com";


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: HOST,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${HOST}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${HOST}/undr/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${HOST}/undr/support`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${HOST}/tallid/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        /* {
            url: `${HOST}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${HOST}/links`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        }, */
    ]
}
