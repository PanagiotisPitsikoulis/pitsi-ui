# Unique Template Blocks Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement 294 unique block layouts across 21 templates (14 block types each), ensuring no two templates share identical layouts.

**Architecture:** Each template gets a unique layout pattern for each block type. Layouts vary in grid structure, alignment, card styles, image placement, and interactive elements. All blocks follow the design principles in `.claude/context/block-design-principles.md`.

**Tech Stack:** React, Next.js, Tailwind CSS, next/image, useBlockContext hook

---

## Templates (21 total, excluding service-plants reference)

| ID | Template | Theme Category | Image Count |
|----|----------|----------------|-------------|
| 1 | ai | Tech/AI | 13 |
| 2 | ai-sci-fi | Tech/Sci-Fi | 25 |
| 3 | art | Creative | 11 |
| 4 | boat | Luxury | 8 |
| 5 | food-juice | Food/Beverage | 9 |
| 6 | food-pizza | Food/Restaurant | 4 |
| 7 | product-coffee | Product/Beverage | - |
| 8 | product-plants | Product/Nature | - |
| 9 | product-scifi | Product/Tech | 8 |
| 10 | product-skincare | Product/Beauty | 9 |
| 11 | service-barber | Service/Grooming | 7 |
| 12 | service-coffee-shop | Service/Cafe | 8 |
| 13 | service-fashion | Service/Fashion | 9 |
| 14 | service-gym | Service/Fitness | 10 |
| 15 | service-hospitality | Service/Hotel | 12 |
| 16 | service-makeup | Service/Beauty | 6 |
| 17 | service-marketing | Service/Business | 6 |
| 18 | service-pet-sitting | Service/Pets | 8 |
| 19 | service-psychologist | Service/Health | 6 |
| 20 | service-real-estate | Service/Property | 8 |
| 21 | service-tattoo | Service/Art | 6 |

---

## Block Types & Layout Matrix

### Block Type 1: Features (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Bento grid: 1 large left + 2 stacked right + 3 bottom row |
| ai-sci-fi | Hexagonal grid with glowing borders |
| art | Masonry gallery-style with overlapping cards |
| boat | Horizontal scroll cards with parallax |
| food-juice | Circular icon wheel with center description |
| food-pizza | Stacked full-width horizontal cards |
| product-coffee | Left-aligned vertical list with large icons |
| product-plants | Alternating left/right image+text sections |
| product-scifi | Floating cards on gradient with depth |
| product-skincare | 2x2 grid with center overlap badge |
| service-barber | Timeline numbered vertical |
| service-coffee-shop | Tab-based with icon pills |
| service-fashion | Magazine: large hero feature + small grid |
| service-gym | Stats-integrated with progress bars |
| service-hospitality | Side-by-side comparison table |
| service-makeup | Icon-only grid with hover reveal |
| service-marketing | Accordion expandable list |
| service-pet-sitting | Card carousel with dots |
| service-psychologist | Minimal single column cards |
| service-real-estate | 4-column compact grid |
| service-tattoo | Offset/staggered asymmetric |

### Block Type 2: Pricing (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Comparison table with checkmarks |
| ai-sci-fi | Holographic cards with glow effect |
| art | Artistic stacked cards with brush stroke borders |
| boat | Single luxury tier + add-ons grid |
| food-juice | Horizontal tier slider |
| food-pizza | Menu-style list with prices right-aligned |
| product-coffee | Subscription tiers vertical accordion |
| product-plants | Bundle packages bento grid |
| product-scifi | Futuristic tier progression timeline |
| product-skincare | Routine packages side-by-side |
| service-barber | Service menu classic list |
| service-coffee-shop | Chalkboard-style menu |
| service-fashion | Lookbook pricing gallery |
| service-gym | Membership comparison cards |
| service-hospitality | Room tier cards with images |
| service-makeup | Package cards with included items |
| service-marketing | Enterprise focus single + contact |
| service-pet-sitting | Service calendar grid |
| service-psychologist | Session packages minimal |
| service-real-estate | Investment tier cards |
| service-tattoo | Size-based pricing chart |

