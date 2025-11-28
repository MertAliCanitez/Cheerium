import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-create',
  template: `
  <section class="surface" style="padding: 22px;">
    <div class="section-title" style="margin-bottom: 6px;">
      <mat-icon color="primary">celebration</mat-icon>
      <h2 style="margin:0;">Kart Oluştur</h2>
    </div>
    <p class="helper-text">Organizatör için tasarlandı: 1 dakikada tema seç, linki paylaş, imzalar gelsin.</p>

    <div class="form-grid" style="margin-top: 14px;">
      <div>
        <mat-form-field appearance="fill" style="width:100%;">
          <mat-label>Alıcı adı</mat-label>
          <input matInput [(ngModel)]="recipientName" placeholder="Örn. Ayşe" />
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill" style="width:100%;">
          <mat-label>Olay</mat-label>
          <mat-select [(ngModel)]="occasion">
            <mat-option *ngFor="let preset of occasionPresets" [value]="preset">{{ preset }}</mat-option>
            <mat-option value="">Diğer / özelleştir</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="fill" style="width:100%; margin-top:8px;" *ngIf="occasion === ''">
          <mat-label>Özel olay</mat-label>
          <input matInput [(ngModel)]="customOccasion" placeholder="Yeni ofis, terfi, vb." />
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill" style="width:100%;">
          <mat-label>Teslim / kapanış tarihi</mat-label>
          <input matInput [matDatepicker]="picker" [(ngModel)]="deadline" placeholder="Opsiyonel" />
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </div>
    </div>

    <div class="divider"></div>

    <div class="grid cols-2" style="gap: 14px; align-items: start;">
      <div>
        <div class="section-title">
          <mat-icon color="primary">palette</mat-icon>
          <h3 style="margin:0;">Tema seçimi</h3>
        </div>
        <div class="grid cols-2" style="gap: 10px;">
          <button mat-stroked-button *ngFor="let theme of themes" [color]="activeThemeId === theme.id ? 'primary' : undefined" (click)="selectTheme(theme.id)" style="justify-content: flex-start; text-align:left;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="width:14px;height:14px;border-radius:6px; background: linear-gradient(135deg,#a855f7,#22d3ee);"></span>
              <div>
                <div style="font-weight:700;">{{ theme.name }}</div>
                <small class="helper-text">Ton & font ayarlı</small>
              </div>
            </div>
          </button>
        </div>
        <p class="helper-text" style="margin-top:8px;">Tema önizlemeleri kart tahtasında otomatik uygulanır.</p>
      </div>
      <div class="section-shell">
        <div class="section-title" style="margin-bottom:6px;">
          <mat-icon color="primary">tips_and_updates</mat-icon>
          <h3 style="margin:0;">İpuçları</h3>
        </div>
        <ul style="margin:0; padding-left:16px; color: var(--muted); line-height:1.5;">
          <li>Gizli bağlantıyı WhatsApp / Slack / e-posta ile paylaş.</li>
          <li>"Samimi" veya "Kurumsal" ton için AI öneriyi ilet.</li>
          <li>Medya ekleyen imzalar için en iyi deneyim: 1200x1200 görsel.</li>
        </ul>
      </div>
    </div>

    <div class="divider"></div>

    <div class="cta-row" style="align-items:center;">
      <button mat-raised-button color="primary" (click)="create()">Kartı oluştur ve linki al</button>
      <span class="helper-text">Kapanıştan sonra PDF/PNG indirme ve koleksiyonlara ekleme hazır.</span>
    </div>

    <div *ngIf="secretLink" class="section-shell" style="margin-top:14px; display:flex; align-items:center; gap:10px;">
      <mat-icon color="primary">link</mat-icon>
      <div style="flex:1;">
        <div style="font-weight:700;">Paylaşılabilir bağlantı</div>
        <div class="helper-text">Katılımcılar giriş yapmadan imza atabilir.</div>
        <div style="word-break:break-all; margin-top:4px;">{{ secretLink }}</div>
      </div>
      <button mat-stroked-button color="primary" (click)="copyLink()">Kopyala</button>
    </div>
  </section>
  `
})
export class CardCreateComponent {
  recipientName = '';
  occasion = 'Doğum günü';
  customOccasion = '';
  deadline: Date | null = null;
  activeThemeId = '';
  themes: any[] = [];
  secretLink: string | null = null;
  occasionPresets = ['Doğum günü', 'Teşekkür', 'Veda', 'Yeni iş'];

  constructor(private api: ApiService) {
    this.api.getThemes().subscribe(t => {
      this.themes = t;
      this.activeThemeId = t?.[0]?.id ?? '';
    });
  }

  selectTheme(themeId: string) {
    this.activeThemeId = themeId;
  }

  create() {
    const occasionType = this.occasion || this.customOccasion;
    this.api.createCard({ recipientName: this.recipientName, occasionType, themeId: this.activeThemeId, deadlineAt: this.deadline, workspaceId: null })
      .subscribe(card => {
        this.secretLink = `${window.location.origin}/card/${card.secretLinkToken}`;
      });
  }

  copyLink() {
    if (!this.secretLink || !navigator?.clipboard) return;
    navigator.clipboard.writeText(this.secretLink);
  }
}
