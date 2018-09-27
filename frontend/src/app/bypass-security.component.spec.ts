import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BypassSecurityComponent } from './bypass-security.component';

describe('BypassSecurityComponent', () => {
  let component: BypassSecurityComponent;
  let fixture: ComponentFixture<BypassSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BypassSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BypassSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
