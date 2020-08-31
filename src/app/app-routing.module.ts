import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { MaladesComponent } from './malades/malades.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { LoginComponent } from './administrateur/login/login.component';
import { MedecinlogComponent } from './medecins/medecinlog/medecinlog.component';
import { MaladelogComponent } from './malades/maladelog/maladelog.component';
import { AjouterMaladeComponent } from './administrateur/ajouter-malade/ajouter-malade.component'
import { AjouterPersonnelComponent } from './administrateur/ajouter-personnel/ajouter-personnel.component'
import { MedecinecritureComponent } from './medecins/medecinecriture/medecinecriture.component'
import { MedecinlectureComponent } from './medecins/medecinlecture/medecinlecture.component'

import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'loginAdmin', component: LoginComponent },
  { path: 'loginMedecin', component: MedecinlogComponent },
  { path: 'loginMalade', component: MaladelogComponent },

  { path: 'pageAdmin/:id/:name/:prenom/:email/:tel', component: AdministrateurComponent },
  { path: 'pageMalade/:nomAdmin/:prenomAdmin/:numeroTel/:mailAdmin', component: MaladesComponent },

  { path: 'pageMedecinEcriture/:_nomFonctionnaire/:_prenomFonctionnaire/:_telephoneFonctionnaire/:_mailFonctionnaire/:_roleFonctionnaire', component: MedecinecritureComponent },
  { path: 'pageMedecinLecture/:_nomFonctionnaire/:_prenomFonctionnaire/:_telephoneFonctionnaire/:_mailFonctionnaire/:_roleFonctionnaire', component: MedecinlectureComponent },

  { path: 'pageAddPersonnel', component: AjouterPersonnelComponent },
  { path: 'pageAddMalade', component: AjouterMaladeComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }