export type LocationParams = { location?: string };

export function formatLocation(location?: string): string {
    if (!location) return 'across QLD and NSW';
    if (location === 'gold-coast-sydney') return 'Gold Coast & Sydney';
    
    return location
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function formatPageTitle(baseTitle: string, location?: string): string {
    const loc = formatLocation(location);
    // User wants "EFS Solar | " first
    return `EFS Solar | ${baseTitle} ${loc}`;
}
