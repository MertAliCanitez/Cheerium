import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-view',
  template: `
  <section class="surface" *ngIf="card" style="padding: 20px;">
    <div style="display:flex; align-items:flex-start; gap: 14px; flex-wrap: wrap;">
      <div style="flex:1; min-width: 280px;">
        <div class="badge">Gizli kart bağlantısı</div>
        <h2 style="margin:6px 0 4px;">{{ card.recipientName }} için {{ card.occasionType }}</h2>
        <p class="helper-text">Durum: {{ card.status }} | Tema: {{ card.theme?.name || 'Seçili tema' }}</p>
        <div class="cta-row" style="margin-top:6px;">
          <button mat-raised-button color="primary" (click)="suggest()">AI ile mesaj öner</button>
          <button mat-stroked-button color="primary" (click)="loadMessages()">Güncelle</button>
        </div>
      </div>
      <div class="section-shell" style="min-width:240px;">
        <div class="section-title" style="margin-bottom:6px;">
          <mat-icon color="primary">group</mat-icon>
          <h3 style="margin:0;">Katkılar</h3>
        </div>
        <div class="stat">
          <div class="value">{{ messages.length }}</div>
          <div class="label">İmza</div>
        </div>
        <p class="helper-text" style="margin-top:6px;">Katılımcılar giriş yapmadan mesaj bırakabilir.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="grid cols-2" style="gap:14px; align-items: start;">
      <div>
        <div class="section-title" style="margin-bottom: 8px;">
          <mat-icon color="primary">forum</mat-icon>
          <h3 style="margin:0;">Mesajlar</h3>
        </div>
        <div class="grid cols-2" style="gap:10px;">
          <div class="message-card" *ngFor="let msg of messages">
            <div style="font-weight:700;">{{ msg.authorName || 'Anonim' }}</div>
            <p style="margin:6px 0 0; color: var(--text);">{{ msg.messageText }}</p>
          </div>
        </div>
        <p *ngIf="messages.length === 0" class="helper-text">Henüz imza yok. İlk mesajı sen ekle!</p>
      </div>
      <div class="section-shell">
        <div class="section-title" style="margin-bottom:6px;">
          <mat-icon color="primary">edit</mat-icon>
          <h3 style="margin:0;">Mesaj ekle</h3>
        </div>
        <div class="form-grid">
          <mat-form-field appearance="fill">
            <mat-label>İsminiz</mat-label>
            <input matInput [(ngModel)]="authorName" />
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>İlişki</mat-label>
            <mat-select [(ngModel)]="relationship">
              <mat-option *ngFor="let rel of relationships" [value]="rel">{{ rel }}</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="fill">
            <mat-label>Ton</mat-label>
            <mat-select [(ngModel)]="tone">
              <mat-option *ngFor="let t of tones" [value]="t">{{ t }}</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <mat-form-field appearance="fill" style="width:100%; margin-top:10px;">
          <mat-label>Mesaj</mat-label>
          <textarea matInput rows="4" [(ngModel)]="messageText"></textarea>
        </mat-form-field>
        <div class="cta-row" style="margin-top:8px; align-items:center;">
          <button mat-stroked-button color="primary" (click)="suggest()">AI öner</button>
          <button mat-raised-button color="primary" (click)="addMessage()">Ekle</button>
          <span class="helper-text">Emoji ve GIF URL'si desteği backend'de hazır.</span>
        </div>
      </div>
    </div>
  </section>
  `
})
export class CardViewComponent implements OnInit {
  cardId = '';
  card: any;
  messages: any[] = [];
  authorName = '';
  messageText = '';
  relationship = 'arkadaş';
  tone = 'samimi';
  relationships = ['arkadaş', 'iş arkadaşı', 'yönetici', 'aile'];
  tones = ['samimi', 'kurumsal', 'esprili', 'kısa'];

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('cardId') || '';
    this.api.getCardByToken(this.cardId).subscribe(c => { this.card = c; this.loadMessages(); });
  }

  loadMessages() {
    this.api.listMessages(this.card.id).subscribe(m => this.messages = m);
  }

  addMessage() {
    this.api.addMessage(this.card.id, { authorName: this.authorName, messageText: this.messageText, emojiList: null, mediaUrl: null, authorUserId: null })
      .subscribe(() => { this.messageText = ''; this.loadMessages(); });
  }

  suggest() {
    this.api.suggestMessage({ recipient: this.card.recipientName, occasion: this.card.occasionType, relationship: this.relationship, tone: this.tone })
      .subscribe(res => {
        this.messageText = res.suggestions?.[0] || this.messageText;
      });
  }
}
