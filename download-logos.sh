#!/bin/bash

# Skrypt do pobierania logo platform
# Uwaga: Niektóre źródła mogą wymagać ręcznego pobrania

cd "$(dirname "$0")/images/logos"

echo "Pobieranie logo platform..."

# Clearbit Logo API (darmowe, ale niższa jakość)
echo "Pobieranie Allegro logo..."
curl -L "https://logo.clearbit.com/allegro.pl" -o allegro.png 2>/dev/null

echo "Pobieranie OLX logo..."
curl -L "https://logo.clearbit.com/olx.pl" -o olx.png 2>/dev/null

echo "Pobieranie eBay logo..."
curl -L "https://logo.clearbit.com/ebay.com" -o ebay.png 2>/dev/null

echo "Pobieranie Otomoto logo..."
curl -L "https://logo.clearbit.com/otomoto.pl" -o otomoto.png 2>/dev/null

echo "Pobieranie WooCommerce logo..."
curl -L "https://logo.clearbit.com/woocommerce.com" -o woocommerce.png 2>/dev/null

echo "Pobieranie OVOKO logo..."
curl -L "https://logo.clearbit.com/ovoko.eu" -o ovoko.png 2>/dev/null

echo "Pobieranie BaseLinker logo..."
curl -L "https://logo.clearbit.com/baselinker.com" -o baselinker.png 2>/dev/null

echo ""
echo "✅ Pobieranie zakończone!"
echo ""
echo "⚠️  UWAGA: Logo z Clearbit mogą być niskiej jakości."
echo "Dla lepszej jakości zalecam ręczne pobranie z oficjalnych źródeł:"
echo ""
echo "1. Allegro: https://about.allegro.eu/dla-mediow/materialy-prasowe"
echo "2. eBay: https://www.ebayinc.com/company/brand-resources/"
echo "3. WooCommerce: https://woocommerce.com/brand-and-logos/"
echo "4. Pozostałe: Użyj Google Images '[nazwa] logo PNG transparent'"
echo ""
echo "Sprawdź pobrane pliki w folderze: images/logos/"
