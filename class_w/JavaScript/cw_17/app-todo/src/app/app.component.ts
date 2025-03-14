import { Component } from '@angular/core';
import { HeaderLeyoutComponent } from 'src/app/components/header-leyout/header-leyout.component';
import { LifeComponent } from 'src/app/components/life/life.component';
import { SmartComponent } from 'src/app/components/smart/smart.component';

@Component({
  selector: 'td-root1',
  imports: [HeaderLeyoutComponent, LifeComponent, SmartComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  hide = false;
  changes = 'Tomchuk';
  constructor() {
    setTimeout(() => {
      this.hide = true;
      this.changes = 'Tomchuk DIMA';
    }, 3000);
  }
}
