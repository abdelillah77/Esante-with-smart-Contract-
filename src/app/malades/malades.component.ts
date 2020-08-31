import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-malades',
  templateUrl: './malades.component.html',
  styleUrls: ['./malades.component.css']
})
export class MaladesComponent implements OnInit {

  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();

  public PPNom;
  public PPPrenom;
  public PPtel;
  public PPemail;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    let nomAdmin = this.router.snapshot.paramMap.get('nomAdmin');
    this.PPNom = nomAdmin;

    let prenomAdmin = this.router.snapshot.paramMap.get('prenomAdmin');
    this.PPPrenom = prenomAdmin;

    let numeroTel = this.router.snapshot.paramMap.get('numeroTel');
    this.PPtel = numeroTel;

    let mailAdmin = this.router.snapshot.paramMap.get('mailAdmin');
    this.PPemail = mailAdmin;
  }
}


