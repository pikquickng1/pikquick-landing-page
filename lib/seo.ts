import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title = 'PikQuick - Fast & Reliable Application',
  description = 'Experience the fastest and most reliable solution for your needs. Join thousands of satisfied users today.',
  keywords = ['application', 'fast', 'reliable', 'productivity', 'solution'],
  ogImage = '/og-image.png',
  noIndex = false,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: 'PikQuick Team' }],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      siteName: 'PikQuick',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
