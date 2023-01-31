import { DateTime } from 'luxon';

export const toUtcDate = (str: string): DateTime =>
  DateTime.fromISO(str, { zone: 'utc' });
export const formatDate = (date: DateTime): string =>
  date.toFormat("yyyy'年'M'月'd'日'");
