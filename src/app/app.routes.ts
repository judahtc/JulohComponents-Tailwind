import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputsComponent } from './inputs/inputs.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'cards', component: CardComponent },
];
