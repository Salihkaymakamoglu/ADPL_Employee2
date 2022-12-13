import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-offices",
  templateUrl: "./offices.component.html",
  styleUrls: ["./offices.component.scss"],
})
export class OfficesComponent implements OnInit {
  offices: any = [
    {
      name: "LONDON PALMERS GREEN",
      name2:"Head Office",
      address: "293 Green Lanes, Palmers Green, London, N13 4XS",
      phone: " +44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/adpl-logo.png",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "1",
    },
    {
      name: "LONDON COVENT GARDEN",
      name2:"",
      address: "50 Long Acre,London, WC2E 9JR",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/adpl-logo.png",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "2",
    },
    {
      name: "WALTHAM CROSS",
      name2:"Co Work & ADPL Meta",
      address: "81 Turners Hill Cheshunt, Waltham Cross, EN8 9BA",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/adpl-logo.png",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "3",
    },
    {
      name: "ISTANBUL",
      address: "İçerenköy Mah. Prof. Dr. Ali Nihat Tarlan Cad. Süleyman Başkan İş Merk. No:84 K:5 D9 Ataşehir İstanbul, Turkey",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/adpl-logo.png",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "4",
    },
    {
      name: "CYPRUS",
      name2:"",
      address: "Daire No: 3 Emtan 2 Apt, Mete Adanir Caddesi, Girne, Cyprus",
      phone: "+90 533 866 92 22",
      email:"cyprus@accountingdirectplus.com",
      mainImage: "./../../assets/images/adpl-logo.png",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "5",
    },
    {
      name: "GERMANY",
      name2:"",
      address: "Appointment only",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/adpl-logo.png",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "6",
    },
    {
      name: "DUBAI",
      name2:"",
      address: "Appointment only",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/adpl-logo.png",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "7",
    }, 
 

  ];

  constructor(  private router: Router,) {}

  ngOnInit(): void {}

  openDetails(offices: any){
    this.router.navigate([`/offices/${offices.id}`], {
      state: { office: offices },
    });

  }
  openInNewTab(url: string): void {
    if (url) {
      window.open(url);
    }
  }
}
