import { ComponentFixture, TestBed } from '@angular/core/testing';

import { weighsInComponent } from './weighs-in.component';

describe('weighsInComponent', () => {
  let component: weighsInComponent;
  let fixture: ComponentFixture<weighsInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [weighsInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(weighsInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
