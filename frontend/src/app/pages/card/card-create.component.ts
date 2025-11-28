import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-create',
  template: `
  <mat-card>
    <h2>Kart Oluştur</h2>
    <div class="form">
      <mat-form-field appearance="fill">
        <mat-label>Alıcı</mat-label>
        <input matInput [(ngModel)]="recipientName" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Olay</mat-label>
        <input matInput [(ngModel)]="occasion" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Tema</mat-label>
        <mat-select [(ngModel)]="themeId">
          <mat-option *ngFor="let theme of themes" [value]="theme.id">{{ theme.name }}</mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-raised-button color="primary" (click)="create()">Oluştur</button>
    </div>
    <div *ngIf="secretLink">
      <p>Paylaşılabilir bağlantı: <strong>{{ secretLink }}</strong></p>
    </div>
  </mat-card>
  `,
  styles: [`.form { display: flex; flex-direction: column; gap: 12px; }`]
})
export class CardCreateComponent {
  recipientName = '';
  occasion = '';
  themeId = '';
  themes: any[] = [];
  secretLink: string | null = null;

  constructor(private api: ApiService) {
    this.api.getThemes().subscribe(t => this.themes = t);
  }

  create() {
    this.api.createCard({ recipientName: this.recipientName, occasionType: this.occasion, themeId: this.themeId, deadlineAt: null, workspaceId: null })
      .subscribe(card => {
        this.secretLink = `${window.location.origin}/card/${card.secretLinkToken}`;
      });
  }
}
