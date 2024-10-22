import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css',
})
export class PortalComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  clicked = true;
  inputs = false;
  card = false;
  button = false;
  regform = true;
  table = true;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let parameter = params['comp'];

      if (parameter == 'input') {
        this.inputsFunc();
      } else if (parameter == 'card') {
        this.cardFunc();
      } else if (parameter == 'button') {
        this.buttonFunc();
      } else if (parameter == 'regform') {
        this.regformFunc();
      } else if (parameter == 'table') {
        this.TableFunc();
      }
    });
  }
  inputsFunc() {
    this.inputs = true;
    this.card = false;
    this.button = false;
    this.regform = false;
    this.table = false;
  }
  cardFunc() {
    this.inputs = false;
    this.card = true;
    this.button = false;
    this.regform = false;
    this.table = false;
  }
  buttonFunc() {
    this.inputs = false;
    this.card = false;
    this.button = true;
    this.regform = false;
    this.table = false;
  }
  regformFunc() {
    this.inputs = false;
    this.card = false;
    this.button = false;
    this.regform = true;
    this.table = false;
  }
  TableFunc() {
    this.inputs = false;
    this.card = false;
    this.button = false;
    this.regform = false;
    this.table = true;
  }
}
