import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

export interface Actor {
  id: number,
  name: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  url = environment.apiServerUrl;
  public items: {[key: number]: Actor} = {};

  constructor(private auth: AuthService, private http: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
    };
    return header;
  }

  get() {
    this.http.get(this.url + '/actor', this.getHeaders())
      .subscribe((res: any) => {
        this.actorsToItems(res.actors);
      });
  }

  save(actor: Actor) {
    if (actor.id >= 0){ // PATCH
      this.http.patch(this.url + '/actor/' + actor.id, actor, this.getHeaders())
        .subscribe((res: any) => {
          if (res.success) {
            this.actorToItem(res.actor);
          }
        });
    } else { // INSERT
      this.http.post(this.url + '/actor', actor, this.getHeaders())
        .subscribe((res: any) => {
          if (res.success) {
            this.actorToItem(res.actor);
          }
        });
    }
  }

  delete(actor: Actor) {
    this.http.delete(this.url + '/actor/' + actor.id, this.getHeaders())
      .subscribe( (res: any) => {
        if (res.success) {
          this.deleteActorFromItems(res.deleted_id);
        }
      });
  }

  actorsToItems(actors: Array<Actor>) {
    for (const actor of actors) {
      this.items[actor.id] = actor;
    }
  }

  actorToItem(actor: Actor) {
    this.items[actor.id] = actor;
  }

  deleteActorFromItems(id: number) {
    delete this.items[id];
  }
}
