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

  public listPlayedLevels(): Observable<Level[]> {
    return this.db.collection<Level>('levels', ref => {
      return ref.where('playedAt', '>', 0).orderBy('playedAt', 'desc');
    }).valueChanges({ idField: 'id' });
  }

  public addLevel(level: Level): Promise<void> {
    const id = level.id;
    const data = Object.assign({}, level);
    delete data.id;
    return this.db.collection<Level>('levels').doc(id).set(data);
  }

  public updateLevel(level: Level): Promise<void> {
    const id = level.id;
    const data = Object.assign({}, level);
    delete data.id;
    return this.db.collection<Level>('levels').doc(level.id).update(data);
  }
}
