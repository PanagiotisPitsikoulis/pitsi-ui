# Εξαρτήσεις Συστήματος: pitsi-ui

---

## Εξαρτήσεις Root Workspace

### Production Dependencies

- **@babel/core** (^7.28.5)
  Πυρήνας JavaScript compiler για μετασχηματισμό σύγχρονης σύνταξης JavaScript

- **@changesets/changelog-github** (^0.5.2)
  Δημιουργία changelogs από GitHub pull requests και commits

- **@changesets/cli** (^2.29.8)
  Εργαλείο γραμμής εντολών για διαχείριση εκδόσεων πακέτων σε monorepos

- **@commitlint/cli** (^20.2.0)
  Έλεγχος commit messages για τήρηση conventional commit format

- **@commitlint/config-conventional** (^20.2.0)
  Κοινή διαμόρφωση για conventional commit message linting

- **@gsap/react** (^2.1.2)
  React hooks και utilities για ενσωμάτωση της βιβλιοθήκης animations GSAP

- **@ianvs/prettier-plugin-sort-imports** (^4.7.0)
  Prettier plugin που ταξινομεί αυτόματα τα import statements

- **@manypkg/cli** (^0.25.1)
  Εργαλείο CLI για διαχείριση και επικύρωση διαμορφώσεων monorepo πακέτων

- **@typescript-eslint/parser** (^8.48.1)
  Parser που επιτρέπει στο ESLint να κατανοεί TypeScript σύνταξη

- **autoprefixer** (^10.4.22)
  PostCSS plugin που προσθέτει αυτόματα vendor prefixes σε CSS properties

- **concurrently** (^9.2.1)
  Εκτέλεση πολλαπλών εντολών ταυτόχρονα σε παράλληλη λειτουργία

- **cross-env** (^10.1.0)
  Ορισμός environment variables σε διαφορετικά λειτουργικά συστήματα

- **eslint** (^9.39.1)
  Εργαλείο στατικής ανάλυσης κώδικα για εντοπισμό προβληματικών patterns σε JavaScript

- **eslint-config-next** (^16.0.7)
  ESLint configuration preset βελτιστοποιημένο για Next.js εφαρμογές

- **eslint-config-prettier** (^10.1.8)
  Απενεργοποίηση ESLint κανόνων που συγκρούονται με Prettier formatting

- **eslint-config-turbo** (^2.6.3)
  ESLint configuration για Turborepo monorepo builds

- **eslint-plugin-react** (^7.37.5)
  React-specific linting κανόνες για ESLint

- **eslint-plugin-tailwindcss** (^3.18.2)
  ESLint plugin για επιβολή Tailwind CSS best practices

- **gsap** (^3.13.0)
  Επαγγελματική JavaScript animation library για high-performance animations

- **motion** (^12.23.25)
  Σύγχρονη animation library για React με declarative API

- **prettier** (^3.7.4)
  Code formatter για συνεπές code style

- **pretty-quick** (^4.2.2)
  Εκτέλεση Prettier μόνο σε αλλαγμένα αρχεία για ταχύτερο formatting

- **tailwindcss** (^4.1.17)
  Utility-first CSS framework για ταχεία ανάπτυξη UI

- **tsx** (^4.21.0)
  TypeScript execution engine για άμεση εκτέλεση .ts αρχείων

- **vite** (^7.2.6)
  Build tool νέας γενιάς με γρήγορο hot module replacement

- **vite-tsconfig-paths** (^5.1.4)
  Vite plugin που επιλύει TypeScript path aliases

- **vitest** (^4.0.15)
  Γρήγορο unit testing framework με Vite

### Dev Dependencies

- **@types/hast** (^3.0.4)
  TypeScript type definitions για HAST (Hypertext Abstract Syntax Tree)

- **@types/node** (^24.10.1)
  TypeScript type definitions για Node.js runtime APIs

- **@types/react** (^19.2.7)
  TypeScript type definitions για React library

- **@types/react-dom** (^19.2.3)
  TypeScript type definitions για React DOM renderer

- **start-server-and-test** (^2.1.3)
  Εκκίνηση server, αναμονή απόκρισης και εκτέλεση tests

- **turbo** (^2.6.3)
  High-performance build system για JavaScript/TypeScript monorepos

- **typescript** (^5.9.3)
  Typed superset της JavaScript που μεταγλωττίζεται σε plain JavaScript

