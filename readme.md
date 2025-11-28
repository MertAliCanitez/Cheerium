# Smiile-Style Collaborative Card MVP (TR)

## Product understanding
- Paylaşımlı dijital kart panosu: bir organizatör kart oluşturur, gizli bağlantıyı paylaşır, katılımcılar giriş yapmadan mesaj/emoji/görsel ekler.
- Son teslim/deadline sonrası kart kapatılabilir, PDF/PNG dışa aktarım noktası için API kancaları hazırlanır.
- Kullanıcı profilleri: oluşturulan, alınan ve imzalanan kartları ve koleksiyon klasörlerini listeler.
- Temalarla kişiselleştirme ve gizli bağlantı token’ı ile erişim.
- Şirketler için temel workspace: admin daveti, ekip içi kartlar.
- Yapay zeka entegrasyon kancaları: mesaj önerisi ve kart özeti.

## High-level architecture
- **Frontend (Angular 18 + Material):** Landing, kart oluşturma, kart görüntüleme/imzalama, profil/koleksiyon, workspace listeleme. API servisi JWT’li backend’e istek atar.
- **Backend (ASP.NET 8 Web API):** JWT kimlik doğrulama, kart, mesaj, tema, koleksiyon, workspace uçları; EF Core (PostgreSQL veya InMemory) ile veri erişimi; AI uçları stub.
- **Database (PostgreSQL):** Kullanıcılar, workspaceler, kartlar, kart mesajları, temalar, koleksiyonlar ve pivot tablo.
- **Docker Compose:** postgres + backend + frontend (nginx) konteynerleri.

## Folder structure
```
backend/
  Dockerfile
  src/
    Api/                # ASP.NET Web API giriş noktası ve controllerlar
    Application/        # Entities, DTOs, services (business logic)
    Infrastructure/     # DbContext ve seed verisi
frontend/
  Dockerfile
  src/                  # Angular 18 uygulaması
```

## Running locally (compose)
1. Ortam değişkenlerini `.env` veya `docker-compose.yml` içinden düzenleyin.
2. `docker-compose up --build` ile postgres, backend (8080), frontend (4200) ayağa kalkar. (CI/ortamda `dotnet` ve `npm` bulunmuyorsa build adımları `|| true` ile yumuşatılmıştır.)

## AI entegrasyonu
- `/api/ai/suggest-message` ve `/api/ai/card-summary` uçları hazır; gerçek OpenAI anahtarını `AiService` içine ve yapılandırmaya ekleyerek değiştirin.
