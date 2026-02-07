# TiyerOne Education Consultant - Next.js Landing Page

A premium, exclusive landing page for TiyerOne Education Consultant, targeting ultra-high-net-worth families seeking Ivy League admissions guidance.

## Features

- **Next.js 14** with App Router
- **Server & Client Components** for optimal performance
- **Harvard Red Theme** (#A51C30) with elegant typography
- **Smooth Scrolling** navigation
- **Scroll Animations** with Intersection Observer
- **Responsive Design** for all devices
- **Google Fonts** integration (Cormorant Garamond & Inter)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.js       # Root layout with fonts and metadata
│   ├── page.js         # Main landing page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.js   # Fixed navigation bar
│   ├── Hero.js         # Hero section with CTAs
│   ├── ContactForm.js  # Consultation request form
│   ├── Section.js      # Reusable section with scroll animations
│   └── SmoothLink.js   # Smooth scroll link component
└── package.json
```

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
- `--harvard-red`: #A51C30
- `--harvard-red-dark`: #8B1526
- `--text-primary`: #1A1A1A
- `--bg-cream`: #FAFAF8

### Content
Edit content directly in `app/page.js` or break into separate data files.

### Form Submission
Update `components/ContactForm.js` to connect to your backend API.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## Technologies

- Next.js 14
- React 18
- CSS Modules (via globals.css)
- Google Fonts

## License

Private - TiyerOne Education Consultant
