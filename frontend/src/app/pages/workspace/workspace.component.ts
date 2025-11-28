import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-workspace',
  template: `
  <section class="surface" style="padding:20px;">
    <div class="section-title">
      <mat-icon color="primary">apartment</mat-icon>
      <h2 style="margin:0;">Şirket Alanı Kartları</h2>
    </div>
    <p class="helper-text">Doğum günü, işe giriş yıldönümü, yeni ekip arkadaşına hoş geldin kartlarını tek alan içinde topla.</p>

    <div class="grid cols-3" style="gap:12px; margin-top:12px;">
      <div class="section-shell" *ngFor="let card of cards">
        <div style="display:flex; align-items:center; gap:10px;">
          <mat-icon color="primary">cake</mat-icon>
          <div>
            <div style="font-weight:700;">{{ card.recipientName }}</div>
            <div class="helper-text">{{ card.occasionType }}</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="helper-text">Durum: {{ card.status }}</div>
      </div>
    </div>
    <p *ngIf="cards.length === 0" class="helper-text" style="margin-top:12px;">Henüz kart yok. Workspace ID ile listeleme yapılır.</p>
  </section>
  `
  <mat-card>
    <h2>Şirket Alanı Kartları</h2>
    <div class="grid">
      <mat-card *ngFor="let card of cards">
        <strong>{{ card.recipientName }}</strong>
        <p>{{ card.occasionType }}</p>
      </mat-card>
    </div>
  </mat-card>
  `,
  styles: [`.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }`]
})
export class WorkspaceComponent {
  cards: any[] = [];
  constructor(private api: ApiService) {
    this.api.listWorkspaceCards('00000000-0000-0000-0000-000000000000').subscribe(c => this.cards = c);
  }
}
