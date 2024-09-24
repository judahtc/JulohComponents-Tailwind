import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputsComponent } from './inputs/inputs.component';

export const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'inputs', component: InputsComponent },
];
