import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTemplateComponent } from './portfolio-template.component';

describe('PortfolioTemplateComponent', () => {
  let component: PortfolioTemplateComponent;
  let fixture: ComponentFixture<PortfolioTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioTemplateComponent]
    });
    fixture = TestBed.createComponent(PortfolioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
