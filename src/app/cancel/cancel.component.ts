import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { DialogComponent } from '../dialog/dialog.component';
import { CancelService } from '../services/cancel.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  showCancelLayer: boolean;
  @ViewChild('cancellationDialog') cancellationDialog: TemplateRef<any>;

  cancelConfig: any = {
    width: '600px', height: '300px', dialogType: 'Confirmation'
  };
  constructor(private viewContainerRef: ViewContainerRef,
    private dialogComponent: DialogComponent,
    private cancelService: CancelService) { }


  ngOnInit(): void {
    this.subscription.add(
      this.cancelService.openCancelLayer.subscribe(cancelLayerAction => {
        this.showCancelLayer = cancelLayerAction;
        this.showCancelLayer = false;
        this.openCancelDialog();
      })
    );
  }
  openCancelDialog() {
    this.dialogComponent.openDialog(this.viewContainerRef, this.cancellationDialog, this.cancelConfig);
  }

  onRetun() {
    this.showCancelLayer = false;

  }

  onCancel() {
    this.showCancelLayer = false;

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
