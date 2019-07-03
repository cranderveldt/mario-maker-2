import { Component, OnInit } from '@angular/core';
import { MMSet } from 'src/app/models/set';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class SetCreateComponent implements OnInit {
  public set: MMSet = new MMSet();

  constructor(
    public store: StorageService,
    public auth: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.auth.user$.pipe(take(1)).subscribe((user) => this.set.ownerId = user.uid);
  }

  create()  {
    this.store.createSet(this.set).then((data) => {
      this.router.navigate([`/sets/${data.id}`]);
    });
  }

}
