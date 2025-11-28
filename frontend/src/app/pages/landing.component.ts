import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
  <section class="surface" style="padding:28px 26px 30px; margin-bottom: 24px;">
    <div class="badge">UI/UX araştırması + Türk pazarına uygun akış</div>
    <h1 style="font-size: 34px; margin-top: 12px;">Kudoboard + Smiile karışımı dijital kutlama kartları</h1>
    <p>Organizatör paylaşır, ekip hızla imzalar, kartlar arşive eklenir. Türkçe mesaj önerileri ve şirket içi alan desteğiyle.
    </p>
    <div class="cta-row hero-cta" style="margin: 14px 0 6px;">
      <button mat-raised-button color="primary" routerLink="/card/create">Kart Oluştur</button>
      <button mat-stroked-button color="accent" routerLink="/workspace">Şirketler için gör</button>
      <a mat-button color="primary" href="#insights">UI/UX içgörüleri</a>
    </div>
    <div class="grid cols-3" style="margin-top: 18px;">
      <div class="card-tile stat">
        <div class="value">60 sn</div>
        <div class="label">Kart kurulum süresi</div>
      </div>
      <div class="card-tile stat">
        <div class="value">Paylaş &rarr; İmzalar</div>
        <div class="label">Link ile katılım, üyelik gerekmez</div>
      </div>
      <div class="card-tile stat">
        <div class="value">PDF / PNG</div>
        <div class="label">Gönderim & arşivleme</div>
      </div>
    </div>
  </section>

  <section class="grid cols-2" style="gap: 18px; margin-bottom: 24px;">
    <div class="section-shell">
      <div class="section-title">
        <mat-icon color="primary">insights</mat-icon>
        <h3 style="margin:0;">UI/UX araştırması özetleri</h3>
      </div>
      <ul style="margin:0; padding-left: 18px; color: var(--muted); line-height:1.5;">
        <li>Mobil öncelikli akış: paylaşılabilir link ve mesaj formu tek ekranda.</li>
        <li>Hızlı giriş: kullanıcıdan minimum alan (isim + mesaj), isteğe bağlı medya.</li>
        <li>Güven hissi: gizli bağlantı, teslim tarihi ve arşivlenebilirlik net anlatım.</li>
        <li>Türkçe ton önerileri: "samimi", "kurumsal", "esprili" şablonları.</li>
        <li>Şirket alanı: ekipler için kart listesi, basit rol ayrımı.</li>
      </ul>
    </div>
    <div class="section-shell">
      <div class="section-title">
        <mat-icon color="primary">palette</mat-icon>
        <h3 style="margin:0;">Temalar & duygular</h3>
      </div>
      <div class="board-preview">
        <div class="board-note">🎉 Doğum günü: "Nice mutlu yıllara!"</div>
        <div class="board-note green">🌿 Yeni iş: "Enerjini ekibe taşıdığın için teşekkürler"</div>
        <div class="board-note blue">✨ Teşekkür: "Katkıların için minnettarız"</div>
        <div class="board-note pink">💌 Veda: "Beraber çalışmak çok keyifliydi"</div>
      </div>
      <p class="helper-text" style="margin-top:10px;">Farklı renk kartları ve emoji yoğunluklarıyla tahtaya doğal görünüm.</p>
    </div>
  </section>

  <section class="surface" id="insights" style="padding: 22px 22px 18px; margin-bottom: 24px;">
    <div class="section-title">
      <mat-icon color="primary">schema</mat-icon>
      <h3 style="margin:0;">Akışlar</h3>
    </div>
    <div class="grid cols-3" style="gap: 14px;">
      <div class="card-tile">
        <strong>1) Organizasyon</strong>
        <p>Alıcı, tema, tarih seç. Link otomatik oluşur.</p>
        <div class="tag-pill">60 sn</div>
      </div>
      <div class="card-tile">
        <strong>2) Katılımcılar</strong>
        <p>Linki aç → isim + mesaj + emoji/görsel → anında tahtada görünür.</p>
        <div class="tag-pill">Üyelik gerekmez</div>
      </div>
      <div class="card-tile">
        <strong>3) Teslim & Arşiv</strong>
        <p>PDF/PNG indir, herkese açık görünüm linki paylaş, koleksiyonuna ekle.</p>
        <div class="tag-pill">Arşiv & hatıra</div>
      </div>
    </div>
  </section>

  <section class="grid cols-2" style="gap: 18px; margin-bottom: 12px;">
    <div class="section-shell">
      <div class="section-title">
        <mat-icon color="primary">smart_toy</mat-icon>
        <h3 style="margin:0;">AI özellikleri (hazır entegrasyon)</h3>
      </div>
      <ul style="margin:0; padding-left: 18px; color: var(--muted); line-height:1.5;">
        <li>"Mesaj öner" butonu: kişi, ilişki, ton, özel gün parametreli.</li>
        <li>Kart özeti: ekip mesajlarından 2-3 paragraf + ana temalar.</li>
        <li>Çok dillilik: Türkçe öncelikli, İngilizce alternatif.</li>
      </ul>
    </div>
    <div class="section-shell">
      <div class="section-title">
        <mat-icon color="primary">business_center</mat-icon>
        <h3 style="margin:0;">B2B odak</h3>
      </div>
      <p>Workspace yapısı, çalışan daveti, şirket özel kart listeleri. Yıllık takvimde doğum günü / işe giriş yıldönümü otomatik hatırlatma için temel altyapı.</p>
      <div class="divider"></div>
      <div class="cta-row">
        <button mat-stroked-button color="primary" routerLink="/workspace">Workspace'i incele</button>
        <span class="helper-text">Sonraki adım: basit analitik ve takım kırılımı.</span>
      </div>
    </div>
  </section>
  <mat-card>
    <h1>Paylaşımlı Kutlama Kartları</h1>
    <p>Arkadaşlarınız veya ekip arkadaşlarınız için ortak imzalı dijital kartlar hazırlayın.</p>
    <button mat-raised-button color="primary" routerLink="/card/create">Hemen kart oluştur</button>
  </mat-card>
  `
})
export class LandingComponent {}
