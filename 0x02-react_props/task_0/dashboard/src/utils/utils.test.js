import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
    test('getFullYear returns the correct year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('getFooterCopy returns correct string when isIndex is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('getFooterCopy returns correct string when isIndex is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('getLatestNotification return correct string', () => {
        const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(expectedString);
    });
});
