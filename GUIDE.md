# Przewodnik Instalacji i Zarządzania Stroną AXL Dynamics

## 📋 Spis Treści
1. [Jak Uruchomić Projekt](#jak-uruchomić-projekt)
2. [Struktura Projektu](#struktura-projektu)
3. [Jak Edytować Teksty](#jak-edytować-teksty)
4. [Jak Dodawać Obrazy](#jak-dodawać-obrazy)
5. [Jak Dodawać Nowe Sekcje](#jak-dodawać-nowe-sekcje)
6. [Deployment](#deployment)
7. [FAQ](#faq)

---

## 🚀 Jak Uruchomić Projekt

### Metoda 1: Python HTTP Server (Zalecana)

1. Otwórz terminal w folderze projektu
2. Uruchom serwer:
   ```bash
   npm start
   # lub
   python3 -m http.server 8000
   ```
3. Otwórz przeglądarkę i wejdź na: `http://localhost:8000`

### Metoda 2: Live Server (VS Code)

1. Zainstaluj rozszerzenie "Live Server" w VS Code
2. Kliknij prawym przyciskiem na `index.html`
3. Wybierz "Open with Live Server"

### Metoda 3: Bezpośrednio w Przeglądarce

Po prostu otwórz plik `index.html` w przeglądarce (podwójne kliknięcie).

---

## 📁 Struktura Projektu

```
axl-dynamics-website/
├── index.html              # Strona główna
├── masstrade.html          # Strona produktowa MassTrade
├── pricing.html            # Strona cennikowa
├── css/
│   └── styles.css          # Wszystkie style
├── js/
│   ├── main.js             # Główna logika (nawigacja, FAQ, animacje)
│   └── pricing.js          # Funkcjonalność cennika
├── assets/
│   ├── images/             # Zdjęcia i grafiki
│   └── icons/              # Ikony SVG
├── README.md               # Dokumentacja projektu
├── GUIDE.md                # Ten przewodnik
└── package.json            # Konfiguracja npm
```

---

## ✏️ Jak Edytować Teksty

### 1. Edycja Tytułów i Nagłówków

**Strona główna (index.html):**
```html
<!-- Znajdź i edytuj: -->
<h1 class="hero-title">
    Nowoczesne Rozwiązania<br>
    dla <span class="highlight">E-commerce</span>
</h1>
```

**Zmień na swój tekst, zachowując strukturę HTML.**

### 2. Edycja Opisów Produktów

Znajdź sekcję `.product-card` i edytuj:
```html
<p class="product-description">
    Twój nowy opis produktu...
</p>
```

### 3. Edycja Cen (pricing.html)

```html
<span class="price-amount" data-monthly="299" data-annual="239">299</span>
```
- `data-monthly` - cena miesięczna
- `data-annual` - cena roczna (po rabacie)

### 4. Edycja Testimonials (Opinii Klientów)

```html
<blockquote class="testimonial-text">
    "Twoja nowa opinia klienta..."
</blockquote>
<div class="author-name">Jan Kowalski</div>
<div class="author-position">CEO, Firma Sp. z o.o.</div>
```

### 5. Edycja FAQ

```html
<div class="faq-item">
    <button class="faq-question" aria-expanded="false">
        <span>Twoje pytanie?</span>
        <!-- ikona -->
    </button>
    <div class="faq-answer">
        <p>Twoja odpowiedź na pytanie.</p>
    </div>
</div>
```

---

## 🖼️ Jak Dodawać Obrazy

### 1. Przygotowanie Obrazów

**Zalecane formaty:**
- Zdjęcia: `.jpg` lub `.webp` (lepsze dla SEO)
- Grafiki z przezroczystością: `.png`
- Ikony: `.svg` (skalowalne)

**Optymalizacja:**
- Maksymalna szerokość: 1920px
- Kompresja: używaj narzędzi jak TinyPNG lub Squoosh

### 2. Dodawanie Obrazów

**Krok 1:** Umieść obrazy w folderze `assets/images/`

**Krok 2:** Dodaj obrazy w HTML:
```html
<!-- Zwykły obrazek -->
<img src="assets/images/your-image.jpg" alt="Opis obrazka">

<!-- Z lazy loading (lepsze dla wydajności) -->
<img data-src="assets/images/your-image.jpg" alt="Opis obrazka" loading="lazy">
```

### 3. Zamiana Placeholder SVG na Prawdziwe Obrazy

**Przykład - Hero Section:**

Znajdź w index.html:
```html
<div class="mockup-placeholder">
    <svg>...</svg>  <!-- Usuń to -->
</div>
```

Zamień na:
```html
<div class="mockup-placeholder">
    <img src="assets/images/dashboard-screenshot.png" 
         alt="Screenshot panelu MassTrade" 
         loading="lazy">
</div>
```

### 4. Dodawanie Logo Firm/Partnerów

```html
<div class="platform-logo">
    <img src="assets/images/logos/allegro.svg" alt="Allegro">
</div>
```

---

## ➕ Jak Dodawać Nowe Sekcje

### 1. Dodawanie Nowej Sekcji na Stronie

**Template podstawowej sekcji:**
```html
<section class="custom-section" id="twoja-sekcja">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Tytuł Sekcji</h2>
            <p class="section-subtitle">Podtytuł sekcji</p>
        </div>

        <div class="section-content">
            <!-- Treść sekcji -->
        </div>
    </div>
</section>
```

### 2. Dodawanie Nowej Karty Produktu

```html
<article class="product-card">
    <div class="product-icon">
        <svg><!-- Ikona SVG --></svg>
    </div>
    <h3 class="product-title">Nazwa Produktu</h3>
    <p class="product-description">
        Opis produktu...
    </p>
    <ul class="product-features">
        <li>Funkcja 1</li>
        <li>Funkcja 2</li>
        <li>Funkcja 3</li>
    </ul>
    <a href="link.html" class="btn-primary">Dowiedz się więcej</a>
</article>
```

### 3. Dodawanie Nowego Testimonial

```html
<article class="testimonial-card">
    <div class="testimonial-rating">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
    </div>
    <blockquote class="testimonial-text">
        "Treść opinii klienta..."
    </blockquote>
    <div class="testimonial-author">
        <div class="author-avatar">JK</div>
        <div class="author-info">
            <div class="author-name">Jan Kowalski</div>
            <div class="author-position">Stanowisko, Firma</div>
        </div>
    </div>
</article>
```

### 4. Dodawanie Nowego Pytania do FAQ

```html
<div class="faq-item">
    <button class="faq-question" aria-expanded="false">
        <span>Nowe pytanie?</span>
        <svg class="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <div class="faq-answer">
        <p>Odpowiedź na nowe pytanie...</p>
    </div>
</div>
```

### 5. Dodawanie Linku do Nawigacji

W **każdym pliku HTML** (index.html, masstrade.html, pricing.html) znajdź:
```html
<ul class="nav-menu">
    <li><a href="#produkty">Produkty</a></li>
    <!-- ... pozostałe linki ... -->
    <li><a href="twoja-strona.html">Nowy Link</a></li>  <!-- DODAJ TO -->
</ul>
```

---

## 🚀 Deployment

### Opcja 1: GitHub Pages (Za Darmo)

1. Utwórz repozytorium na GitHub
2. Wypchnij kod:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/twoja-nazwa/repo.git
   git push -u origin main
   ```
3. Idź do Settings → Pages
4. Wybierz branch `main` i folder `/ (root)`
5. Twoja strona będzie dostępna pod: `https://twoja-nazwa.github.io/repo`

### Opcja 2: Netlify (Za Darmo + Custom Domain)

1. Wejdź na [netlify.com](https://netlify.com)
2. Zarejestruj się / Zaloguj
3. Przeciągnij folder projektu lub połącz z GitHub
4. Strona zostanie automatycznie wdrożona
5. Otrzymasz adres: `https://nazwa.netlify.app`

**Konfiguracja custom domain:**
- W Netlify: Domain Settings → Add custom domain
- Ustaw DNS records u swojego dostawcy domeny

### Opcja 3: Vercel (Za Darmo)

1. Wejdź na [vercel.com](https://vercel.com)
2. Importuj projekt z GitHub
3. Deploy automatyczny

### Opcja 4: Własny Hosting

1. Spakuj wszystkie pliki projektu
2. Wgraj przez FTP na serwer
3. Upewnij się, że `index.html` jest w głównym katalogu

---

## 🎨 Dostosowywanie Kolorów

### Zmiana Palety Kolorów

Edytuj `css/styles.css`, sekcja `:root`:

```css
:root {
    --color-primary: #FF6B35;       /* Pomarańczowy - zmień na swój */
    --color-secondary: #004E89;     /* Niebieski - zmień na swój */
    --color-accent: #F7B801;        /* Żółty - zmień na swój */
    
    /* Pozostałe kolory */
}
```

Wszystkie elementy automatycznie zaktualizują kolory!

---

## 📱 Testowanie Responsywności

### W Przeglądarce

1. **Chrome/Edge:** F12 → Device Toolbar (Ctrl+Shift+M)
2. **Firefox:** F12 → Responsive Design Mode (Ctrl+Shift+M)
3. **Safari:** Develop → Enter Responsive Design Mode

### Breakpointy do Sprawdzenia

- **Mobile:** 320px, 375px, 428px
- **Tablet:** 768px, 1024px
- **Desktop:** 1280px, 1440px, 1920px

---

## ❓ FAQ - Najczęstsze Problemy

### Strona nie ładuje się lokalnie

**Problem:** Obrazy lub style nie działają  
**Rozwiązanie:** Użyj serwera lokalnego (npm start) zamiast otwierać plik bezpośrednio

### FAQ nie działa (nie rozwija się)

**Problem:** Brak interaktywności  
**Rozwiązanie:** Sprawdź czy plik `js/main.js` jest poprawnie załadowany

### Ceny nie zmieniają się przy toggle

**Problem:** Toggle nie działa na pricing.html  
**Rozwiązanie:** Sprawdź czy `js/pricing.js` jest załadowany

### Mobile menu nie działa

**Problem:** Menu nie otwiera się na telefonie  
**Rozwiązanie:** Sprawdź console (F12) czy są błędy JavaScript

### Jak zmienić czcionki?

1. Wybierz czcionki na [Google Fonts](https://fonts.google.com)
2. Dodaj link w `<head>` każdego pliku HTML
3. Zmień w `css/styles.css`:
   ```css
   --font-heading: 'TwojaCzcionka', sans-serif;
   --font-body: 'TwojaCzcionka', sans-serif;
   ```

---

## 🛠️ Wsparcie Techniczne

Jeśli napotkasz problemy:

1. Sprawdź console przeglądarki (F12)
2. Przeczytaj ten przewodnik ponownie
3. Sprawdź WARP.md dla szczegółów technicznych
4. Skontaktuj się z developerem

---

## 📝 Notatki

- **Zawsze testuj zmiany lokalnie przed wdrożeniem**
- **Rób backupy przed dużymi zmianami**
- **Optymalizuj obrazy przed dodaniem**
- **Sprawdź responsywność na różnych urządzeniach**

---

**Powodzenia z Twoją stroną! 🚀**
