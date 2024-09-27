import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjHomeComponent } from './nj-home.component';

describe('NjHomeComponent', () => {
  let component: NjHomeComponent;
  let fixture: ComponentFixture<NjHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NjHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NjHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
