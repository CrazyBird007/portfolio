import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPartComponent } from './portfolio-part.component';

describe('PortfolioPartComponent', () => {
  let component: PortfolioPartComponent;
  let fixture: ComponentFixture<PortfolioPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioPartComponent]
    });
    fixture = TestBed.createComponent(PortfolioPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
