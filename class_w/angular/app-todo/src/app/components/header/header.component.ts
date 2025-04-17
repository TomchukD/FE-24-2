import { Component, Input } from '@angular/core';
import { HeaderMenuComponent } from 'src/app/components/header-menu/header-menu.component';
import { HeaderConfigInterface, HeaderDataInterface } from 'src/app/components/header/header.interface';

@Component({
  selector: 'app-header',
  imports: [HeaderMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() data!: HeaderDataInterface;

  @Input() config?: HeaderConfigInterface;


  constructor() {
    console.log(this.data);
    console.log(this.config);
  }
}
