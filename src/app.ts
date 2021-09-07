import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Nous importons le composant enfant pour pouvoir le déclarer et l'utiliser :
import { EnfantComponent } from './enfant.component';

@Component({
  selector: 'my-app',

  template: `
    <input [(ngModel)]="monObj.prenom" />
    <div>
      <app-enfant [monObj]="monObj"></app-enfant>
    </div>
  `
})
export class AppComponent {
  monObj = { prenom: 'Paul' };
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  // Déclaration du composant enfant.
  declarations: [AppComponent, EnfantComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
