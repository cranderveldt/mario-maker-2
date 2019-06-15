import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Observable } from 'rxjs';
import { Level } from 'src/app/models/level';
import { map } from 'rxjs/operators';
import { subDays } from 'date-fns';

@Component({
  selector: 'mm-level-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class LevelIndexComponent implements OnInit {
  public recentLevels: Observable<Level[]>;
  public topWeekLevels: Observable<Level[]>;
  public topMonthLevels: Observable<Level[]>;
  public topLevels: Observable<Level[]>;
  public newLevels: Observable<Level[]>;

  constructor(
    public store: StorageService
  ) { }

  ngOnInit() {
    this.recentLevels = this.store.listPlayedLevels().pipe(map(levels => levels.slice(0, 10)));
    this.topWeekLevels = this.store.listPlayedLevels().pipe(map(levels => this.inTheLast(7, levels)));
    this.topMonthLevels = this.store.listPlayedLevels().pipe(map(levels => this.inTheLast(30, levels)));
    this.topLevels = this.store.listPlayedLevels().pipe(map(levels => levels.sort(this.ratingSort).slice(0, 10)));
    this.newLevels = this.store.listUnplayedLevels();
  }

  private ratingSort(a: Level, b: Level) {
    return b.rating - a.rating;
  }

  private inTheLast(days: number, levels: Level[]) {
    levels = levels.filter(level => {
      const stamp = subDays(new Date(), days);
      return stamp.getTime() < level.playedAt;
    });
    return levels.sort(this.ratingSort).slice(0, 10);
  }
}
