import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar Monitoring Apps',
    description: 'Track your solar energy production and consumption in real-time with our supported monitoring apps for Energizer, Goodwe, and Sungrow inverters.',
    alternates: { canonical: 'https://www.efssolar.com.au/solar-monitoring' },
    openGraph: {
        title: 'Solar Monitoring Apps | EFS Solar',
        description: 'Stay monitoring your solar system performance with easy-to-use apps.',
        url: 'https://www.efssolar.com.au/solar-monitoring',
    },
};

export default function SolarMonitoringLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
