import { Component } from '@angular/core';
import { LoggerService } from 'src/app/component/logger.service';
import { HomeOneComponent } from 'src/app/component/home-one/home-one.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeOneComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [LoggerService]
})
export class HomeComponent {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log()
  }
  public count(): void{
    this.loggerService.setCount();
    setTimeout(()=>{
      console.log(this.loggerService.getCount())

    },1500)
  }

  show(): void{
    console.log(this.loggerService.getCount())
  }
}
