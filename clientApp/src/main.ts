import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Load on Ready
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
        platformBrowserDynamic().bootstrapModule(AppModule)
          .catch(err => console.log(err));
  }
}
