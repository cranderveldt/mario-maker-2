import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Observable } from 'rxjs';
import { Level } from 'src/app/models/level';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public levels: Observable<Level[]>;

  constructor(
    public store: StorageService
  ) { }

  ngOnInit() {
    this.levels = this.store.listLevels();
  }
}
