import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'After Installation — Get Started',
    description: 'EFS Solar after installation guide. Download required documents, find FAQs, and watch video tutorials to get the most from your solar system.',
    keywords: ['EFS Solar after installation', 'solar setup guide', 'solar monitoring app', 'solar FAQs', 'after solar installation', 'solar inverter restart'],
    alternates: { canonical: 'https://www.efssolar.co.nz/get-started' },
    openGraph: {
        title: 'After Installation – Get Started | EFS Solar',
        description: 'Download your after-install docs, explore FAQs, and watch video tutorials.',
        url: 'https://www.efssolar.co.nz/get-started',
    },
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
