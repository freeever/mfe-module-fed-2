import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeSharedLibComponent } from './mfe-shared-lib.component';

describe('MfeSharedLibComponent', () => {
  let component: MfeSharedLibComponent;
  let fixture: ComponentFixture<MfeSharedLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfeSharedLibComponent]
    });
    fixture = TestBed.createComponent(MfeSharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
