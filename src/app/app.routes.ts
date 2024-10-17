import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputsComponent } from './inputs/inputs.component';
import { CardComponent } from './card/card.component';
import { PortalComponent } from './portal/portal.component';

export const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      { path: 'card', component: CardComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'inputs', component: InputsComponent },
    ],
  },
  { path: '', component: PortalComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'cards', component: CardComponent },
];
