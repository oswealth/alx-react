import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test ('returns the correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});

test ('returns the correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test ('returns current string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
