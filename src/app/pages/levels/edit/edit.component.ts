import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { StorageService } from 'src/app/services/storage.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'mm-level-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class LevelEditComponent implements OnInit {
  public level: Level;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public store: StorageService,
  ) { }

  ngOnInit() {
    const levelId = this.route.snapshot.paramMap.get('id');
    this.store.getLevel(levelId).pipe(take(1)).subscribe((level: Level) => {
      this.level = level;
      this.level.id = levelId;
    });
  }

  public async markAsPlayed() {
    this.level.playedAt = this.level.playedAt || Date.now();
    await this.store.updateLevel(this.level);
    this.router.navigate(['']);
  }
}
