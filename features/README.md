# Podstrony Funkcji

Folder zawiera dedykowane podstrony dla każdej funkcji MassTrade.

## Aktualnie dostępne:
- ✅ **szybkie-wystawianie.html** - Gotowe

## Do utworzenia:

### 1. synchronizacja.html
**Tytuł**: Automatyczna synchronizacja  
**Emoji**: 🔄  
**Opis**: Stany magazynowe aktualizują się automatycznie na wszystkich kanałach  
**Treść powinna zawierać**:
- Synchronizacja w czasie rzeczywistym
- Automatyczna aktualizacja cen
- Synchronizacja stanów magazynowych
- Zapobieganie oversellingu

### 2. magazyn.html
**Tytuł**: Zarządzanie magazynem  
**Emoji**: 📦  
**Opis**: Scentralizowane miejsce z informacjami o stanach magazynowych  
**Treść powinna zawierać**:
- Wielomagazynowa obsługa
- Historia zmian stanów
- Alerty o niskich stanach
- Rezerwacje produktów

### 3. usuwanie-tla.html
**Tytuł**: Usuwanie tła  
**Emoji**: 🖼️  
**Opis**: Automatyczne usuwanie tła ze zdjęć produktowych  
**Treść powinna zawierać**:
- AI-powered usuwanie tła
- Wsadowe przetwarzanie
- Optymalizacja rozmiaru
- Dodawanie watermarków

### 4. integracje.html
**Tytuł**: Integracje  
**Emoji**: 🔌  
**Opis**: Połączenie z przewoźnikami, ERP, systemami księgowymi  
**Treść powinna zawierać**:
- Lista dostępnych integracji
- API REST
- Webhooks
- Integracje z przewoźnikami (InPost, DPD, DHL)

### 5. pim.html
**Tytuł**: Wbudowany PIM  
**Emoji**: 📊  
**Opis**: Zarządzaj wszystkimi danymi produktowymi w jednym miejscu  
**Treść powinna zawierać**:
- Product Information Management
- Atrybuty i warianty produktów
- Kategoryzacja
- Import/eksport danych

## Jak utworzyć nową podstronę:

1. Skopiuj plik `szybkie-wystawianie.html` jako szablon
2. Zmień:
   - Tytuł w `<title>` i `<h1>`
   - Meta description
   - Emoji w hero
   - Treść w sekcji `main-content`
   - Linki w sidebar do innych funkcji
3. Zachowaj strukturę HTML i klasy CSS
4. Upewnij się, że wszystkie ścieżki `../` są poprawne

## Struktura podstrony:

```html
- Navigation (wspólna dla całej strony)
- Hero z breadcrumb
- Content Section:
  - Main Content (2/3 szerokości)
    - Jak to działa?
    - Główne możliwości
    - Dlaczego to ważne?
    - Przykładowy przepływ pracy
    - CTA Box
  - Sidebar (1/3 szerokości)
    - Powiązane funkcje
    - Potrzebujesz pomocy?
- Footer
```

## Style CSS:

Wszystkie style dla podstron znajdują się w `css/styles.css` w sekcji `/* ===== Feature Pages ===== */`

Główne klasy:
- `.feature-hero` - Hero z gradientem
- `.breadcrumb` - Nawigacja okruszkowa
- `.content-layout` - Grid layout (2fr 1fr)
- `.main-content` - Główna treść
- `.workflow-steps` - Kroki przepływu pracy
- `.cta-box` - Call-to-action box
- `.sidebar-card` - Karty w sidebarze
