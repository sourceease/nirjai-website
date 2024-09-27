import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjFooterComponent } from './nj-footer.component';

describe('NjFooterComponent', () => {
  let component: NjFooterComponent;
  let fixture: ComponentFixture<NjFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NjFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NjFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
