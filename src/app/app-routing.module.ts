import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { EmailComponent } from './components/views/email/email.component';
import { QrcodeComponent } from './components/views/qrcode/qrcode.component';
import { HabilidadesComponent } from './components/views/habilidades/habilidades.component';
import { SaxComponent } from './components/views/sax/sax.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "email", component: EmailComponent
  },
  {
    path: "qrcode", component: QrcodeComponent
  },
  {
    path: "habilidades", component: HabilidadesComponent
  },
  {
    path: "sax", component: SaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
