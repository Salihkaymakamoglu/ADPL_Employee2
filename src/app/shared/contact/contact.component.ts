import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

/**
 * Contact component
 */
export class ContactComponent implements OnInit {

  @ViewChild('name') name: any;


  constructor() { }

  ngOnInit(): void {
  }



  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
    this.name.nativeElement.focus()
    }

}