---

## Εξαρτήσεις Ιστοσελίδας Τεκμηρίωσης (V4)

### UI Primitives (Radix UI)

- **@radix-ui/react-accessible-icon** (^1.1.8)
  Περιτύλιγμα icons για παροχή accessible labels σε screen readers

- **@radix-ui/react-accordion** (^1.2.12)
  Κάθετα στοιβαγμένο σύνολο διαδραστικών headings που αποκαλύπτουν περιεχόμενο

- **@radix-ui/react-alert-dialog** (^1.1.15)
  Modal dialog που διακόπτει τον χρήστη με σημαντικό περιεχόμενο που απαιτεί ενέργεια

- **@radix-ui/react-aspect-ratio** (^1.1.8)
  Διατήρηση συνεπούς αναλογίας πλάτους-ύψους για responsive περιεχόμενο

- **@radix-ui/react-avatar** (^1.1.11)
  Εμφάνιση εικόνας προφίλ χρήστη με fallback αρχικά ή icon

- **@radix-ui/react-checkbox** (^1.3.3)
  Accessible checkbox input με υποστήριξη custom styling

- **@radix-ui/react-collapsible** (^1.1.12)
  Expandable/collapsible τμήμα περιεχομένου με υποστήριξη animation

- **@radix-ui/react-context-menu** (^2.2.16)
  Right-click menu με keyboard navigation και submenus

- **@radix-ui/react-dialog** (^1.1.15)
  Accessible modal dialog με focus trapping και overlay

- **@radix-ui/react-dropdown-menu** (^2.1.16)
  Dropdown menu που ενεργοποιείται από button με keyboard navigation

- **@radix-ui/react-hover-card** (^1.1.15)
  Card που εμφανίζεται στο hover για προεπισκόπηση περιεχομένου

- **@radix-ui/react-icons** (^1.3.2)
  Icon set σχεδιασμένο για συνεργασία με Radix UI components

- **@radix-ui/react-label** (^2.1.8)
  Accessible label component που συσχετίζεται με form controls

- **@radix-ui/react-menubar** (^1.1.16)
  Οριζόντια menu bar με dropdown submenus όπως desktop εφαρμογές

- **@radix-ui/react-navigation-menu** (^1.2.14)
  Navigation component για site header με mega-menu υποστήριξη

- **@radix-ui/react-popover** (^1.1.15)
  Floating content panel που εμφανίζεται σχετικά με το trigger element

- **@radix-ui/react-portal** (^1.1.10)
  Render children σε διαφορετικό τμήμα του DOM tree

- **@radix-ui/react-progress** (^1.1.8)
  Progress bar που δείχνει κατάσταση ολοκλήρωσης εργασίας

- **@radix-ui/react-radio-group** (^1.3.8)
  Ομάδα radio buttons όπου μόνο ένα μπορεί να επιλεγεί

- **@radix-ui/react-scroll-area** (^1.2.10)
  Custom scrollable περιοχή με styled scrollbars

- **@radix-ui/react-select** (^2.2.6)
  Dropdown select component με αναζήτηση και keyboard navigation

- **@radix-ui/react-separator** (^1.1.8)
  Οπτικός διαχωριστής μεταξύ τμημάτων περιεχομένου

- **@radix-ui/react-slider** (^1.3.6)
  Range input slider για επιλογή αριθμητικών τιμών

- **@radix-ui/react-slot** (^1.2.4)
  Συγχώνευση props σε child element για composition patterns

- **@radix-ui/react-switch** (^1.2.6)
  Toggle switch για boolean on/off καταστάσεις

- **@radix-ui/react-tabs** (^1.1.13)
  Tabbed interface για οργάνωση περιεχομένου σε panels

- **@radix-ui/react-toast** (^1.2.15)
  Notification messages που εμφανίζονται προσωρινά

- **@radix-ui/react-toggle** (^1.1.10)
  Button δύο καταστάσεων που μπορεί να είναι on ή off

- **@radix-ui/react-toggle-group** (^1.1.11)
  Ομάδα toggle buttons όπου ένα ή περισσότερα μπορούν να είναι ενεργά

- **@radix-ui/react-tooltip** (^1.2.8)
  Popup που εμφανίζει πληροφορίες στο hover ή focus

### Framework και Core

- **next** (16.0.7)
  React framework για production με server-side rendering και static generation

