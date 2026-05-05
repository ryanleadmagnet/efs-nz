import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar News & Insights — New Zealand & Sydney',
    description:
        'Stay up to date with the latest solar energy news, tips, and insights from EFS Solar. Learn about solar systems, energy savings, government rebates, and more.',
    keywords: ['solar news', 'solar energy New Zealand', 'solar tips', 'solar rebates', 'EFS Solar blog'],
    alternates: { canonical: 'https://www.efssolar.co.nz/news' },
    openGraph: {
        title: 'Solar News & Insights | EFS Solar',
        description: 'Latest solar energy news, tips, and insights from EFS Solar.',
        url: 'https://www.efssolar.co.nz/news',
    },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
