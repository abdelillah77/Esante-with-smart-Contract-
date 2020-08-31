import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from '../../connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public idAdmin = "***";
  public nomAdmin = "***";
  public prenomAdmin = "***";
  public numeroTel;
  public mailAdmin = "***";
  public password = "***";
  private web3: Web3;


  private smartContract: Web3.eth.Contract;
  private accounts: Web3.eth.Accounts[];



  constructor(private router: Router, private readonly http: HttpClient, private connection: ConnectionService) { }

  ngOnInit() {


    this.smartContract = this.connection.ConnectionAdmin();
    console.log("debut Appel");
    // console.log(this.accounts[0]);

    this.initAdmin();

    console.log("Fin Appel");

  }

  async initAdmin() {

    console.log("hello");
    console.log("debut init Admin");
    this.mailAdmin = await this.smartContract.methods.getMailAdmin().call();

    console.log(this.mailAdmin);

    if (this.mailAdmin == null || this.mailAdmin == "") {
      await this.smartContract.methods.initAdministrateur("1234", "DEGDEG", "Hicham", 558805327, "hdegdeg24@gmail.com", "degdeg123").send();
    }

    this.nomAdmin = await this.smartContract.methods.getNomAdmin().call();
    this.prenomAdmin = await this.smartContract.methods.getPrenomAdmin().call();
    this.numeroTel = await this.smartContract.methods.getTelephoneAdmin().call();
    this.mailAdmin = await this.smartContract.methods.getMailAdmin().call();
    this.password = await this.smartContract.methods.getPasswordMalade().call();

    console.log("Fin init Admin");

  }


  async testLogin(data) {
    this.idAdmin = await this.smartContract.methods.getIdAdmin().call();
    this.nomAdmin = await this.smartContract.methods.getNomAdmin().call();
    this.prenomAdmin = await this.smartContract.methods.getPrenomAdmin().call();
    this.numeroTel = await this.smartContract.methods.getTelephoneAdmin().call();
    this.mailAdmin = await this.smartContract.methods.getMailAdmin().call();
    this.password = await this.smartContract.methods.getPasswordMalade().call();


    // let InfosAdmin: string[] = [this.idAdmin, this.nomAdmin, this.prenomAdmin, this.numeroTel, this.mailAdmin, this.password,];

    if (data.email == this.mailAdmin && data.password == this.password) {
      /*this.router.navigate(['/pageAdmin', this.idAdmin]);*/
      this.router.navigate(['/pageAdmin', this.idAdmin, this.nomAdmin, this.prenomAdmin, this.mailAdmin, this.numeroTel]);

      console.log(this.mailAdmin);
      console.log(this.password);

    }
    else {
      console.log(this.mailAdmin);
      console.log(this.password);
      alert('Votre mot de passe ou Gmail est Incorrect');
    }


  }



}
