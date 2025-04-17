import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-root',
    imports: [FormsModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'

})
export class AppComponent {


}
