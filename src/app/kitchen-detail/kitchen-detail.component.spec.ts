import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenDetailComponent } from './kitchen-detail.component';

describe('KitchenDetailComponent', () => {
  let component: KitchenDetailComponent;
  let fixture: ComponentFixture<KitchenDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenDetailComponent]
    });
    fixture = TestBed.createComponent(KitchenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
