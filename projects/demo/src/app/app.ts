import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MonButton, MonCurrency, MonDivider, MonIcon,
        MonBadge, MonCard, MonCardHeader, MonCardBody, 
        MonCardHeaderActions, MonCardFooter, MonCheckbox,
        MonCheckboxGroup, MonRadio, MonRadioGroup,
        MonInput, MonSwitch, MonSelect, MonOption,
        MonProgress, MonButtonIcon,
        MonAccordion, MonAccordionItem,
        MonDatepicker, MonPagination } from 'monza-ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MonBadge,
    MonButton,
    MonCard, MonCardHeader, MonCardFooter, MonCardBody, MonCardHeaderActions,
    MonCheckbox, MonCheckboxGroup,
    MonCurrency,
    MonDivider,
    MonIcon,
    MonRadio, MonRadioGroup,
    MonInput, MonSwitch,
    MonSelect, MonOption,
    MonProgress,
    MonButtonIcon,
    MonAccordion, MonAccordionItem,
    MonDatepicker, MonPagination
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo');

  temp: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.temp = false;
}, 3000);
  }

  selectedItems = [];
  payment = ''
  email = new FormControl<string>('z@iium.edu.my', { nonNullable: true });
  name = '';
  pwd = '';

  fruits = ['Apple', 'Orange', 'Banana', 'Grape'];
  selected: string | null = null;
  test = '';

  onChanged(value: string | null) {
    this.selected = value;
  }

  monzaIcons = [
    'name_tag',

`battery`,
`battery_full`,
`battery_charging`,
`bolt`,
`bolt_cirlce`,
`gas_station`,
`power_station`,
`plug`,
`power_button`,
`cpu`,
`monitor`,
`display`,
`mouse`,
`headphones`,
`game_controller`,
`printer`,
`speedometer`,
  ]



allItems = Array.from({ length: 123 }, (_, i) => `Item #${i + 1}`);

  totalItems = this.allItems.length;
  pageSize = 10;
  pageIndex = 0;

  get pageItems() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    return this.allItems.slice(start, end);
  }

  onPageChange(e: { pageIndex: number; pageSize: number }) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
  }

  selectedDate = new Date();
}

