import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonzaStyles } from './monza-styles';

describe('MonzaStyles', () => {
  let component: MonzaStyles;
  let fixture: ComponentFixture<MonzaStyles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonzaStyles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonzaStyles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
