import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  type: string;
}

export interface ComformationDialogData {
  message: string;
}

@Component({
  selector: 'app-diolog',
  templateUrl: './comformation-diolog.component.html',
  styleUrls: ['./comformation-diolog.component.css']
})

export class ComformationDiologComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ComformationDiologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ComformationDialogData
  ) { }

  canDelete: boolean;

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onDelete(): void {
    this.dialogRef.close(true);
  }
}
