import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercantComponent } from './percant.component';

describe('PercantComponent', () => {
  let component: PercantComponent;
  let fixture: ComponentFixture<PercantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
