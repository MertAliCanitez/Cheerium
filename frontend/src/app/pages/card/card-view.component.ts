import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-view',
  template: `
  <mat-card *ngIf="card">
    <h2>{{ card.recipientName }} için {{ card.occasionType }}</h2>
    <p>Durum: {{ card.status }}</p>
    <div class="messages">
      <mat-card *ngFor="let msg of messages">
        <strong>{{ msg.authorName }}</strong>
        <p>{{ msg.messageText }}</p>
      </mat-card>
    </div>
    <div class="form">
      <mat-form-field appearance="fill">
        <mat-label>İsminiz</mat-label>
        <input matInput [(ngModel)]="authorName" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Mesaj</mat-label>
        <textarea matInput rows="3" [(ngModel)]="messageText"></textarea>
      </mat-form-field>
      <button mat-stroked-button (click)="suggest()">Yapay zeka ile öner</button>
      <button mat-raised-button color="primary" (click)="addMessage()">Ekle</button>
    </div>
  </mat-card>
  `,
  styles: [`.messages { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; } .form { display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }`]
})
export class CardViewComponent implements OnInit {
  cardId = '';
  card: any;
  messages: any[] = [];
  authorName = '';
  messageText = '';

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
      .subscribe(() => this.loadMessages());
  }

  suggest() {
    this.api.suggestMessage({ recipient: this.card.recipientName, occasion: this.card.occasionType, relationship: 'arkadaş', tone: 'sıcak' })
      .subscribe(res => {
        this.messageText = res.suggestions[0];
      });
  }
}
