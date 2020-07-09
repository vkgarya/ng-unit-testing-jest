import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CancelService {

  @Output() openCancelLayer: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  openCancelDialog() {
    this.openCancelLayer.emit(true);
  }
}
