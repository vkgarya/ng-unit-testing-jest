import { Component } from '@angular/core';
import { CancelService } from './services/cancel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-unit-testing-jest';

  constructor(private cancelService: CancelService) { }

  openCancelWindow() {
    this.cancelService.openCancelDialog();
  }
}

