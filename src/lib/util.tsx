import { parseISO, format } from 'date-fns'

export function dateFormatting(dateString: any) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export function truncatePost(content: any) {
    return content.slice(0, 190).trimEnd()
}

export const select = (obj: any, keys: any) => {
    return keys.reduce((acc: any, key: any) => {
        acc[key] = obj[key];
        return acc;
    }, {});
};