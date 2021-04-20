# ngx-hun-party-colors
[![npm version](https://badge.fury.io/js/ngx-hun-party-colors.svg)](https://badge.fury.io/js/ngx-hun-party-colors)
[![Build Status](https://travis-ci.com/madar94/ngx-hun-party-colors.svg?branch=main)](https://travis-ci.com/madar94/ngx-hun-party-colors)

## Installation

```shell
npm install ngx-hun-party-colors --save
```

Once installed you need to import our main module in your application module:

```js
import { HUNPartyColorsModule } from 'ngx-hun-party-colors';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [HUNPartyColorsModule, ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

```typescript
import { HUNPartyColorsService } from 'ngx-hun-party-colors';

@Component({...})
export class YourComponent {
  constructor(private colorService: HUNPartyColorsService) {}

  getColors() {
    this.colorService.getPartyColorHex('fidesz'); // Returns: #fd8100
    this.colorService.getPartyColorRgb('Fidesz – Magyar Polgári Szövetség'); // Returns: rgb(253, 129, 0)
    this.colorService.getPartyColorHsl('DK'); // Returns: hsl(210.11764705882354, 1, 0.5)
  }
}
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/madar94/ngx-hun-party-colors/issues).