### Block Type 3: Testimonials (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Metrics-focused with stats overlay |
| ai-sci-fi | Terminal/console style quotes |
| art | Polaroid photo cards scattered |
| boat | Elegant single quote carousel |
| food-juice | Speech bubble grid |
| food-pizza | Review cards with food images |
| product-coffee | Coffee stain aesthetic cards |
| product-plants | Leaf-shaped card borders |
| product-scifi | Hologram quote display |
| product-skincare | Before/after with testimonial |
| service-barber | Classic newspaper clippings style |
| service-coffee-shop | Handwritten note cards |
| service-fashion | Magazine quote pullouts |
| service-gym | Transformation cards with metrics |
| service-hospitality | Guest book style entries |
| service-makeup | Glamour cards with large photos |
| service-marketing | Case study mini cards |
| service-pet-sitting | Pet photo + owner quote |
| service-psychologist | Gentle minimal blockquotes |
| service-real-estate | Property sold success stories |
| service-tattoo | Portfolio + client quote |

### Block Type 4: CTA (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Split screen: text left, demo right |
| ai-sci-fi | Full-width gradient with floating elements |
| art | Canvas-style with paint splatter accents |
| boat | Scenic image background full bleed |
| food-juice | Vibrant split diagonal |
| food-pizza | Order now box with image peek |
| product-coffee | Cozy image + overlapping card |
| product-plants | Nature image with floating CTA card |
| product-scifi | Futuristic interface mockup |
| product-skincare | Clean minimal centered |
| service-barber | Vintage sign style |
| service-coffee-shop | Chalkboard menu invite |
| service-fashion | Runway image + minimal text |
| service-gym | Bold stats + action buttons |
| service-hospitality | Luxury room image + booking |
| service-makeup | Glamour gradient split |
| service-marketing | Growth chart + contact form |
| service-pet-sitting | Cute pet image + book now |
| service-psychologist | Calming gradient minimal |
| service-real-estate | Property showcase + inquiry |
| service-tattoo | Portfolio showcase + booking |

### Block Type 5: FAQ (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Chat bubble conversation style |
| ai-sci-fi | Terminal command/response |
| art | Sketchbook margin notes |
| boat | Nautical card deck |
| food-juice | Fruit-themed numbered list |
| food-pizza | Menu section accordions |
| product-coffee | Coffee cup steam accordions |
| product-plants | Leaf-tabbed sections |
| product-scifi | Data readout panels |
| product-skincare | Clean numbered dropdowns |
| service-barber | Classic Q&A list |
| service-coffee-shop | Blackboard sections |
| service-fashion | Magazine column style |
| service-gym | Workout card flip style |
| service-hospitality | Concierge desk cards |
| service-makeup | Beauty tips accordion |
| service-marketing | Knowledge base grid |
| service-pet-sitting | Paw print markers |
| service-psychologist | Gentle accordion |
| service-real-estate | Property FAQ tabs |
| service-tattoo | Flash sheet Q&A |

### Block Type 6: Contact (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Chat interface with AI assistant |
| ai-sci-fi | Holographic contact terminal |
| art | Postcard/letter style form |
| boat | Nautical map + marina contact |
| food-juice | Fresh order form style |
| food-pizza | Delivery order interface |
| product-coffee | Café counter inquiry |
| product-plants | Greenhouse visit scheduler |
| product-scifi | Comm link interface |
| product-skincare | Consultation booking |
| service-barber | Appointment book classic |
| service-coffee-shop | Café reservation |
| service-fashion | Showroom appointment |
| service-gym | Trial class booking |
| service-hospitality | Concierge contact |
| service-makeup | Glam session booking |
| service-marketing | Strategy call scheduler |
| service-pet-sitting | Pet profile + booking |
| service-psychologist | Confidential inquiry |
| service-real-estate | Property viewing request |
| service-tattoo | Design consultation |

