import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjHeaderComponent } from './nj-header.component';

describe('NjHeaderComponent', () => {
  let component: NjHeaderComponent;
  let fixture: ComponentFixture<NjHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NjHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NjHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
