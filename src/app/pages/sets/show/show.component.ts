import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { MMSet } from 'src/app/models/set';
import { Level } from 'src/app/models/level';

@Component({
  selector: 'mm-set-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class SetShowComponent implements OnInit {
  public set$: Observable<MMSet>;
  public levels$: Observable<Level[]>;

  constructor(
    public route: ActivatedRoute,
    public store: StorageService,
  ) { }

  ngOnInit() {
    const setId = this.route.snapshot.paramMap.get('id');
    this.set$ = this.store.getSet(setId);
    this.levels$ = this.store.listSetLevels(setId);
  }

}
