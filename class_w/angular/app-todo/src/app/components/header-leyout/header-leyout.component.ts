import { Component } from '@angular/core';
import { HeaderBanerComponent } from 'src/app/components/header-baner/header-baner.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-leyout',
  imports: [HeaderBanerComponent, HeaderComponent, FormsModule],
  templateUrl: './header-leyout.component.html',
  styleUrl: './header-leyout.component.scss'
})
export class HeaderLeyoutComponent {
  showMenu = false;
  disableMEnu = true;
  data: any[] = [];
  value = 0
  constructor() {
    setInterval(()=>{
      this.value = Math.floor(Math.random() * 1000);
    }, 3000)
  }

  onShowValue(): void{
    console.log(this.value);
  }
}
