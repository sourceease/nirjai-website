import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjItTraningComponent } from './nj-it-traning.component';

describe('NjItTraningComponent', () => {
  let component: NjItTraningComponent;
  let fixture: ComponentFixture<NjItTraningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NjItTraningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NjItTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
