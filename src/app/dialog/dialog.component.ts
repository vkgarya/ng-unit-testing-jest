import { Component, Inject, ViewContainerRef, TemplateRef } from '@angular/core';

import { VERSION, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  version = VERSION;

  constructor(private dialog: MatDialog) {
  }

  openDialog(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, cancelConfig: any) {
    viewContainerRef.createEmbeddedView(templateRef);
    //   const dialogRef = this.dialog.open(ConfirmationDialog,{
    //     data:{
    //       message: 'Are you sure want to delete?',
    //       buttonText: {
    //         ok: 'Save',
    //         cancel: 'No'
    //       }
    //     }
    //   });

    //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    //     if (confirmed) {

    //       const a = document.createElement('a');
    //       a.click();
    //       a.remove();
    //     }
    //   });
  }
}
