import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { PaginationService } from 'ngx-pagination';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  data_list: any[] = [];
  len: number = 0;
  constructor(public paginationService: PaginationService) {}
  itemsPerPage: number = 6;
  changePage(page: number) {
    this.p = page;
  }
  data: any[] = [];
  columns: any;
  directionlink = true;

  pageSize: any = 1;

  p: number = 1;
  collection: any[] = this.data;
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

    this.collection = this.data;
    this.data_list = [];
    this.len = this.collection.length;
    this.len = this.len / this.itemsPerPage;
    this.len = Math.ceil(this.len);
    for (let i = 1; i <= this.len; i++) {
      this.data_list.push(i);
    }
  }

  showModal = false; // Controls modal visibility

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
