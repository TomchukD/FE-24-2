import { Component, OnInit } from '@angular/core';
import { HeaderLeyoutComponent } from 'src/app/components/header-leyout/header-leyout.component';
import { LifeComponent } from 'src/app/components/life/life.component';
import { SmartComponent } from 'src/app/components/smart/smart.component';
import { TodoComponent } from 'src/app/todo/todo';
import { HelloService } from 'src/app/todo/hello.service';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { RootComponent } from 'src/app/changeD/root/root.component';

@Component({
  selector: 'td-root1',
  imports: [HeaderLeyoutComponent, LifeComponent, SmartComponent, TodoComponent, RootComponent],
  templateUrl: './app.component.html',
})
export class AppComponent{
  // items: any[] = [];
  // constructor(public helloService: HelloService) {}
  //
  // ngOnInit(): void {
  //   this.loadData();
  // }
  //
  // private loadData(): void {
  //   this.helloService.getPost().subscribe((posts) => {
  //     this.items = posts;
  //     console.log(posts);
  //   });
  // }
  // hide = false;
  // changes = 'Tomchuk';
  // constructor() {
  //   setTimeout(() => {
  //     this.hide = true;
  //     this.changes = 'Tomchuk DIMA';
  //   }, 3000);
  // }
}
