import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
  <mat-card>
    <h1>Paylaşımlı Kutlama Kartları</h1>
    <p>Arkadaşlarınız veya ekip arkadaşlarınız için ortak imzalı dijital kartlar hazırlayın.</p>
    <button mat-raised-button color="primary" routerLink="/card/create">Hemen kart oluştur</button>
  </mat-card>
  `
})
export class LandingComponent {}
