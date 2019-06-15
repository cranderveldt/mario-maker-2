import { Component } from '@angular/core';
import { Level } from 'src/app/models/level';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class LevelAddComponent {
  public level = new Level();
  constructor(
    public store: StorageService
  ) { }

  public async submitLevel() {
    if (this.levelIsValid()) {
      await this.store.addLevel(this.level);
      console.log('submitted')
      this.level = new Level();
    } else {
      console.log('invalid')
    }
  }

  private levelIsValid(): boolean {
    return !!this.level.id && !!this.level.title && !!this.level.creator && !!this.level.summary;
  }

}