### Block Type 7: Newsletter (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Minimal input with AI chip badge |
| ai-sci-fi | Data stream subscription |
| art | Postcard signup |
| boat | Nautical flag banner |
| food-juice | Fresh updates splash |
| food-pizza | Menu mailer signup |
| product-coffee | Morning brew subscription |
| product-plants | Grow with us garden theme |
| product-scifi | Transmission signup |
| product-skincare | Beauty insider card |
| service-barber | Club membership style |
| service-coffee-shop | Loyalty card signup |
| service-fashion | VIP access pass |
| service-gym | Fitness tips signup |
| service-hospitality | Guest privileges |
| service-makeup | Beauty box teaser |
| service-marketing | Growth insights |
| service-pet-sitting | Pet tips newsletter |
| service-psychologist | Wellness journal |
| service-real-estate | Market updates |
| service-tattoo | Flash drops alerts |

### Block Type 8: Blog (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Research paper cards |
| ai-sci-fi | Data log entries |
| art | Gallery exhibition cards |
| boat | Captain's log entries |
| food-juice | Recipe cards grid |
| food-pizza | Food blog magazine |
| product-coffee | Brew guide articles |
| product-plants | Care guide cards |
| product-scifi | Tech specs articles |
| product-skincare | Skincare routine posts |
| service-barber | Style guide articles |
| service-coffee-shop | Café stories |
| service-fashion | Lookbook posts |
| service-gym | Workout guides |
| service-hospitality | Travel stories |
| service-makeup | Tutorial posts |
| service-marketing | Case study cards |
| service-pet-sitting | Pet care tips |
| service-psychologist | Wellness articles |
| service-real-estate | Market insights |
| service-tattoo | Artist spotlights |

### Block Type 9: Gallery (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Data visualization grid |
| ai-sci-fi | Holographic showcase |
| art | Museum wall arrangement |
| boat | Porthole circular frames |
| food-juice | Ingredient showcase |
| food-pizza | Menu item gallery |
| product-coffee | Bean origin gallery |
| product-plants | Greenhouse showcase |
| product-scifi | Product lineup |
| product-skincare | Product flatlay |
| service-barber | Style portfolio |
| service-coffee-shop | Café atmosphere |
| service-fashion | Runway gallery |
| service-gym | Facility tour |
| service-hospitality | Room showcase |
| service-makeup | Before/after grid |
| service-marketing | Portfolio showcase |
| service-pet-sitting | Happy pets grid |
| service-psychologist | Peaceful spaces |
| service-real-estate | Property gallery |
| service-tattoo | Ink portfolio |

### Block Type 10: Team (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Neural network node cards |
| ai-sci-fi | Crew roster interface |
| art | Artist collective grid |
| boat | Ship crew cards |
| food-juice | Team ingredient cards |
| food-pizza | Kitchen brigade |
| product-coffee | Roaster profiles |
| product-plants | Botanist team |
| product-scifi | Engineering crew |
| product-skincare | Dermatology experts |
| service-barber | Barber chair cards |
| service-coffee-shop | Barista profiles |
| service-fashion | Design team |
| service-gym | Trainer cards |
| service-hospitality | Staff directory |
| service-makeup | Artist roster |
| service-marketing | Agency team |
| service-pet-sitting | Caretaker profiles |
| service-psychologist | Therapist cards |
| service-real-estate | Agent profiles |
| service-tattoo | Artist portfolios |

### Block Type 11: Stats (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Metric dashboards |
| ai-sci-fi | Holographic counters |
| art | Gallery numbers |
| boat | Nautical gauges |
| food-juice | Nutrition facts style |
| food-pizza | Order counter style |
| product-coffee | Brewing stats |
| product-plants | Growth metrics |
| product-scifi | System specs |
| product-skincare | Clinical results |
| service-barber | Cuts counter |
| service-coffee-shop | Cups served |
| service-fashion | Runway stats |
| service-gym | Workout metrics |
| service-hospitality | Guest satisfaction |
| service-makeup | Looks created |
| service-marketing | Growth numbers |
| service-pet-sitting | Happy pets count |
| service-psychologist | Sessions stats |
| service-real-estate | Sales figures |
| service-tattoo | Ink stats |

