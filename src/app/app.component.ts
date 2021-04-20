import { Component, OnInit } from '@angular/core';
import { HUNPartyColorsService } from '../../projects/ngx-hun-party-colors/src/lib/hun-party-colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private readonly hunPartyColorsService: HUNPartyColorsService) { }

  ngOnInit(): void {
    console.log(this.hunPartyColorsService.getPartyColorHex('fIdEsZ'));
    console.log(this.hunPartyColorsService.getPartyColorRgb('fIdEsZ'));
    console.log(this.hunPartyColorsService.getPartyColorHsl('DK'));
  }
}
