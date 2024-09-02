import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageComponent } from './portfolio-page.component';

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let fixture: ComponentFixture<PortfolioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioPageComponent]
    });
    fixture = TestBed.createComponent(PortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
