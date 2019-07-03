import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'mm-set-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class SetAddLevelComponent implements OnInit {
  public level = new Level();
  public setId: string;
  public error: string;
  public success: string;

  constructor(
    public store: StorageService,
    public route: ActivatedRoute,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.user$.pipe(take(1)).subscribe((user) => this.level.ownerId = user.uid);
    this.setId = this.route.snapshot.paramMap.get('id');
  }

  public async submitLevel() {
    if (this.levelIsValid()) {
      await this.store.addSetLevel(this.level, this.setId);
      this.level = new Level();
      this.error = null;
      this.success = 'You did it! Level submitted.';
    } else {
      this.error = 'Invalid submission, please do better.';
    }
  }

  private levelIsValid(): boolean {
    return this.idIsValid() && !!this.level.title && !!this.level.creator && !!this.level.summary;
  }

  public onLevelIdChange() {
    this.level.id = this.level.id.toUpperCase().replace(/l/gi, '1').replace(/o/gi, '0').replace(/[^A-Z\d]/g, '');
    this.level.id = (this.level.id.match(/[A-Z\d]{1,3}/g) || []).join('-');
  }

  private idIsValid(): boolean {
    const reg = new RegExp(/[A-Z\d]{3}-[A-Z\d]{3}-[A-Z\d]{3}/gi);
    return !!this.level.id && reg.test(this.level.id);
  }

}
