# Smiile-Style Komşuluk Platformu: Türkiye Uyarlaması

## 1. Vizyon ve Konumlama
- **Hedef:** Mahalle ölçeğinde paylaşım, destek ve ticareti birleştiren, güvenli ve yerelleştirilmiş bir komşuluk ağı. Hem B2C (mahalle sakinleri) hem B2B2C (site/yönetim, yerel esnaf, belediye) modeli.
- **Değer Önermesi:** "Mahallende ihtiyacın olan her şey, komşularından ve yerel esnaftan güvenle." Kimlik/doğrulama, güven mekanizmaları ve regülasyon uyumu vurgusu.

## 2. Özellik Seti (MVP + Genişleme)

### A. Çekirdek Paylaşım & Yardımlaşma (Smiile benzeri)
- **Ödünç/Paylaş**: Eşya, araç-gereç, kitap; takvimli rezervasyon, depozito opsiyonu.
- **İşbirliği İlanları**: Tamirat, taşıma, etkinlik desteği; ödeme veya hediye puanla.
- **Etkinlikler**: Mahalle buluşmaları, çocuk oyun grupları; kapalı grup seçeneği (site içi).
- **Mesajlaşma**: 1-1 ve grup; spam/rahatsızlık bildirme, kişi engelleme.

### B. Türkiye'ye Özel Farklaştırıcılar
- **Site/Yönetim Entegrasyonu**: Apartman/site yönetimleri için panolar (duyuru, aidat hatırlatma), bakım randevuları.
- **Yerel Esnaf Pazaryeri**: Mahalle esnafı (manav, kuru temizleme, nalbur) için mağaza profili, teslimat zaman aralığı, kapıda ödeme/iyzico entegrasyonu.
- **Acil Destek & Güvenlik**: Komşu acil yardım butonu, doğrulanmış "destekçi" profilleri; AFAD/Kızılay duyurularına yerel dağıtım.
- **Topluluk Puanı**: Paylaşım geçmişi, değerlendirme, doğrulanmış kimlik/ikamet rozetleri.
- **Yerelleştirilmiş Ödeme**: FAST/IBAN paylaşımı yerine uygulama içi güvenli cüzdan; kredi kartı taksiti (regülasyonlara uygun) ve kapıda ödeme.
- **İkincil Pazar & Kiralama**: Tek seferlik satışlar; günlük/haftalık kiralama (emlak hariç).
- **Kurumsal Sosyal Sorumluluk (KSS)**: Belediyeler ve markalar için bağış/geri dönüşüm kampanyaları; mahalle bazlı yarışmalar.

### C. Güven ve Moderasyon
- E-Devlet/TC kimlik doğrulama opsiyonu; adres doğrulama (fatura yükleme veya lokasyon doğrulaması).
- Yapay zekâ destekli içerik moderasyonu (küfür, dolandırıcılık, spam) + insan incelemesi.
- Şeffaf itiraz süreci, kullanıcı sözleşmesi/aydınlatma metinleri KVKK uyumlu.

### D. Mobil & Growth
- iOS/Android öncelikli; PWA destekli.
- Davet kodu, referans puanı; mahalle hedefli push bildirimleri; lokasyon tabanlı kampanyalar.

## 3. Pazar ve Regülasyon Analizi (TR)
- **KVKK & Ödeme**: Kullanıcı verisi min. toplama, açık rıza yönetimi, saklama politikaları; ödeme için PCI-DSS uyumlu sağlayıcı (iyzico/PayTR). Kapalı devre cüzdan için MASAK uyumu ve limitli bakiye kurgusu.
- **Taksit ve Kapıda Ödeme**: Yerel esnaf ve kiralamada taksit talebi yüksek; kapıda ödeme güven kırılmasını azaltır.
- **Kimlik Doğrulama Beklentisi**: Sahte ilan/dolandırıcılık endişesi yüksek; e-Devlet doğrulaması ve adres teyidi güveni artırır.
- **Komşuluk/Dayanışma Trendi**: Afet sonrası destek ve yerel üreticiye dönüş eğilimi; yardım ve paylaşım modülleri yüksek adoption sağlar.
- **Rekabet**: Letgo/Sahibinden (satış ağırlıklı), Getir/Trendyol (market/mağaza), Apartman/Site yönetim app'leri (Apsiyon vb.). Kombine paylaşım + esnaf + site modülü boşluğu var.

## 4. Gelir Modeli Önerisi
- **Hibrit**: (1) **Abonelik (B2B/B2B2C)** site/yönetim panosu + esnaf mağazası aboneliği; (2) **İşlem Bazlı** komisyon (kiralama/satış %5-10, esnaf sipariş %8-12) + ödeme hizmeti ücreti; (3) **Reklam/Öne Çıkarma** mahalle hedefli.
- **Bireysel Kullanıcılar**: Ücretsiz temel kullanım; premium ile genişletilmiş kiralama güvencesi, ekstra görünürlük, düşük komisyon.
- **Doğrulama Paketleri**: Kimlik/adres doğrulaması için küçük ücret veya depozito, güven rozeti sağlar.
- **Sık Sorulan Karar**: Sadece abonelik (aylık) yeterli değil; Türkiye'de kullanıcılar tek seferlik satış/kiralama için ödeme yapmaya alışık. Bu yüzden **freemium + işlem bazlı** ana gelir, esnaf ve site için **abonelik + komisyon** hibriti en uygun.

