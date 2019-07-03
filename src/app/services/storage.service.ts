import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Level } from '../models/level';
import { MMSet } from '../models/set';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(
    public db: AngularFirestore,
  ) { }

  public listLevels(): Observable<Level[]> {
    return this.db.collection<Level>('levels').valueChanges({ idField: 'id' });
  }

  public getLevel(id: string): Observable<Level> {
    return this.db.collection('levels').doc<Level>(id).valueChanges();
  }

  public listPlayedLevels(): Observable<Level[]> {
    return this.db.collection<Level>('levels', ref => {
      return ref.where('playedAt', '>', 0).orderBy('playedAt', 'desc');
    }).valueChanges({ idField: 'id' });
  }

  public listUnplayedLevels(): Observable<Level[]> {
    return this.db.collection<Level>('levels', ref => {
      return ref.where('playedAt', '==', 0);
    }).valueChanges({ idField: 'id' });
  }

  public addLevel(level: Level): Promise<void> {
    const data = Object.assign({}, level);
    data.createdAt = Date.now();
    delete data.id;
    return this.db.collection<Level>('levels').doc(level.id).set(data);
  }

  public updateLevel(level: Level): Promise<void> {
    const data = Object.assign({}, level);
    delete data.id;
    return this.db.collection<Level>('levels').doc(level.id).update(data);
  }

  public listSets(): Observable<MMSet[]> {
    return this.db.collection<MMSet>('sets').valueChanges({ idField: 'id' });
  }

  public listUserSets(userId: string): Observable<MMSet[]> {
    return this.db.collection<MMSet>('sets', ref => {
      return ref.where('ownerId', '==', userId);
    }).valueChanges({ idField: 'id' });
  }

  public getSet(id: string): Observable<MMSet> {
    return this.db.collection('sets').doc<MMSet>(id).valueChanges();
  }

  public listSetLevels(setId: string): Observable<Level[]> {
    return this.db.collection('sets').doc(setId).collection<Level>('levels').valueChanges({ idField: 'id' });
  }
}
