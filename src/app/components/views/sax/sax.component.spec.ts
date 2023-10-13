import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaxComponent } from './sax.component';

describe('SaxComponent', () => {
  let component: SaxComponent;
  let fixture: ComponentFixture<SaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaxComponent]
    });
    fixture = TestBed.createComponent(SaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
