import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from '../../connection.service';


@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.css']
})
export class AjouterPersonnelComponent implements OnInit {


  public _idFonctionnaire = "***";
  public _nomFonctionnaire = "***";
  public _prenomFonctionnaire = "***";
  public _addressFonctionnaire;
  public _roleFonctionnaire = "***";
  public _telephoneFonctionnaire = "***";
  public _mailFonctionnaire = "***";
  public _passwordFonctionnaire = "***";
  public _createurFonctionnaire = "***";

  public listview: any = [];
  public listviewRole: any = [];

  public listeid: any[];
  public listeRole: any[];
  private listP: any[];

  private web3: Web3;
  public fields: Object = { id: "text", Nom: "text", Prenom: "text", Role: "text", Tel: "text", Email: "text", address: "text" };

  private smartContract: Web3.eth.Contract;
  private ContractAdmin: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];

  public ZZid;
  public ZZname;
  public ZZprenom;
  public ZZemail;
  public ZZtel;

  constructor(private router: Router, private readonly http: HttpClient, private connection: ConnectionService) { }

  ngOnInit() {


    this.smartContract = this.connection.ConnectionPersonnel();
    this.ContractAdmin = this.connection.ConnectionAdmin();

    console.log("debut Appel");


    console.log("Fin Appel");

    this.listePersonnels();
    this.LoadListeRole();

    console.log("***** ");

    this.dataAdmin();

  }

  async LoadListeRole() {
    console.log("11***");



    this.listeRole = await this.ContractAdmin.methods.getAllRole().call();
    let nombreRole = this.listeRole.length;

    for (var i = 0; i < nombreRole; i++) {

      let data = {
        "Id": i + 1,
        "Type": await this.ContractAdmin.methods.getRoleType(this.listeRole[i]).call(),
        "Permission": await this.ContractAdmin.methods.getRolePermission(this.listeRole[i]).call(),

      };

      this.listviewRole.push(data);
    }

  }

  async addMalade(data) {
    console.log("roleFdata");
    console.log(data.permissionRole);
    await this.smartContract.methods.setNewFonctionnaire(data.idF, data.permissionRole, data.nomF, data.prenomF, data.addressF, data.emailF, data.passwordF, data.telF, data.compte).send();
    this.listePersonnels();
    this.router.navigate(['/pageAddPersonnel']);

  }


  async listePersonnels() {
    console.log("11***");

    let nombre = await this.smartContract.methods.getNombrePersonnels().call();


    this.listeid = await this.smartContract.methods.getAllid().call();


    for (var i = 0; i < nombre; i++) {
      console.log(this.listeid[i]);

      let data = {
        "Id": i + 1,
        "Nom": await this.smartContract.methods.getNomFonctionnaire(this.listeid[i]).call(),
        "Prenom": await this.smartContract.methods.getPrenomFonctionnaire(this.listeid[i]).call(),
        "Role": await this.smartContract.methods.getRoleFonctionnaire(this.listeid[i]).call(),
        "Tel": await this.smartContract.methods.getTelephoneFonctionnaire(this.listeid[i]).call(),
        "Email": await this.smartContract.methods.getMailFonctionnaire(this.listeid[i]).call(),
        "address": await this.smartContract.methods.getAddressFonctionnaire(this.listeid[i]).call()

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
