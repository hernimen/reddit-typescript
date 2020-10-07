import { fromUnixTime, formatDistanceToNow } from 'date-fns';

export default class DateParser {
    static parseDateIntoTimeAgo(date: number): string {
        const parsedDate = fromUnixTime(date)
        return `${formatDistanceToNow(parsedDate)} ago`
    }
}