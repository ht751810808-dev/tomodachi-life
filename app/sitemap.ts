import { MetadataRoute } from 'next';

const baseUrl = 'https://www.tomodachi-life.org';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl,                                                          lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${baseUrl}/tomodachi-life-living-the-dream`,                     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/tomodachi-life-2`,                                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/tomodachi-life-switch`,                               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/tomodachi-life-3ds`,                                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/tomodachi-life-personalities`,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/tomodachi-life-living-the-dream/pc`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tomodachi-life-living-the-dream/emulator`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tomodachi-life-living-the-dream/rom`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tomodachi-life-living-the-dream/nsp`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tomodachi-life-living-the-dream/personality-guide`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tomodachi-life-pc`,                                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tomodachi-life-rom`,                                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tomodachi-life-qr-codes`,                             lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/tomodachi-life-save-editor`,                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tomodachi-life-release-date`,                         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tomodachi-life-hk`,                                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
