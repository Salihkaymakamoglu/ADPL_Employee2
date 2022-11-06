import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  offices: any =[
    {
      name:"LONDON HEAD OFFICE",
      address:"293 Green Lanes, Palmers Green London, N13 4XS",
      phone:" +44 0208 886 9222",
      mainImage:"",
      images:[""],
      id:"1"
    },
    {
      name:"WALTHAM CROSS OFFICE",
      address:"",
      phone:"+44 0208 886 9222",
      mainImage:"",
      images:[""],
      id:"2"
    },
    {
      name:"LONDON COVENT GARDEN",
      address:"",
      phone:"+44 0208 886 9222",
      mainImage:"",
      images:[""],
      id:"3"
    },
    {
      name:"LONDON WEYBRIDGE",
      address:"",
      phone:"+44 0208 886 9222",
      mainImage:"",
      images:[""],
      id:"4"
    },
    {
      name:"ISTANBUL OFFICE",
      address:"",
      phone:"",
      mainImage:"",
      images:[""],
      id:"5"
    },
    {
      name:"DUBAI OFFICE",
      address:"",
      phone:"",
      mainImage:"",
      images:[""],
      id:"6"
    },
    {
      name:"GERMANY OFFICE",
      address:"",
      phone:"",
      mainImage:"",
      images:[""],
      id:"7"
    },
    {
      name:"CYPRUS OFFICE",
      address:"Daire No: 3 Emtan 2 Apt, Mete Adanir Caddesi, Girne, Cyprus",
      phone:"+90 533 866 92 22",
      mainImage:"",
      images:[""],
      id:"8"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
