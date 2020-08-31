import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import * as Web3 from 'web3';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {
  CurrentDate: string = new Date().toDateString();
  CurrentTime = new Date();
  constructor() { }

  ngOnInit() {
  }

}
