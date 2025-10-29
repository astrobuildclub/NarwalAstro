# CookieConsent & IframeManager Integratie voor Astro/Sanity

Een complete oplossing voor GDPR-compliant video embeds in Astro projecten met Sanity CMS.

## 🚀 Features

- **GDPR Compliant**: Volledige cookie toestemming voor video embeds
- **Meertalig**: Ondersteuning voor Nederlands en Engels
- **Video Services**: YouTube en Vimeo ondersteuning
- **Sanity Integration**: Klaar voor gebruik met Sanity CMS
- **Responsive**: Werkt op alle apparaten
- **Performance**: Videos laden alleen na toestemming

## 📋 Vereisten

- Astro 4.0+ 
- Node.js 18+
- Sanity Studio (optioneel)

## 🛠 Installatie

### Stap 1: Dependencies installeren

Voeg deze packages toe aan je `package.json`:

```bash
npm install vanilla-cookieconsent @orestbida/iframemanager
```

Of met yarn:
```bash
yarn add vanilla-cookieconsent @orestbida/iframemanager
```

### Stap 2: Bestanden kopiëren

Kopieer de volgende bestanden naar je project:

#### CSS bestanden
```bash
# Kopieer naar public/css/
public/css/cookieconsent.css
public/css/iframemanager.css
```

#### JavaScript bestanden
```bash
# Kopieer naar public/js/
public/js/cookieconsent.umd.js
public/js/iframemanager.js
```

#### TypeScript configuratie
```bash
# Kopieer naar src/lib/
src/lib/CookieConsentConfig.ts
src/lib/IframeManagerConfig.ts
```

#### Astro components
```bash
# Kopieer naar src/components/
src/components/CookieConsent.astro
src/components/content/EmbedBlock.astro
```

#### Sanity schema (optioneel)
```bash
# Kopieer naar studio/schemas/
studio/schemas/embedBlock.ts
```

### Stap 3: Layout aanpassen

Voeg de CSS en JavaScript bestanden toe aan je `src/layouts/Layout.astro`:

```astro
---
// ... bestaande imports
import CookieConsent from "../components/CookieConsent.astro";
---

<!doctype html>
<html lang="nl" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- CookieConsent CSS -->
    <link rel="stylesheet" href="/css/cookieconsent.css" />
    <link rel="stylesheet" href="/css/iframemanager.css" />
    
    <!-- ... rest van je head content -->
  </head>
  <body>
    <slot />
    
    <!-- CookieConsent component -->
    <CookieConsent />
    
    <!-- JavaScript bestanden -->
    <script src="/js/cookieconsent.umd.js"></script>
    <script src="/js/iframemanager.js"></script>
  </body>
</html>
```

### Stap 4: Sanity schema toevoegen (optioneel)

Voeg het embedBlock schema toe aan je Sanity configuratie:

```typescript
// studio/schemas/index.ts
import embedBlock from './embedBlock';

export const schemaTypes = [
  // ... je bestaande schemas
  embedBlock,
];
```

## 🎯 Gebruik

### Basis video embed

```astro
---
import EmbedBlock from '../components/content/EmbedBlock.astro';
---

<EmbedBlock 
  service="youtube" 
  id="dQw4w9WgXcQ" 
  title="Mijn Video"
  ratio="16:9"
/>
```

### Met Sanity data

```astro
---
import EmbedBlock from '../components/content/EmbedBlock.astro';

const { video } = Astro.props; // Van Sanity query
---

<EmbedBlock 
  service={video.service}
  id={video.id}
  title={video.title}
  ratio={video.ratio || "16:9"}
  size={video.size || "inline"}
/>
```

### Sanity query voorbeeld

```typescript
// src/queries/video.ts
export const videoQuery = `*[_type == "embedBlock" && service == "youtube"][0]{
  service,
  id,
  title,
  ratio,
  size,
  params
}`;
```

## ⚙️ Configuratie

### Taal wijzigen

Pas de taal aan in `src/lib/CookieConsentConfig.ts`:

```typescript
export const cookieConsentConfig = {
  language: {
    default: 'nl', // of 'en'
    // ... rest van configuratie
  }
};
```

### Nieuwe video service toevoegen

Voeg een nieuwe service toe aan `src/lib/IframeManagerConfig.ts`:

```typescript
export const iframeManagerConfig = {
  services: {
    // ... bestaande services
    dailymotion: {
      embedUrl: 'https://www.dailymotion.com/embed/video/{data-id}',
      // ... rest van configuratie
    }
  }
};
```

## 🎨 Styling

De CSS bestanden bevatten alle benodigde styling. Je kunt de kleuren aanpassen via CSS custom properties:

```css
:root {
  --im-color: #fff;
  --im-bg: #000;
  --im-btn-bg: #ff0000;
  /* ... meer variabelen */
}
```

## 🔧 Troubleshooting

### Video's laden niet
- Controleer of de JavaScript bestanden correct geladen zijn
- Zorg dat de CookieConsent component in je layout staat
- Controleer de browser console voor errors

### Cookie modal verschijnt niet
- Controleer of `CookieConsent.astro` in je layout staat
- Zorg dat de CSS bestanden geladen zijn
- Controleer of de configuratie correct is

### Sanity integratie werkt niet
- Zorg dat het embedBlock schema toegevoegd is aan je Sanity configuratie
- Controleer of de query correct is
- Verificeer dat de data structuur overeenkomt

## 📱 Responsive gedrag

De video embeds zijn volledig responsive en ondersteunen verschillende aspect ratios:

- `16:9` - Widescreen (standaard)
- `4:3` - Standard
- `1:1` - Square
- `21:9` - Ultrawide
- `9:16` - Portrait

## 🔒 GDPR Compliance

Deze implementatie is volledig GDPR compliant:

- **Expliciete toestemming**: Gebruikers moeten expliciet toestemming geven
- **Granulaire controle**: Per service toestemming mogelijk
- **Transparantie**: Duidelijke informatie over cookie gebruik
- **Herroepbaar**: Gebruikers kunnen toestemming intrekken

## 📄 Licentie

Deze integratie gebruikt:
- [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) - MIT License
- [iframemanager](https://github.com/orestbida/iframemanager) - MIT License

## 🤝 Support

Voor vragen of problemen:
1. Controleer de troubleshooting sectie
2. Bekijk de documentatie van de onderliggende libraries
3. Open een issue in de repository

## 📝 Changelog

### v1.0.0
- Eerste release
- Ondersteuning voor YouTube en Vimeo
- Nederlandse en Engelse vertalingen
- Sanity CMS integratie
- GDPR compliance
