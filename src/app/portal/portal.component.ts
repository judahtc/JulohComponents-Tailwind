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
  positions = false;
  constructor(private route: ActivatedRoute) {}
  clicked = true;
  inputs = false;
  card = false;
  button = false;
  regform = false;
  table = true;
  modal = false;
  settings = false;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let parameter = params['comp'];

      if (parameter == 'input') {
        this.inputsFunc();
      } else if (parameter == 'card') {
        this.cardFunc();
      } else if (parameter == 'button') {
        this.buttonFunc();
      } else if (parameter == 'regforms') {
        this.regformFunc();
        this.table = false;
      } else if (parameter == 'table') {
        this.TableFunc();
      } else if (parameter == 'positions') {
        this.PositionsFunc();
      } else if (parameter == 'modal') {
        this.ModalFunc();
      } else if (parameter == 'settings') {
        this.SettingsFunc();
      }
    });
  }

  inputsFunc() {
    this.inputs = true;
    this.card = false;
    this.button = false;
    this.regform = false;
    this.table = false;
    this.settings = false;
    this.modal = false;
    this.positions = false;
  }
  cardFunc() {
    this.inputs = false;
    this.card = true;
    this.button = false;
    this.regform = false;
    this.table = false;
    this.positions = false;
    this.settings = false;
    this.modal = false;
  }
  buttonFunc() {
    this.inputs = false;
    this.card = false;
    this.button = true;
    this.regform = false;
    this.table = false;
    this.settings = false;
    this.modal = false;
    this.positions = false;
  }
  regformFunc() {
    this.inputs = false;
    this.card = false;
    this.button = false;
    this.regform = true;
    this.table = false;
    this.settings = false;
    this.modal = false;
    this.positions = false;
  }
  TableFunc() {
    this.inputs = false;
    this.card = false;
    this.button = false;
    this.regform = false;
    this.table = true;
    this.settings = false;
    this.modal = false;
    this.positions = false;
  }
  PositionsFunc() {
    this.inputs = false;
    this.card = false;
    this.button = false;
    this.regform = false;
    this.table = false;
    this.settings = false;
    this.modal = false;
    this.positions = true;
  }
  ModalFunc() {
    this.inputs = false;
    this.card = false;
    this.button = false;
    this.regform = false;
    this.table = false;
    this.positions = false;
    this.settings = false;
    this.modal = true;
  }

  SettingsFunc() {
    this.inputs = false;
    this.card = false;
    this.button = false;
    this.regform = false;
    this.table = false;
    this.positions = false;
    this.modal = false;
    this.settings = true;
  }
}
