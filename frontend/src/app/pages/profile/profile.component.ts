import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  template: `
  <section class="surface" style="padding:20px;">
    <div class="section-title">
      <mat-icon color="primary">collections_bookmark</mat-icon>
      <h2 style="margin:0;">Koleksiyonlarım</h2>
    </div>
    <p class="helper-text">Aldığın, oluşturduğun ve imzaladığın kartları hatıra klasörlerinde sakla.</p>

    <div class="grid cols-3" style="gap:12px; margin-top:12px;">
      <div class="section-shell" *ngFor="let col of collections">
        <div style="display:flex; align-items:center; gap:10px;">
          <mat-icon color="primary">folder_special</mat-icon>
          <div>
            <div style="font-weight:700;">{{ col.name }}</div>
            <div class="helper-text">{{ col.cards?.length || 0 }} kart</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="grid" style="gap:10px;">
          <div class="message-card" *ngFor="let card of col.cards">
            <div style="font-weight:700;">{{ card.recipientName }}</div>
            <p style="margin:4px 0 0; color: var(--muted);">{{ card.occasionType }}</p>
          </div>
        </div>
      </div>
    </div>

    <p *ngIf="collections.length === 0" class="helper-text" style="margin-top:12px;">Henüz koleksiyon yok. Bir kartı tamamladıktan sonra klasör oluşturabilirsin.</p>
  </section>
  `
  <mat-card>
    <h2>Koleksiyonlarım</h2>
    <div *ngFor="let col of collections">
      <h3>{{ col.name }}</h3>
      <div class="grid">
        <mat-card *ngFor="let card of col.cards">
          <strong>{{ card.recipientName }}</strong>
          <p>{{ card.occasionType }}</p>
        </mat-card>
      </div>
    </div>
  </mat-card>
  `,
  styles: [`.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }`]
})
export class ProfileComponent implements OnInit {
  collections: any[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.listCollections().subscribe(c => this.collections = c);
  }
}
