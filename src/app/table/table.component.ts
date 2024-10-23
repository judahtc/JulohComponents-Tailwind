import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  data: any[] = [];
  columns: any;
  ngOnInit(): void {
    this.columns = {
      id: 'id',
      component: 'component',
      description: 'description',
      items: 'items',
    };
    this.data = [
      {
        id: 1,
        component: 'button',
        items: 4,
        description: 'various button types with various classes',
      },
      {
        id: 2,
        component: 'card',
        items: 5,
        description: 'various card types with various classes',
      },
      {
        id: 3,
        component: 'inputs',
        items: 6,
        description: 'various input types with various classes',
      },

      {
        id: 4,
        component: 'reg forms',
        items: 9,
        description: 'various reg forms types with various classes',
      },

      {
        id: 5,
        component: 'login',
        items: 6,
        description: 'various login form types with various classes',
      },

      {
        id: 6,
        component: 'links',
        items: 6,
        description: 'various link types with various classes',
      },

      {
        id: 7,
        component: 'top navs',
        items: 3,
        description: 'various nav types with various classes',
      },
    ];
  }
}
