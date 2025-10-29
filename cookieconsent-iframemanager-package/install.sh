#!/bin/bash

# CookieConsent & IframeManager Installatie Script
# Voor Astro/Sanity projecten

echo "🍪 CookieConsent & IframeManager Installatie Script"
echo "=================================================="

# Controleer of we in een Astro project zitten
if [ ! -f "astro.config.mjs" ] && [ ! -f "astro.config.js" ]; then
    echo "❌ Fout: Dit script moet uitgevoerd worden in de root van een Astro project"
    exit 1
fi

# Maak directories aan als ze niet bestaan
echo "📁 Directories aanmaken..."
mkdir -p public/css
mkdir -p public/js
mkdir -p src/lib
mkdir -p src/components/content
mkdir -p studio/schemas

# Kopieer CSS bestanden
echo "🎨 CSS bestanden kopiëren..."
cp public/css/cookieconsent.css public/css/ 2>/dev/null || echo "⚠️  cookieconsent.css niet gevonden in public/css/"
cp public/css/iframemanager.css public/css/ 2>/dev/null || echo "⚠️  iframemanager.css niet gevonden in public/css/"

# Kopieer JavaScript bestanden
echo "📜 JavaScript bestanden kopiëren..."
cp public/js/cookieconsent.umd.js public/js/ 2>/dev/null || echo "⚠️  cookieconsent.umd.js niet gevonden in public/js/"
cp public/js/iframemanager.js public/js/ 2>/dev/null || echo "⚠️  iframemanager.js niet gevonden in public/js/"

# Kopieer TypeScript configuratie
echo "⚙️  TypeScript configuratie kopiëren..."
cp src/lib/CookieConsentConfig.ts src/lib/ 2>/dev/null || echo "⚠️  CookieConsentConfig.ts niet gevonden in src/lib/"
cp src/lib/IframeManagerConfig.ts src/lib/ 2>/dev/null || echo "⚠️  IframeManagerConfig.ts niet gevonden in src/lib/"

# Kopieer Astro components
echo "🧩 Astro components kopiëren..."
cp src/components/CookieConsent.astro src/components/ 2>/dev/null || echo "⚠️  CookieConsent.astro niet gevonden in src/components/"
cp src/components/content/EmbedBlock.astro src/components/content/ 2>/dev/null || echo "⚠️  EmbedBlock.astro niet gevonden in src/components/content/"

# Kopieer Sanity schema
echo "📊 Sanity schema kopiëren..."
cp studio/schemas/embedBlock.ts studio/schemas/ 2>/dev/null || echo "⚠️  embedBlock.ts niet gevonden in studio/schemas/"

# Installeer dependencies
echo "📦 Dependencies installeren..."
npm install vanilla-cookieconsent @orestbida/iframemanager

echo ""
echo "✅ Installatie voltooid!"
echo ""
echo "📋 Volgende stappen:"
echo "1. Voeg CookieConsent component toe aan je Layout.astro"
echo "2. Voeg CSS en JS bestanden toe aan je Layout.astro"
echo "3. Voeg embedBlock schema toe aan je Sanity configuratie"
echo "4. Gebruik EmbedBlock component in je pagina's"
echo ""
echo "📖 Zie README.md voor gedetailleerde instructies"
