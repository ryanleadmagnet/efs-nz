import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar News & Insights | EFS Solar Gold Coast & Sydney',
    description:
        'Stay up to date with the latest solar energy news, tips, and insights from EFS Solar. Learn about solar systems, energy savings, government rebates, and more.',
    keywords: ['solar news', 'solar energy Australia', 'solar tips', 'solar rebates', 'EFS Solar blog'],
    alternates: { canonical: 'https://www.efssolar.com.au/news' },
    openGraph: {
        title: 'Solar News & Insights | EFS Solar',
        description: 'Latest solar energy news, tips, and insights from EFS Solar.',
        url: 'https://www.efssolar.com.au/news',
    },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
