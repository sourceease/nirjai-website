import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItProgramComponent } from './it-program.component';

describe('ItProgramComponent', () => {
  let component: ItProgramComponent;
  let fixture: ComponentFixture<ItProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
