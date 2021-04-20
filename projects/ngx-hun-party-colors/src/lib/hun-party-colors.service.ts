import { Injectable } from '@angular/core';
import { partyColors } from './utils/colors';
import { hexToHsl, hexToRgb, } from './utils/color-utils';

@Injectable()
export class HUNPartyColorsService {
    private colors = partyColors;

    getPartyColorHex(partyName: string): string {
        return this.getColor(partyName);
    }

    getPartyColorRgb(partyName: string): string {
        const color = hexToRgb(this.getColor(partyName));
        return `rgb(${color?.r}, ${color?.g}, ${color?.b})`;
    }

    getPartyColorHsl(partyName: string): string {
        const color = hexToHsl(this.getColor(partyName));
        return `hsl(${color?.h}, ${color?.s}, ${color?.l})`;
    }

    private getColor(partyName: string): string {
        let partyColor = '';

        this.colors.map((color) => {
            if (color.name.toLocaleString().toLowerCase().indexOf(partyName.toLowerCase()) !== -1) {
                partyColor = color.color;
            }
        });

        return partyColor;
    }
}
