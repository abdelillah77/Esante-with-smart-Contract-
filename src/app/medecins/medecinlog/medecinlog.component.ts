import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../../connection.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-medecinlog',
  templateUrl: './medecinlog.component.html',
  styleUrls: ['./medecinlog.component.css']
})
export class MedecinlogComponent implements OnInit {
  public _idFonctionnaire = "***";
  public _nomFonctionnaire = "***";
  public _prenomFonctionnaire = "***";
  public _addressFonctionnaire;
  public _roleFonctionnaire = "***";
  public _telephoneFonctionnaire = "***";
  public _mailFonctionnaire = "***";
  public _passwordFonctionnaire = "***";
  public _createurFonctionnaire = "***";

  public _Permission = "***";

  private listid: any[];
  private web3: Web3;


  private smartContract: Web3.eth.Contract;
  private smartContractAdmin: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];
  readonly Addresscontract = '0xb5ef83b727c924f0cF0B84083Ec6578565EA2868';


  constructor(private router: Router, private readonly http: HttpClient, private connection: ConnectionService) { }


  ngOnInit() {

    this.smartContract = this.connection.ConnectionPersonnel();

    this.smartContractAdmin = this.connection.ConnectionAdmin();


  }



  async testLogin(data) {

    this.listid = await this.smartContract.methods.getAllid().call();

    this.listid.forEach(function (val) {

    });

    var a = this.listid.indexOf(data.numEmploi);

    console.log("variable = " + a);
    if (this.listid.indexOf(data.numEmploi) != -1) {
      console.log(data.numEmploi);
    }


    this._nomFonctionnaire = await this.smartContract.methods.getNomFonctionnaire(data.numEmploi).call();
    this._prenomFonctionnaire = await this.smartContract.methods.getPrenomFonctionnaire(data.numEmploi).call();
    this._addressFonctionnaire = await this.smartContract.methods.getAddressFonctionnaire(data.numEmploi).call();
    this._roleFonctionnaire = await this.smartContract.methods.getRoleFonctionnaire(data.numEmploi).call();
    this._createurFonctionnaire = await this.smartContract.methods.getCreateurFonnctionnaire(data.numEmploi).call();
    this._telephoneFonctionnaire = await this.smartContract.methods.getTelephoneFonctionnaire(data.numEmploi).call();
    this._mailFonctionnaire = await this.smartContract.methods.getMailFonctionnaire(data.numEmploi).call();
    this._passwordFonctionnaire = await this.smartContract.methods.getPasswordFonctionnaire(data.numEmploi).call();

    this._Permission = await this.smartContractAdmin.methods.getRolePermission(this._roleFonctionnaire).call();

    console.log("ggggggggg");
    console.log(this._nomFonctionnaire);
    console.log("gggggggg2")
    //let InfosAdmin: string[] = [this.idAdmin, this.nomAdmin, this.prenomAdmin, this.numeroTel, this.mailAdmin, this.password,];

    if ((this.listid.indexOf(data.numEmploi) !== -1) && data.password == this._passwordFonctionnaire && this._Permission == "Lecture") {

      this.router.navigate(['/pageMedecinLecture', this._nomFonctionnaire, this._prenomFonctionnaire, this._telephoneFonctionnaire, this._mailFonctionnaire, this._roleFonctionnaire]);


    }
    else if ((this.listid.indexOf(data.numEmploi) !== -1) && data.password == this._passwordFonctionnaire && this._Permission == "Lecture/Ecriture") {
      this.router.navigate(['/pageMedecinEcriture', this._nomFonctionnaire, this._prenomFonctionnaire, this._telephoneFonctionnaire, this._mailFonctionnaire, this._roleFonctionnaire]);

    } else {



      alert('Votre mot de passe ou Gmail est Incorrect');
    }


  }



}
