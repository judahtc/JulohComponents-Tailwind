import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputsComponent } from './inputs/inputs.component';
import { CardComponent } from './card/card.component';
import { PortalComponent } from './portal/portal.component';
import { RegistrationFormsComponent } from './registration-forms/registration-forms.component';
import { YoutubeDownloaderComponent } from './youtube-downloader/youtube-downloader.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { PositionsComponent } from './positions/positions.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      { path: 'card', component: CardComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'inputs', component: InputsComponent },
      { path: 'reg', component: RegistrationFormsComponent },
      { path: 'table', component: TableComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'positions', component: PositionsComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
  { path: '', component: PortalComponent },
  { path: 'yd', component: YoutubeDownloaderComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'cards', component: CardComponent },
  { path: 'scroll', component: ScrollComponent },
];
