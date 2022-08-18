import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalData:BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
