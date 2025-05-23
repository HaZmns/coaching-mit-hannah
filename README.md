# Bilingual Personal Website

A personal coaching website with bilingual support (English and German) built with React and i18next.

## Features

- Responsive design for all devices
- Bilingual support (English and German)
- Clean design with pistachio color accents
- Multiple pages including Home, Coaching, About, FAQ, Contact, Prices, and Impressum
- Interactive components and forms

## Pages

- **Home**: Main landing page with highlights
- **Coaching**: Details about coaching services
- **About**: Information about the coach
- **FAQ**: Frequently asked questions
- **Contact**: Contact form and information
- **Prices**: Pricing packages
- **Impressum**: Legal information

## Prerequisites

- Node.js and npm installed on your system

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```
npm install
```

## Running the Development Server

To start the development server, run:

```
npm run dev
```

This will start the Parcel development server, usually at http://localhost:1234

## Building for Production

To build the site for production, run:

```
npm run build
```

This will create optimized files in the `dist` directory ready for deployment.

## Technologies Used

- React.js
- React Router for page navigation
- i18next for internationalization
- Parcel for bundling
- CSS3 for styling

## Customization

- Color scheme can be adjusted in `src/styles/main.css` by modifying the CSS variables in the `:root` selector
- Content can be modified in the translation files located in `src/locales/en/translation.json` and `src/locales/de/translation.json` 