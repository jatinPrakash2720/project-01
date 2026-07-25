# MurliMadhav Landing Page

A beautiful, modern landing page for MurliMadhav - a fresh dairy delivery service.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Mantine Provider
│   ├── page.tsx            # Main landing page component
│   └── globals.css         # Global styles and theme
└── components/
    ├── HeroSection.tsx           # Hero section with title and CTA buttons
    ├── FeaturesSection.tsx       # Features showcase section
    ├── AnonymousMessageSection.tsx  # Anonymous feedback section
    ├── ContactFormModal.tsx      # Contact form modal dialog
    ├── SuccessModal.tsx          # Success confirmation modal
    └── Footer.tsx                # Footer section
```

## Components Overview

### HeroSection
- Large gradient background (#FFF5F1 → #FFE8DC)
- Main headline: "Fresh Dairy, Delivered Daily"
- Subheading with value proposition
- "Contact Us" and "Learn More" buttons
- Props: `onContactClick` - callback when Contact Us is clicked

### FeaturesSection
- 4 feature cards with icons:
  1. Fresh & Trusted
  2. Convenient Delivery
  3. Scheduled Planning
  4. Multiple Products
- Icons with orange backgrounds
- Responsive grid layout

### AnonymousMessageSection
- Large textarea for anonymous feedback
- "Send Message" button (disabled until text is entered)
- Shows success modal on submission
- No data persistence - for UI/UX demonstration only

### ContactFormModal
- Form fields:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (required)
  - Profession (dropdown)
  - Message (optional textarea)
- Cancel and Send Message buttons
- Shows success modal on submission
- Form validation on submit button

### SuccessModal
- Animated checkmark icon (green background)
- Success message title
- Custom message text
- Close button
- Smooth scale-in animation

### Footer
- Dark background (#1a1a1a)
- Company description
- Copyright information
- Privacy Policy and Terms of Service links

## Design System

### Colors
- **Primary**: #E8621B (Warm Orange)
- **Primary Light**: #FFE8DC (Light Peach)
- **Background**: #ffffff (White)
- **Text**: #1a1a1a (Dark Gray)
- **Secondary**: #555 to #999 (Text variations)
- **Dark Footer**: #1a1a1a

### Typography
- Font Family: -apple-system, BlinkMacSystemFont, 'Segoe UI', etc.
- Uses Geist Sans from Next.js
- Multiple font weights for hierarchy

### Spacing
- Large padding: 80px top/bottom for sections
- Medium gaps: 20px+ for components
- Uses Mantine's gap utilities

## Features

✅ No API calls or data fetching
✅ No database persistence
✅ Pure UI/UX demonstration
✅ Responsive design
✅ Smooth modal interactions
✅ Success confirmations with animations
✅ Anonymous feedback capability
✅ Contact form with validation

## How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Built With

- **Next.js 16** - React framework
- **Mantine UI** - Component library
- **Emotion** - CSS-in-JS
- **Tabler Icons** - Icon set
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility styles

## Note

This is a design-focused landing page without backend functionality. All form submissions and messages simply trigger success modals without saving data anywhere.
