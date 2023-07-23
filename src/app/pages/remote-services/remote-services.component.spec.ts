import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteServicesComponent } from './remote-services.component';

describe('RemoteServicesComponent', () => {
  let component: RemoteServicesComponent;
  let fixture: ComponentFixture<RemoteServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteServicesComponent]
    });
    fixture = TestBed.createComponent(RemoteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