- **react** (19.2.0)
  JavaScript library για δημιουργία user interfaces με components

- **react-dom** (19.2.0)
  React package για DOM rendering και browser interaction

- **typescript** (^5.9.3)
  Typed superset της JavaScript με static type checking

### Τεκμηρίωση

- **fumadocs-core** (16.0.5)
  Core utilities και primitives για δημιουργία documentation sites

- **fumadocs-docgen** (2.0.0)
  Αυτόματη δημιουργία documentation από TypeScript source files

- **fumadocs-mdx** (13.0.2)
  MDX ενσωμάτωση για fumadocs με component rendering

- **fumadocs-ui** (16.0.5)
  Pre-built UI components για fumadocs documentation sites

- **rehype-pretty-code** (^0.14.1)
  Syntax highlighting plugin για rehype με Shiki

- **shiki** (^1.29.2)
  Syntax highlighter χρησιμοποιώντας VS Code TextMate grammars

### Styling

- **tailwindcss** (^4.1.17)
  Utility-first CSS framework για ταχείς custom σχεδιασμούς

- **@tailwindcss/postcss** (^4.1.17)
  PostCSS plugin για επεξεργασία Tailwind CSS

- **postcss** (^8.5.6)
  Εργαλείο για μετασχηματισμό CSS με JavaScript plugins

- **class-variance-authority** (^0.7.1)
  Δημιουργία variant-based component styles με TypeScript υποστήριξη

- **clsx** (^2.1.1)
  Utility για κατασκευή className strings υπό συνθήκες

- **tailwind-merge** (^3.4.0)
  Συγχώνευση Tailwind CSS classes χωρίς style conflicts

- **tw-animate-css** (^1.4.0)
  Tailwind CSS plugin για animate.css animations

### Animation

- **gsap** (^3.13.0)
  Επαγγελματική JavaScript animation library για σύνθετα animations

- **@gsap/react** (^2.1.2)
  Επίσημη React ενσωμάτωση για GSAP animations

- **motion** (^12.23.25)
  Production-ready animation library για React εφαρμογές

- **lenis** (^1.3.15)
  Smooth scroll library για ομαλές εμπειρίες scrolling

### Data και Forms

- **@tanstack/react-form** (^1.27.1)
  Form state management με υποστήριξη validation

- **@tanstack/react-table** (^8.21.3)
  Headless table library για δημιουργία data grids

- **@hookform/resolvers** (^3.10.0)
  Validation resolvers για React Hook Form (Zod, Yup, κ.λπ.)

- **react-hook-form** (^7.68.0)
  Performant form library με εύκολο validation και ελάχιστα re-renders

- **zod** (^3.25.76)
  TypeScript-first schema validation με static type inference

### Βάση Δεδομένων και Αυθεντικοποίηση

- **drizzle-orm** (^0.44.7)
  TypeScript ORM με type-safe queries και migrations

- **postgres** (^3.4.7)
  Γρήγορος PostgreSQL client για Node.js με tagged template queries

- **better-auth** (^1.4.5)
  Authentication library με OAuth, sessions και multi-factor υποστήριξη

- **stripe** (^19.3.1)
  Επίσημος Stripe API client για επεξεργασία πληρωμών

### UI Components

- **cmdk** (^1.1.1)
  Command palette component για keyboard-first navigation

- **embla-carousel-react** (8.5.2)
  Ελαφριά carousel library με touch και mouse υποστήριξη

- **embla-carousel-autoplay** (8.5.2)
  Autoplay plugin για Embla Carousel

- **input-otp** (^1.4.2)
  One-time password input component με copy-paste υποστήριξη

- **react-day-picker** (^9.11.3)
  Ευέλικτο date picker component με range selection

- **react-resizable-panels** (^2.1.9)
  Resizable panel group component για split-view layouts

- **react-textarea-autosize** (^8.5.9)
  Textarea που προσαρμόζει αυτόματα το ύψος στο περιεχόμενο

- **recharts** (2.15.4)
  Composable charting library βασισμένη σε React και D3

- **sonner** (^2.0.7)
  Toast notification component

- **swiper** (^12.0.3)
  Σύγχρονο touch slider με hardware-accelerated transitions

- **vaul** (1.1.2)
  Drawer component για React με smooth animations

### Drag and Drop

- **@dnd-kit/core** (^6.3.1)
  Core utilities για δημιουργία drag and drop interfaces

