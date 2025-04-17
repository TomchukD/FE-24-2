import { Component } from '@angular/core';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { MaterialComponent } from 'src/app/components/material/material.component';
import { ParentComponent } from 'src/app/components/parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RefCompComponent } from 'src/app/components/ref-comp/ref-comp.component';
import { FirstService } from 'src/app/service/first.service';

@Component({
  selector: 'app-home',
  imports: [
    JsonPipe,
    MaterialComponent,
    NgTemplateOutlet,
    ParentComponent,
    ReactiveFormsModule,
    RefCompComponent,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  value = 'angCW';
  selectHeader = '1';
  visible = false;

  constructor(private firstService: FirstService) {
    this.firstService.getAll().subscribe(res => {
      console.log(res);
    })
  }

  public onVisible(): void {
    this.visible = !this.visible;
  }
}
