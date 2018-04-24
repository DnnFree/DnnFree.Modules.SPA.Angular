import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    // Get Module-ID from Root
    var els = document.getElementsByClassName("dnnfree-ng-app");
    Object.keys(els).forEach(key => {
      var moduleId = els[key].id.replace("module-", "");
      console.log('moduleId:', moduleId);
    });
  }
}