### Block Type 12: Logos (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Tech partner badges |
| ai-sci-fi | Alliance insignias |
| art | Gallery partners |
| boat | Marina partners |
| food-juice | Organic certifications |
| food-pizza | Supplier badges |
| product-coffee | Origin partners |
| product-plants | Nursery partners |
| product-scifi | Tech alliances |
| product-skincare | Derma certifications |
| service-barber | Trade associations |
| service-coffee-shop | Supplier logos |
| service-fashion | Brand collaborations |
| service-gym | Fitness partners |
| service-hospitality | Travel partners |
| service-makeup | Brand partners |
| service-marketing | Client logos |
| service-pet-sitting | Vet partners |
| service-psychologist | Accreditations |
| service-real-estate | MLS partners |
| service-tattoo | Ink suppliers |

### Block Type 13: Header (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Minimal tech nav |
| ai-sci-fi | HUD interface nav |
| art | Gallery-style minimal |
| boat | Nautical compass nav |
| food-juice | Fresh colorful nav |
| food-pizza | Menu-style nav |
| product-coffee | Warm minimal nav |
| product-plants | Organic curved nav |
| product-scifi | Futuristic panel |
| product-skincare | Clean beauty nav |
| service-barber | Vintage sign nav |
| service-coffee-shop | Chalkboard nav |
| service-fashion | Sleek fashion nav |
| service-gym | Bold fitness nav |
| service-hospitality | Elegant hotel nav |
| service-makeup | Glamour nav |
| service-marketing | Professional nav |
| service-pet-sitting | Playful pet nav |
| service-psychologist | Calming minimal |
| service-real-estate | Professional clean |
| service-tattoo | Edgy bold nav |

### Block Type 14: Footer (21 unique layouts)

| Template | Layout Pattern |
|----------|----------------|
| ai | Minimal tech footer |
| ai-sci-fi | Terminal interface |
| art | Gallery credits |
| boat | Nautical chart footer |
| food-juice | Fresh ingredients footer |
| food-pizza | Menu board footer |
| product-coffee | Warm cafe footer |
| product-plants | Garden path footer |
| product-scifi | System status footer |
| product-skincare | Clean beauty footer |
| service-barber | Vintage barbershop |
| service-coffee-shop | Cafe chalkboard |
| service-fashion | Magazine credits |
| service-gym | Workout schedule |
| service-hospitality | Concierge footer |
| service-makeup | Glamour credits |
| service-marketing | Business card style |
| service-pet-sitting | Paw print trail |
| service-psychologist | Gentle closing |
| service-real-estate | Property links |
| service-tattoo | Flash sheet footer |

---

## Design Principles (Reference)

All blocks must follow `.claude/context/block-design-principles.md`:

```
| Element | Pattern |
|---------|---------|
| Borders | border-border |
| Badge BG | bg-muted/50 |
| Hover | hover:bg-muted |
| Focus | focus:ring-1 focus:ring-ring |
| Cards | useBlockContext() → cardBg |
| Icons | text-primary |
| Icon BG | bg-muted/50 |
```

---

## Implementation Tasks

### Phase 1: New Placeholder Blocks (160 blocks)

Implement blocks that are currently placeholders (Newsletter, Blog, Gallery, Team, Stats, Logos, Header, Footer).

#### Task 1.1: Newsletter Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/newsletter/*/newsletter.tsx`

Each newsletter block follows its unique layout pattern from the matrix above.

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 newsletter blocks with unique layouts
**Step 3:** Verify exports in index.ts

#### Task 1.2: Blog Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/blog/*/blog.tsx`

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 blog blocks with unique layouts using placeholder images
**Step 3:** Verify exports

#### Task 1.3: Gallery Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/gallery/*/gallery.tsx`

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 gallery blocks with unique grid layouts
**Step 3:** Use template-specific images from `/public/placeholders/blocks/{template}/`

#### Task 1.4: Team Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/team/*/team.tsx`

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 team blocks with unique card arrangements
**Step 3:** Use template-specific images

