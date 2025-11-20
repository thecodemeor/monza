import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonzaUi } from './monza-ui';

describe('MonzaUi', () => {
  let component: MonzaUi;
  let fixture: ComponentFixture<MonzaUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonzaUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonzaUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
