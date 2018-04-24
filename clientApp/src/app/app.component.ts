import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    var els = document.getElementsByClassName("dnnfree-ng-app");
    Object.keys(els).forEach(key => {
      var moduleId = els[key].id.replace("module-", "");
      console.log('moduleId:', moduleId);
      this[els[key].name] = els[key].value;
    });
  }
}
