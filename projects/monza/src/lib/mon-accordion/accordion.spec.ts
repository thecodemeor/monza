import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonAccordion } from './accordion';

describe('Accordion', () => {
  let component: MonAccordion;
  let fixture: ComponentFixture<MonAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonAccordion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonAccordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
