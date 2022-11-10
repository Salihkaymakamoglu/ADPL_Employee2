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
      name: "LONDON HEAD OFFICE",
      address: "293 Green Lanes, Palmers Green London, N13 4XS",
      phone: " +44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "1",
    },
    {
      name: "WALTHAM CROSS OFFICE",
      address: "81 Turners Hill Cheshunt, Waltham Cross, EN8 9BA",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "2",
    },
    {
      name: "LONDON COVENT GARDEN",
      address: "50 Long Acre,London WC2E 9JR",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "3",
    },
    {
      name: "LONDON WEYBRIDGE",
      address: "Suite 8, The Monument, 45-47 Monument Hill, Weybridge, Surrey, KT13 8RN",
      phone: "+44 020 3725 5990",
      email:"info@accountingasyougo.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "4",
    },
    {
      name: "ISTANBUL OFFICE",
      address: "",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "5",
    },
    {
      name: "DUBAI OFFICE",
      address: "",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "6",
    },
    {
      name: "GERMANY OFFICE",
      address: "",
      phone: "+44 0208 886 9222",
      email:"info@accountingdirectplus.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "7",
    },
    {
      name: "CYPRUS OFFICE",
      address: "Daire No: 3 Emtan 2 Apt, Mete Adanir Caddesi, Girne, Cyprus",
      phone: "+90 533 866 92 22",
      email:"cyprus@accountingdirectplus.com",
      mainImage: "./../../assets/images/main.jpg",
      images: ["../../../assets/images/main.jpg","../../../assets/images/office.jpg"],
      id: "8",
    },
  ];

  constructor(  private router: Router,) {}

  ngOnInit(): void {}

  openDetails(offices: any){
    this.router.navigate([`/offices/${offices.id}`], {
      state: { office: offices },
    });

  }
}
