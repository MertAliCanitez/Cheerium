import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  template: `
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
