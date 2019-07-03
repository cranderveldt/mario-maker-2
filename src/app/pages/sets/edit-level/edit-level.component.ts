import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'mm-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.scss']
})
export class SetEditLevelComponent implements OnInit {
  public level: Level;
  public setId: string;
  public levelId: string;
  public error: string;
  public success: string;

  constructor(
    public store: StorageService,
    public route: ActivatedRoute,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.setId = this.route.snapshot.paramMap.get('sid');
    this.levelId = this.route.snapshot.paramMap.get('lid');
    this.store.getSetLevel(this.levelId, this.setId).pipe(take(1)).subscribe((level: Level) => this.level = level);
  }

  public async submitLevel() {
    if (this.levelIsValid()) {
      try {
        await this.store.updateSetLevel(this.level, this.levelId, this.setId);
        this.error = null;
        this.success = 'Changes saved';
      } catch (err) {
        console.log(err)
        this.error = 'Error saving changes, you probably don\'t have permissions to edit this level.';
      }
    } else {
      this.error = 'You can\'t leave anything blank';
    }
  }

  private levelIsValid(): boolean {
    return !!this.level.title && !!this.level.creator && !!this.level.summary;
  }
}
