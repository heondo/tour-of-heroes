import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { 
    this.getHeroes = this.getHeroes.bind(this);
  }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('Hero Service: fetched heroes')
    return of(HEROES);
  }
}
