import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})


export class AdministrateurComponent implements OnInit {
  public idAdmin = "***";
  public nomAdmin = "***";
  public prenomAdmin = "***";
  public numeroTel;
  public mailAdmin = "***";

  public listeRole: any[];
  public listview: any = [];

  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();
  private web3: Web3;

  private ContractAdmin: Web3.eth.Contract;


  public key;
  public ZZid;
  public ZZname;
  public ZZprenom;
  public ZZemail;
  public ZZtel;

  constructor(private router: ActivatedRoute, private connection: ConnectionService) { }

  ngOnInit() {

    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.ZZid = id;

    let name = this.router.snapshot.paramMap.get('name');
    this.ZZname = name;

    let prenom = this.router.snapshot.paramMap.get('prenom');
    this.ZZprenom = prenom;

    let email = this.router.snapshot.paramMap.get('email');
    this.ZZemail = email;

    let tel = this.router.snapshot.paramMap.get('tel');
    this.ZZtel = tel;

    this.ContractAdmin = this.connection.ConnectionAdmin();

    this.LoadListeRole();
    this.zz();
    this.zz2();
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

      this.listview.push(data);
    }

  }
  async addRole(data) {

    await this.ContractAdmin.methods.addRole(data.typeRole, data.permissionRole).send();
    this.LoadListeRole();

  }
  async zz() {
    localStorage.setItem("key", "hello Abdelillah");
    localStorage.setItem('ZZid', this.ZZid)
    localStorage.setItem('ZZname', this.ZZname);
    localStorage.setItem('ZZprenom', this.ZZprenom)
    localStorage.setItem('ZZemail', this.ZZemail)
    localStorage.setItem('ZZtel', this.ZZtel)
  }
  async zz2() {
    console.log("zzzzzzzzzzz2")
    let key = localStorage.getItem("key")
    this.key = key;
    console.log(key);
    let ZZid = localStorage.getItem('ZZid')
    this.ZZid = ZZid;
    let ZZname = localStorage.getItem('ZZname')
    this.ZZname = ZZname;
    let ZZprenom = localStorage.getItem('ZZprenom')
    this.ZZprenom = ZZprenom;
    let ZZemail = localStorage.getItem('ZZemail')
    this.ZZemail = ZZemail;
    let ZZtel = localStorage.getItem('ZZtel')
    this.ZZtel = ZZtel

  }
}
