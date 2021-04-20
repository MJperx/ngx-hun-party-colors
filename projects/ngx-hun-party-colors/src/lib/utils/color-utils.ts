/**
 * Converts a hex to RGB
 *
 * @export
 */
export function hexToRgb(value: string): any {
    if (value.indexOf('#') === 0) {
        value = value.slice(1);

        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);

        return {r, g, b};
    }
}

/**
 * Converts a hex to RGB
 *
 * @export
 */
export function hexToHsl(value: string): any {
    let r = hexToRgb(value)?.r;
    let g = hexToRgb(value)?.g;
    let b = hexToRgb(value)?.b;

    r /= 255;
    g /= 255;
    b /= 255;

    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;

    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) {
        h = 0;
    } else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
        h = (b - r) / delta + 2;
    } else {
        h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
        h += 360;
    }

    l = (cmax + cmin) / 2;

    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);

    l = +(l * 100).toFixed(1);

    return {h, s, l};
}