#### Task 1.5: Stats Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/stats/*/stats.tsx`

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 stats blocks with unique number displays

#### Task 1.6: Logos Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/logos/*/logos.tsx`

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 logos blocks with unique arrangements

#### Task 1.7: Header Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/header/*/header.tsx`

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 header blocks with unique navigation styles

#### Task 1.8: Footer Blocks (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/footer/*/footer.tsx`

**Step 1:** Read service-plants reference
**Step 2:** Implement all 21 footer blocks with unique link arrangements

---

### Phase 2: Redesign Existing Blocks for Variety (126 blocks)

Replace identical layouts with unique designs per template.

#### Task 2.1: Features Blocks Redesign (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/features/*/features.tsx`

Current state: All 21 have identical 3-column grid layout.
Target: Each gets unique layout from matrix above.

**Step 1:** Read current implementations
**Step 2:** Redesign each with unique layout pattern
**Step 3:** Maintain theme-appropriate content

#### Task 2.2: Pricing Blocks Redesign (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/pricing/*/pricing.tsx`

**Step 1:** Read current implementations
**Step 2:** Redesign with unique layouts

#### Task 2.3: Testimonials Blocks Redesign (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/testimonials/*/testimonials.tsx`

**Step 1:** Read current implementations
**Step 2:** Redesign with unique layouts

#### Task 2.4: CTA Blocks Redesign (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/cta/*/cta.tsx`

**Step 1:** Read current implementations
**Step 2:** Redesign with unique layouts

#### Task 2.5: FAQ Blocks Redesign (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/faq/*/faq.tsx`

**Step 1:** Read current implementations
**Step 2:** Redesign with unique layouts

#### Task 2.6: Contact Blocks Redesign (21 templates)

**Files:** `apps/v4/app/templates/_demo-blocks/contact/*/contact.tsx`

**Step 1:** Read current implementations
**Step 2:** Redesign with unique layouts

---

## Execution Strategy

Given 294 blocks total, use parallel agents grouped by block type:

**Batch 1 (New Blocks - 8 agents):**
- Agent 1: Newsletter (21 blocks)
- Agent 2: Blog (21 blocks)
- Agent 3: Gallery (21 blocks)
- Agent 4: Team (21 blocks)
- Agent 5: Stats (21 blocks)
- Agent 6: Logos (21 blocks)
- Agent 7: Header (21 blocks)
- Agent 8: Footer (21 blocks)

**Batch 2 (Redesigns - 6 agents):**
- Agent 9: Features redesign (21 blocks)
- Agent 10: Pricing redesign (21 blocks)
- Agent 11: Testimonials redesign (21 blocks)
- Agent 12: CTA redesign (21 blocks)
- Agent 13: FAQ redesign (21 blocks)
- Agent 14: Contact redesign (21 blocks)

---

## Image Paths Reference

Each template has images at `/placeholders/blocks/{template-name}/*.webp`

| Template | Images Available |
|----------|-----------------|
| ai | 1-13.webp |
| ai-sci-fi | 1-25.webp |
| art | 1-11.webp |
| boat | 1-8.webp |
| food-juice | 1-9.webp |
| food-pizza | 1-4.webp |
| product-scifi | 1-8.webp |
| product-skincare | 1-9.webp |
| service-barber | 1-7.webp |
| service-coffee-shop | 1-8.webp |
| service-fashion | 1-9.webp |
| service-gym | 1-10.webp |
| service-hospitality | 1-12.webp |
| service-makeup | 1-6.webp |
| service-marketing | 1-6.webp |
| service-pet-sitting | 1-8.webp |
| service-plants | 1-9.webp |
| service-psychologist | 1-6.webp |
| service-real-estate | 1-8.webp |
| service-tattoo | 1-6.webp |

---

## Verification

After implementation:
1. Run `bun run v4:dev` to start dev server
2. Navigate to each template page
3. Verify all blocks render with unique layouts
4. Check responsive behavior on mobile/tablet
5. Verify dark mode compatibility
