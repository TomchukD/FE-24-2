import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
    selector: 'app-example',
    imports: [],
    standalone: true,
    templateUrl: './example.component.html',
    styleUrl: './example.component.css',
    changeDetection: ChangeDetectionStrategy.Default
})
export class ExampleComponent {
    @Input() val: string = '';
    constructor(public cd: ChangeDetectorRef) {
        setTimeout(() => {
            this.val = 'HELLOOOOOOOO';
            console.log('+++');
        }, 2500);
    }
}
