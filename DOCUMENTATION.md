# Thisiscoding1234.github.io - AI Agent Documentation

## Overview
This is a personal portfolio website built with **Astro 5**, featuring smooth scroll effects using the **Lenis library** and native **View Transitions API**. The website showcases various experimental pages, clocks, utilities, and creative projects.

## Technology Stack

### Core Framework
- **Astro 5.15.2**: Static site generator with modern web features
- **Node.js**: JavaScript runtime
- **pnpm**: Package manager

### Key Libraries
- **Lenis 1.3.13**: Smooth scrolling library for enhanced user experience
- **@yuvalkarif/gradient-blob**: Gradient blob generation for visual effects
- **Bootstrap 5.3.2**: UI framework for responsive design
- **jQuery 3.7.1**: JavaScript library for DOM manipulation
- **Font Awesome**: Icon library

### Features
- **Smooth Scrolling**: Lenis library provides butter-smooth scrolling with customizable easing
- **View Transitions API**: Native page transitions for seamless navigation
- **Responsive Design**: Mobile-first approach using Bootstrap
- **Dark/Light Theme**: Theme switching capability

## Project Structure

```
/home/runner/work/thisiscoding1234.github.io/thisiscoding1234.github.io/
├── src/
│   ├── pages/              # All page routes
│   │   ├── index.astro     # Homepage
│   │   ├── clocks/         # Clock pages (DO NOT MODIFY)
│   │   ├── jankland/       # Experimental pages
│   │   ├── whytils/        # Utility pages
│   │   └── ...             # Other pages
│   ├── layouts/            # Layout components
│   │   ├── Layout.astro    # Main layout with Lenis & View Transitions
│   │   └── Testout.astro   # Test layout
│   ├── components/         # Reusable components
│   │   ├── Navbar.astro    # Navigation bar
│   │   ├── Analytics.astro # Analytics integration
│   │   ├── ModeButton.astro # Theme switcher
│   │   └── HeadImage.astro # Logo component
│   └── styles/             # CSS files
│       ├── global.css      # Global styles
│       ├── lenis.css       # Lenis smooth scroll styles
│       ├── navbar.css      # Navigation styles
│       └── clocks/         # Clock-specific styles
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## Installation & Setup

### Prerequisites
```bash
# Install pnpm globally
npm install -g pnpm
```

### Install Dependencies
```bash
pnpm install
```

### Development Commands
```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Key Implementation Details

### 1. Lenis Smooth Scrolling

The Lenis library is integrated in `src/layouts/Layout.astro` and provides:

**Configuration:**
- **Duration**: 1.2s for smooth transitions
- **Easing**: Custom easing function for natural feel
- **Orientation**: Vertical scrolling only
- **Smooth Wheel**: Enabled for mouse wheel smoothing
- **Touch Support**: Disabled for better mobile performance

**Implementation:**
```javascript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});
```

