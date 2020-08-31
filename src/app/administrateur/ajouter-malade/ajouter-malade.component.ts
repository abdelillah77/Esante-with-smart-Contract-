import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from '../../connection.service';


@Component({
  selector: 'app-ajouter-malade',
  templateUrl: './ajouter-malade.component.html',
  styleUrls: ['./ajouter-malade.component.css']
})
export class AjouterMaladeComponent implements OnInit {


  public _nomMalade = "***";
  public _prenomMalade = "***";
  public _addressMalade;
  public _sexeMalade = "***";
  public _telephoneMalade = "***";
  public _mailMalade = "***";
  public _passwordMalade = "***";

  private web3: Web3;

  public listview: any = [];

  public listeid: any[];

  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];

  public ZZid;
  public ZZname;
  public ZZprenom;
  public ZZemail;
  public ZZtel;

  constructor(private router: Router, private readonly http: HttpClient, private connection: ConnectionService) { }


  ngOnInit() {


    this.smartContract = this.connection.ConnectionMalade();
    console.log("debut Appel");


    console.log("Fin Appel");
    this.LoadListeMalade();
    this.dataAdmin();
  }

  async addMalade(data) {
    await this.smartContract.methods.setNewMalade(data.nomM, data.prenomM, data.addressM, data.sexeM, data.telephoneM, data.emailM, data.passwordM, data.compte).send();
    console.log("add Success");
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
  async dataAdmin() {
    console.log("zzzzzzzzzzz2")

    console.log("roooooooro")
    let ZZid = localStorage.getItem('ZZid')
    this.ZZid = ZZid;
    console.log(ZZid);
    let ZZname = localStorage.getItem('ZZname')
    this.ZZname = ZZname;
    let ZZprenom = localStorage.getItem('ZZprenom')
    this.ZZprenom = ZZprenom;
    let ZZemail = localStorage.getItem('ZZemail')
    this.ZZemail = ZZemail;
    let ZZtel = localStorage.getItem('ZZtel')
    this.ZZtel = ZZtel;
  }
}