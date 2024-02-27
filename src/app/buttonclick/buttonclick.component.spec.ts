import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonclickComponent } from './buttonclick.component';

describe('ButtonclickComponent', () => {
  let component: ButtonclickComponent;
  let fixture: ComponentFixture<ButtonclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonclickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
