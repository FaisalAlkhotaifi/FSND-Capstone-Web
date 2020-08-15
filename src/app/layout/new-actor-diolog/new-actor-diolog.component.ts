import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ActorService, Actor } from 'src/app/services/actor.service'

@Component({
  selector: 'app-new-actor-diolog',
  templateUrl: './new-actor-diolog.component.html',
  styleUrls: ['./new-actor-diolog.component.css']
})
export class NewActorDiologComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewActorDiologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Actor
  ) { }

  ngOnInit(): void {
    
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
