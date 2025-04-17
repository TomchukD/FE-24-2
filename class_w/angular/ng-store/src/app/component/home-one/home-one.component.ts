import { Component } from '@angular/core';
import { LoggerService } from 'src/app/component/logger.service';

@Component({
    selector: 'app-home-one',
    imports: [],
    templateUrl: './home-one.component.html',
    styleUrl: './home-one.component.css',
    providers: [LoggerService]
})
export class HomeOneComponent {
    constructor(private loggerService: LoggerService) {
        this.loggerService.log();
    }



    show(): void {
        console.log(this.loggerService.getCount());
    }
}
