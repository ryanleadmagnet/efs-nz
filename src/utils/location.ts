export type LocationParams = { location?: string };

export function formatLocation(location?: string): string {
    if (!location) return 'across New Zealand';
    
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
