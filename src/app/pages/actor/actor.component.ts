import { Component, OnInit } from '@angular/core';
import { NewActorDiologComponent } from '../../layout/new-actor-diolog/new-actor-diolog.component';
import { ComformationDiologComponent } from '../../layout/comformation-diolog/comformation-diolog.component'; 

import { MatDialog } from '@angular/material/dialog';

import { ActorService, Actor } from 'src/app/services/actor.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  Object = Object;

  constructor(
    private dialog: MatDialog,
    public actorService: ActorService,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
    this.actorService.get();
  }

  openForm(actor: Actor = null) {
    let actorData: Actor;
    if (!actor) {
      actorData = {
        id: -1,
        name: '',
        age: null
      };
    } else {
      actorData = actor
    }

    const dialogRef = this.dialog.open(
      NewActorDiologComponent, 
      {
        data: {
          id: actorData.id,
          name: actorData.name,
          age: actorData.age
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actorService.save(result);
      }
    });
  }

  onDelete(actor: Actor) {
    const dialogRef = this.dialog.open(
      ComformationDiologComponent, 
      { 
        data: {
          message: "Are you sure you want to delete actor?"
        } 
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actorService.delete(actor);
      }
    });
  }
}
