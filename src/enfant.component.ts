import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',

  template: `
    <div *ngFor="let log of changeLog">{{ log }}</div>
  `
})
export class EnfantComponent implements DoCheck {
  @Input() monObj?: { prenom: string };

  public changeLog: string[] = [];
  public ancienPrenom: string = '';

  constructor() {}

  ngDoCheck() {
    if (
      this.monObj &&
      this.monObj.prenom &&
      this.monObj.prenom !== this.ancienPrenom
    ) {
      this.changeLog.push(
        `DoCheck: Le prénom a changé de "${this.ancienPrenom}" à "${
          this.monObj.prenom
        }"`
      );
      this.ancienPrenom = this.monObj.prenom;
    }
  }
}
