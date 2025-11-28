import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-workspace',
  template: `
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
