import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from '../../connection.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecinlecture',
  templateUrl: './medecinlecture.component.html',
  styleUrls: ['./medecinlecture.component.css']
})
export class MedecinlectureComponent implements OnInit {
  public listview: any = [];

  private web3: Web3;

  public listeid: any[];

  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];

  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();

  public PPNom;
  public PPPrenom;
  public PPtel;
  public PPemail;
  public PProle;

  constructor(private router: ActivatedRoute, private readonly http: HttpClient, private connection: ConnectionService) { }


  ngOnInit() {


    this.smartContract = this.connection.ConnectionMalade();
    console.log("debut Appel");


    console.log("Fin Appel");
    this.LoadListeMalade();

    let _nomFonctionnaire = this.router.snapshot.paramMap.get('_nomFonctionnaire');
    this.PPNom = _nomFonctionnaire;

    let _prenomFonctionnaire = this.router.snapshot.paramMap.get('_prenomFonctionnaire');
    this.PPPrenom = _prenomFonctionnaire;

    let _telephoneFonctionnaire = this.router.snapshot.paramMap.get('_telephoneFonctionnaire');
    this.PPtel = _telephoneFonctionnaire;

    let _mailFonctionnaire = this.router.snapshot.paramMap.get('_mailFonctionnaire');
    this.PPemail = _mailFonctionnaire;

    let _roleFonctionnaire = this.router.snapshot.paramMap.get('_roleFonctionnaire');
    this.PProle = _roleFonctionnaire;
  }


  async LoadListeMalade() {

    console.log("11***");

    let nombre = await this.smartContract.methods.getNombreMalade().call();


    this.listeid = await this.smartContract.methods.getAllid().call();


    for (var i = 0; i < nombre; i++) {
      console.log(this.listeid[i]);

      let CurrentEmail = await this.smartContract.methods.getMailById(this.listeid[i]).call();

      let data = {
        "Id": i + 1,
        "Nom": await this.smartContract.methods.getNomMalade(CurrentEmail).call(),
        "Prenom": await this.smartContract.methods.getPrenomMalade(CurrentEmail).call(),
        "Tel": await this.smartContract.methods.getTelephoneMalade(CurrentEmail).call(),
        "Email": await this.smartContract.methods.getMailMalade(CurrentEmail).call(),
        "address": await this.smartContract.methods.getAddressMalade(CurrentEmail).call()

      };

      this.listview.push(data);

    }




  }
}
