import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
      var els = document.getElementsByClassName("dnnfree-ng-app");
      Array.prototype.forEach.call(els, function(el) {
        var moduleId = el.id.replace("module-", "");
        // var service = {
        //   path: "DnnFree.Modules.SPA.React",
        //   framework: $.ServicesFramework(moduleId)
        // }
        // service.baseUrl = service.framework.getServiceRoot(service.path);
        // ReactDOM.render(<Layout mid={moduleId} />, el);

        platformBrowserDynamic().bootstrapModule(AppModule, el)
          .catch(err => console.log(err));
      });
  }
}