**Request Animation Frame (RAF) Loop:**
Lenis requires a RAF loop to update the scroll position continuously:
```javascript
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

### 2. View Transitions API

Astro's built-in View Transitions are enabled in `Layout.astro`:

**Features:**
- Smooth page transitions between routes
- Automatic fade in/out animations
- Preserves scroll position where appropriate
- Works with Lenis seamlessly

**Integration with Lenis:**
- On `astro:before-swap`: Destroy current Lenis instance
- On `astro:after-swap`: Create new Lenis instance for new page

**CSS Animations:**
Custom transition animations defined in `src/styles/lenis.css`:
```css
::view-transition-old(root) { animation-name: fade-out; }
::view-transition-new(root) { animation-name: fade-in; }
```

### 3. Layout System

**Main Layout (`Layout.astro`):**
- Includes Navbar, Analytics, and theme meta tags
- Imports global CSS, Lenis CSS
- Includes ViewTransitions component
- Initializes Lenis with lifecycle handlers

**Props Interface:**
```typescript
interface Props {
  title: string;
}
```

### 4. Navigation

The navigation (`Navbar.astro`) includes:
- **Test Pages**: Demo pages
- **External Links**: GitHub, Dribbble profiles
- **Random Things**: Experimental content
- **Janky Things**: Test pages
- **Fun Things**: Interactive features and clocks
- **Infinite Bossa Nova**: External music project
- **Theme Toggle**: Dark/Light mode switcher

### 5. Clocks Section

**IMPORTANT: DO NOT MODIFY CLOCK PAGES**

Clock pages are located in `src/pages/clocks/`:
- `circ.astro` - Circular clock
- `digital.astro` - Digital clock
- `garde.astro` - Garde clock
- `gradient.astro` - Gradient clock
- `layer.astro` - Layered clock
- `mind.astro` - Mind clock
- `mixed.astro` - Mixed clock
- `prd.astro` - PRD clock
- `shuffle.astro` - Shuffle clock
- `virwrld.astro` - Virtual world clock
- `index.astro` - Clock listing page

Each clock has its own styling in `src/styles/clocks/`.

## Theme System

### Color Variables
Defined in `src/styles/global.css`:

**Light Theme:**
```css
--text: #000000;
--background: #fff6f0;
--primary: #ff6a00;
--secondary: #ffa600;
--accent: #66bfff;
```

**Dark Theme:**
```css
--text: #ffffff;
--background: #0f0600;
--primary: #ff6a00;
--secondary: #ffa600;
--accent: #005999;
```

### Fonts
- **Primary**: "Outfit" (sans-serif) - Body text
- **Headings**: "Raleway" (sans-serif) - Titles and headers
- **Special**: "Sixtyfour Convergence" - Decorative text

## Styling Conventions

### CSS Organization
- `global.css`: Base styles, theme variables, animations
- `lenis.css`: Smooth scroll and transition styles
- `navbar.css`: Navigation component styles
- `blob.css`: Gradient blob styles
- `easings.css`: Easing function demonstrations
- `grid.css`: Grid layout styles
- `card.css`: Card component styles
- `square.css`: Square element styles

### Animations
Multiple keyframe animations defined:
- `weight`: Font weight transition (100 → 900 → 100)
- `weight2`: Inverse weight transition
- `enter`: Page entry animation with scale and translation
- `rotate`: 3D rotation animation
- `fade-in/fade-out`: View transition animations

## Pages Overview

### Main Pages
- `/` - Homepage with splash messages
- `/page/` - Test page 1
- `/another/` - Test page 2
- `/okay/` - YvtdwovbyOs_1
- `/reallyokay/` - YvtdwovbyOs_2
- `/thingy/` - A Thing

### Experimental Pages
- `/jankland/one/` through `/jankland/four/` - Jank experiments

### Interactive Pages
- `/blob/` - Gradient blob demo
- `/cardtest/` - Card layout demo
- `/easings/` - Easing functions visualization
- `/gridtest/` - Grid system demo
- `/squaretest/` - Square element demo

### Utilities
- `/whytils/` - Utilities landing page
- `/whytils/flexo/` - Flexo utility
- `/whytils/shuffle/` - Shuffle utility
- `/whytils/primes/` - Prime numbers utility

### Clocks
- `/clocks/` - Clock showcase
- `/clocks/{clock-name}/` - Individual clock pages

## Development Guidelines

### Adding New Pages
1. Create `.astro` file in `src/pages/`
2. Use `Layout.astro` for consistent structure:
   ```astro
   ---
   import Layout from "../layouts/Layout.astro";
   ---
   
   <Layout title="Page Title">
     <!-- Content here -->
   </Layout>
   ```
3. Add navigation link in `Navbar.astro` if needed

### Modifying Styles
1. Use CSS variables for colors to support theming
2. Add page-specific styles in the page's frontmatter or separate CSS file
3. Follow existing naming conventions

### Testing
1. Build the project: `pnpm run build`
2. Preview: `pnpm run preview`
3. Test smooth scrolling on pages with scrollable content
4. Test view transitions by navigating between pages
5. Test on different screen sizes for responsive design

### Performance Considerations
- Lenis adds ~17KB to bundle size
- View Transitions API is progressive enhancement
- Images should be optimized
- External CDN resources should be deferred when possible

## Troubleshooting

### Lenis Not Working
- Check browser console for errors
- Ensure RAF loop is running
- Verify Lenis CSS is imported

### View Transitions Not Working
- Ensure `ViewTransitions` component is in `<head>`
- Check browser support (Chrome 111+, Edge 111+)
- Verify no conflicting CSS animations

### Build Warnings
- "Unsupported file type" warnings for CSS in pages folder - these are expected
- Prefix with underscore (`_style.css`) to silence warning

## Browser Support

### Lenis Smooth Scrolling
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

### View Transitions API
- ✅ Chrome 111+
- ✅ Edge 111+
- ⚠️ Safari 18+ (partial support)
- ⚠️ Firefox (in development, polyfill available)

Graceful degradation: Sites work without these features, just without smooth effects.

## External Resources

### CDN Links Used
- Bootstrap 5.3.2 CSS/JS
- jQuery 3.7.1
- Font Awesome (kit & standalone)
- Google Fonts (Outfit, Raleway, Sixtyfour Convergence)
- Umami Analytics

### Useful Links
- [Lenis Documentation](https://github.com/studio-freight/lenis)
- [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- [Astro Documentation](https://docs.astro.build/)

## Analytics
Umami analytics is integrated via `Analytics.astro` component. Tracking is done through `cloud.umami.is`.

## Deployment
The site is deployed to:
- **Production**: https://thisiscoding1234.github.io
- **Staging**: https://thisiscoding1234.pages.dev

Deployment is automated via GitHub Actions/Pages and Cloudflare Pages.

## Future Enhancements
- Additional smooth scroll effects (parallax, scroll-triggered animations)
- More interactive transitions between specific page pairs
- Enhanced mobile touch gestures
- Progressive Web App (PWA) capabilities
- Performance optimizations

## License
Check LICENSE file in repository root.

## Contributing
See CONTRIBUTING.md for contribution guidelines.

---

**Last Updated**: 2025-10-30
**Maintained By**: thisiscoding1234
**AI Agent Documentation Version**: 1.0
