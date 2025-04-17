import { Component } from '@angular/core';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-wrap',
  imports: [
    BreadcrumbComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app-wrap.component.html',
})
export class AppWrapComponent {

}
