import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Level } from '../models/level';

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

  public listSets(): Observable<any[]> {
    return this.db.collection<any>('sets').valueChanges({ idField: 'id' });
  }

  public listUserSets(userId: string): Observable<any[]> {
    console.log(userId)
    return this.db.collection<any>('sets', ref => {
      return ref.where('ownerId', '==', userId);
    }).valueChanges({ idField: 'id' });
  }
}
