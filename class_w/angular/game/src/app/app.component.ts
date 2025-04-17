import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from 'src/app/game/game.component';

@Component({
  selector: 'app-root',
    imports: [GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'game';
}
