import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'mm-set-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class SetIndexComponent implements OnInit {
  public userSets: Observable<any[]>;
  public globalSets: Observable<any[]>;

  constructor(
    public store: StorageService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.userSets = this.auth.user$.pipe(switchMap((user: any) => this.store.listUserSets(user.uid)));
    this.globalSets = this.store.listSets();
  }
}
