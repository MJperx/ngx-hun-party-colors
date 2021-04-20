import * as d3_color from 'd3-color';

/**
 * Converts a hex to RGB
 *
 * @export
 */
export function hexToRgb(value: string): any {
    return d3_color.rgb(value);
}

/**
 * Converts a hex to RGB
 *
 * @export
 */
export function hexToHsl(value: string): any {
    return d3_color.hsl(value);
}
