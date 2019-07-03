import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { MMSet } from 'src/app/models/set';
import { Level } from 'src/app/models/level';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'mm-set-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class SetShowComponent implements OnInit {
  public set$: Observable<MMSet>;
  public levels$: Observable<Level[]>;
  public setId: string;

  constructor(
    public route: ActivatedRoute,
    public store: StorageService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.setId = this.route.snapshot.paramMap.get('id');
    this.set$ = this.store.getSet(this.setId);
    this.levels$ = this.store.listSetLevels(this.setId);
  }

  deleteLevel(levelId: string) {
    const result = window.confirm('Are you sure you want to delete this level forever?');
    if (result) {
      this.store.deleteSetLevel(levelId, this.setId);
    }
  }

}
