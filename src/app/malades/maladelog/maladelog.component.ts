import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../../connection.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-maladelog',
  templateUrl: './maladelog.component.html',
  styleUrls: ['./maladelog.component.css']
})
export class MaladelogComponent implements OnInit {
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

    this.smartContract = this.connection.ConnectionMalade();
    console.log("debut Appel");


    console.log("Fin Appel");

  }



  async testLogin(data) {

    this.nomAdmin = await this.smartContract.methods.getNomMalade(data.email).call();
    this.prenomAdmin = await this.smartContract.methods.getPrenomMalade(data.email).call();
    this.numeroTel = await this.smartContract.methods.getTelephoneMalade(data.email).call();
    this.mailAdmin = await this.smartContract.methods.getMailMalade(data.email).call();
    this.password = await this.smartContract.methods.getPasswordMalade(data.email).call();


    //let InfosAdmin: string[] = [this.idAdmin, this.nomAdmin, this.prenomAdmin, this.numeroTel, this.mailAdmin, this.password,];

    if (data.email == this.mailAdmin && data.password == this.password) {
      this.router.navigate(['/pageMalade', this.nomAdmin, this.prenomAdmin, this.numeroTel, this.mailAdmin]);


    }
    else {
      console.log(this.mailAdmin);
      console.log(this.password);
      alert('Votre mot de passe ou Gmail est Incorrect');
    }


  }



}