- **@dnd-kit/modifiers** (^9.0.0)
  Modifiers για περιορισμό drag movement και behavior

- **@dnd-kit/sortable** (^10.0.0)
  Sortable preset για reorderable lists

- **@dnd-kit/utilities** (^3.2.2)
  Utility functions για dnd-kit operations

### Utilities

- **@faker-js/faker** (^10.1.0)
  Δημιουργία ρεαλιστικών fake data για testing και development

- **@tabler/icons-react** (^3.35.0)
  Free και open-source icon library με 5000+ icons

- **@vercel/analytics** (^1.6.1)
  Web analytics για Vercel-deployed εφαρμογές

- **change-case** (^5.4.4)
  Μετασχηματισμός strings μεταξύ camelCase, snake_case, κ.λπ.

- **chrono-node** (^2.9.0)
  Natural language date parser (π.χ. "next Friday")

- **date-fns** (^4.1.0)
  Σύγχρονη JavaScript date utility library

- **dotted-map** (^2.2.3)
  Δημιουργία dotted world map visualizations

- **front-matter** (^4.0.2)
  Εξαγωγή YAML front matter από markdown files

- **jotai** (^2.15.2)
  Primitive και flexible state management για React

- **little-date** (^1.2.1)
  Μικρή date formatting library για human-readable dates

- **lodash** (^4.17.21)
  Utility library με functions για arrays, objects, strings

- **lucide-react** (0.474.0)
  Icon library για React

- **merge-refs** (^2.0.0)
  Συγχώνευση πολλαπλών React refs σε ένα ref callback

- **nanoid** (^5.1.6)
  Μικρός, ασφαλής, URL-friendly unique ID generator

- **next-themes** (0.4.6)
  Dark mode με system preference detection

- **rimraf** (^6.1.2)
  Cross-platform rm -rf για διαγραφή directories

- **ts-morph** (18.0.0)
  TypeScript compiler API wrapper για AST manipulation

- **unicornstudio-react** (1.4.33-1)
  React ενσωμάτωση για Unicorn Studio interactive designs

- **pitsi** (3.5.0)
  Το ίδιο το pitsi CLI για διαχείριση συστατικών

### Dev Dependencies

- **@ianvs/prettier-plugin-sort-imports** (^4.7.0)
  Prettier plugin για οργάνωση import statements

- **@types/lodash** (^4.17.21)
  TypeScript definitions για Lodash utility functions

- **@types/mdx** (^2.0.13)
  TypeScript definitions για MDX file types

- **@types/node** (^20.19.25)
  TypeScript definitions για Node.js APIs

- **@types/react** (19.2.2)
  TypeScript definitions για React library

- **@types/react-dom** (19.2.2)
  TypeScript definitions για React DOM

- **@types/sharp** (^0.32.0)
  TypeScript definitions για Sharp image library

- **baseline-browser-mapping** (^2.9.3)
  Mapping baseline features σε browser support data

- **dotenv** (^17.2.3)
  Φόρτωση environment variables από .env files

- **drizzle-kit** (^0.31.8)
  CLI toolkit για Drizzle ORM migrations και schema

- **eslint** (^9.39.1)
  JavaScript linter για code quality

- **eslint-config-next** (16.0.0)
  ESLint configuration για Next.js projects

- **prettier** (^3.7.4)
  Code formatter για συνεπές style

- **prettier-plugin-tailwindcss** (^0.6.14)
  Ταξινόμηση Tailwind CSS classes με προτεινόμενη σειρά

- **sharp** (^0.34.5)
  High-performance image processing library

- **unist-builder** (3.0.0)
  Δημιουργία unist syntax trees προγραμματιστικά

- **unist-util-visit** (^4.1.2)
  Utility για περιήγηση και επίσκεψη unist tree nodes

---

## Εξαρτήσεις CLI Package (pitsi)

### Production Dependencies

- **@antfu/ni** (^25.0.0)
  Ανίχνευση και χρήση του σωστού package manager αυτόματα

- **@babel/core** (^7.28.0)
  Core JavaScript compiler για syntax transformation

- **@babel/parser** (^7.28.0)
  Parsing JavaScript/TypeScript σε abstract syntax trees

- **@babel/plugin-transform-typescript** (^7.28.0)
  Αφαίρεση TypeScript type annotations από κώδικα

- **@babel/preset-typescript** (^7.27.1)
  Babel preset για compilation TypeScript