## 5. Yol Haritası (6 Ay)
- **Ay 1**: Pazar valide etme, 3 mahallede pilot; kimlik/adres doğrulama akışı; çekirdek paylaşım ve kiralama.
- **Ay 2**: Yerel esnaf katalogu + teslimat slotları; kapıda ödeme opsiyonu; PWA.
- **Ay 3**: Site/yönetim modülü (duyuru, bakım talebi, aidat linki); referans/davet kurgusu.
- **Ay 4**: Topluluk puanı/rozet; yapay zekâ moderasyon; AFAD/Kızılay entegrasyonlu acil yardım.
- **Ay 5**: Premium/paketleme, öne çıkarma; kampanya ve puan ekonomisi; KSS modülü.
- **Ay 6**: Analitik, büyüme otomasyonları; markalara hedefli reklam ve sponsorluk.

## 6. Monetizasyon Paketleri
- **Mahalle Sakinleri (B2C)**: Ücretsiz; Premium (aylık/3 aylık) – düşük komisyon, güvence, öncelikli destek.
- **Yerel Esnaf (B2B2C)**: Starter (düşük komisyon, sınırlı ürün), Pro (abonelik + daha düşük komisyon, teslimat slotu, kampanya araçları).
- **Site/Yönetim**: Aylık abonelik; modül başına fiyatlandırma (duyuru, aidat tahsil, bakım takip). Çoklu site indirimi.

## 7. Başarı Metrikleri
- Aktif mahalle sayısı, doğrulanmış kullanıcı oranı, aylık işlem hacmi (GMV), kiralama/satış sayısı, esnaf başına sipariş, site churn, güven puanı/şikâyet oranı.

## 8. Riskler & Önlemler
- **Dolandırıcılık**: Kimlik/adres doğrulama, emanet/cüzdan akışı, yapay zekâ moderasyon, teminat/depozito.
- **Likidite**: İlk aşamada paylaşıma teşvik (kredi/puan), esnaf kampanyaları, referans ödülleri.
- **Operasyon**: Müşteri desteği ve moderasyon ekibi; belediye/afad koordinasyonu; kuryeler için saha operasyonu.

## 9. Teknik Mimari Önerisi (Özet)
- **Frontend**: React Native + Expo (mobil öncelikli), web için Next.js/PWA.
- **Backend**: Node.js/TypeScript (NestJS) veya Python (FastAPI) + PostgreSQL; Redis cache; object storage (S3 uyumlu).
- **Gerçek Zamanlı**: WebSocket/Socket.IO mesajlaşma ve bildirim; push için Firebase/APNs.
- **Ödeme**: iyzico/PayTR entegrasyonu; kapıda ödeme iş akışı; cüzdan bakiyesi limiti ve MASAK uyumlu kayıt.
- **Güvenlik**: JWT + refresh; rate limit; KVKK uyumlu log/anonimizasyon; rol/izin sistemi (site yöneticisi, esnaf, kullanıcı).

## 10. MVP Kapsamı (Öncelikli)
1) Kimlik/adres doğrulama ve güven puanı.
2) Paylaşım/kiralama ilanları, mesajlaşma, rezervasyon + depozito.
3) Yerel esnaf listesi, sipariş + teslimat slotu, ödeme/kart + kapıda ödeme.
4) Site/yönetim duyuru ve bakım talepleri.
5) Davet/referral, temel analitik.

## 11. Lansman ve Büyüme
- Pilot mahalleler: Öğrenci yoğun (Beşiktaş/Kadıköy) + aile ağırlıklı (Çekmeköy/Ümraniye) + yeni site bölgeleri (Başakşehir/Beylikdüzü).
- Kurumsal partnerlik: Belediyelerle duyuru/afet modülü; yerel esnaf birlikleri; kartlı ödeme sağlayıcıları.
- Kampanya: "Mahallede 30 gün paylaş-kazan" puan kurgusu; davet başına cüzdan kredisi; esnaf açılış indirimleri.

## 12. Uzun Vadeli Genişleme
- Sigorta/teminat ürünleri (kiralama güvencesi), mikro-loan/BNPL.
- Akıllı kilit/IoT entegrasyonu (emanet dolapları, bisiklet/scooter kilidi) – daha sonra.
- Bölgesel genişleme: Önce büyükşehir, sonra ilçe bazlı yayılım; Arapça/İngilizce dil desteği.

## 13. Önerilen Ekip ve Operasyon
- **Ürün**: 1 PM, 1 UX, 1 Araştırmacı.
- **Mühendislik**: 2-3 mobil, 2 backend, 1 frontend web/PWA, 1 QA.
- **Topluluk/Growth**: 2 saha sorumlusu (pilot), 1-2 müşteri destek, 1 pazarlama.
- **Operasyon/Compliance**: 1 ödeme/uyum sorumlusu, 1 hukuk danışmanı.

## 14. Özet
- Smiile'ı aşan fark: Site yönetim + yerel esnaf pazaryeri + acil yardım + kimlik/adres doğrulama + kapıda ödeme/taksit + KSS entegrasyonları.
- Gelir modeli: Freemium bireysel + komisyon; esnaf ve site için abonelik + komisyon hibriti Türkiye için en uygun.