- **@dotenvx/dotenvx** (^1.48.4)
  Enhanced dotenv με encryption και multi-environment υποστήριξη

- **@modelcontextprotocol/sdk** (^1.17.2)
  SDK για δημιουργία Model Context Protocol servers για AI

- **browserslist** (^4.26.2)
  Κοινοποίηση target browsers μεταξύ εργαλείων για compatibility

- **commander** (^14.0.0)
  Ολοκληρωμένη λύση για δημιουργία command-line interfaces

- **cosmiconfig** (^9.0.0)
  Αναζήτηση και φόρτωση configuration από πολλές μορφές

- **dedent** (^1.6.0)
  Αφαίρεση leading indentation από template literals

- **deepmerge** (^4.3.1)
  Deep merge objects διατηρώντας nested structures

- **diff** (^8.0.2)
  Υπολογισμός διαφορών μεταξύ text strings

- **execa** (^9.6.0)
  Βελτιωμένο child_process για εκτέλεση shell commands

- **fast-glob** (^3.3.3)
  Γρήγορο file system globbing με pattern matching

- **fs-extra** (^11.3.1)
  Επεκταμένες file system μέθοδοι με promise υποστήριξη

- **fuzzysort** (^3.1.0)
  Γρήγορη fuzzy string αναζήτηση και matching

- **https-proxy-agent** (^7.0.6)
  HTTP(S) proxy agent για network requests

- **kleur** (^4.1.5)
  Γρήγορη terminal string colorization library

- **msw** (^2.10.4)
  Mock Service Worker για API mocking σε tests

- **node-fetch** (^3.3.2)
  Fetch API implementation για Node.js

- **ora** (^8.2.0)
  Κομψό terminal spinner για long-running tasks

- **postcss** (^8.5.6)
  CSS transformation και processing tool

- **prompts** (^2.4.2)
  Ελαφριά διαδραστικά command-line prompts

- **recast** (^0.23.11)
  JavaScript/TypeScript AST transformation διατηρώντας formatting

- **stringify-object** (^5.0.0)
  Stringification objects σε readable JavaScript code

- **ts-morph** (^26.0.0)
  TypeScript compiler wrapper για programmatic AST manipulation

- **tsconfig-paths** (^4.2.0)
  Φόρτωση modules χρησιμοποιώντας TypeScript path mapping

- **zod** (^3.24.1)
  TypeScript-first schema declaration και validation

- **zod-to-json-schema** (^3.24.6)
  Μετατροπή Zod schemas σε JSON Schema format

### Dev Dependencies

- **@types/babel__core** (^7.20.5)
  TypeScript definitions για Babel core

- **@types/fs-extra** (^11.0.4)
  TypeScript definitions για fs-extra

- **@types/prompts** (^2.4.9)
  TypeScript definitions για prompts library

- **@types/stringify-object** (^4.0.5)
  TypeScript definitions για stringify-object

- **rimraf** (^6.0.1)
  Cross-platform directory deletion utility

- **tsup** (^8.5.0)
  Zero-config TypeScript bundler με esbuild

- **type-fest** (^4.41.0)
  Συλλογή essential TypeScript utility types

- **typescript** (^5.9.2)
  TypeScript language και compiler

---

## Σύνοψη

### Σύνολο Εξαρτήσεων ανά Package

- **Root Workspace**: 34 packages
- **V4 Documentation Site**: 93 packages
- **CLI Package (pitsi)**: 38 packages
- **Συνολικά Μοναδικά**: ~140 packages

### Βασική Τεχνολογική Στοίβα

- **Framework**: Next.js 16, React 19
- **Styling**: Tailwind CSS 4, PostCSS
- **UI Primitives**: Radix UI (28 packages)
- **Animation**: GSAP, Motion, Lenis
- **Forms**: React Hook Form, TanStack Form, Zod
- **Data**: TanStack Table, Recharts
- **Βάση Δεδομένων**: Drizzle ORM, PostgreSQL
- **Αυθεντικοποίηση**: Better Auth, Stripe
- **Τεκμηρίωση**: Fumadocs, Shiki
- **Build**: Turborepo, Vite, tsup
- **Testing**: Vitest, MSW
- **CLI**: Commander, Cosmiconfig, Prompts
- **AST**: ts-morph, Babel, Recast
- **AI**: MCP SDK
