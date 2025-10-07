# OpenFramer

A collaborative component library built with Next.js, featuring beautiful, reusable UI components with comprehensive metadata and property definitions for AI-powered development.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The homepage displays all available components. You can browse and preview them in real-time as you make changes.

## Project Structure

```
src/
├── components/
│   ├── hero/
│   │   ├── hero-01.tsx           # Component implementation
│   │   ├── hero-01-props.json    # Component properties definition
│   │   └── hero-01-meta.json     # Design guidelines for LLM
│   ├── features/
│   ├── pricing/
│   └── ... (other component categories)
└── app/
    ├── page.tsx                   # Homepage displaying all components
    └── components/[id]/page.tsx   # Individual component preview page
```

## Contributing

We welcome contributions! Follow these steps to add or modify components:

### Step 1: Modify the Component

**Location:** `src/components/[category]/[component-name].tsx`

**Examples:**
- `src/components/hero/hero-01.tsx`
- `src/components/pricing/pricing-02.tsx`
- `src/components/features/features-03.tsx`

**What to do:**
- Edit the React component's JSX structure, styling, and functionality
- Use Tailwind CSS classes for styling
- Ensure the component is responsive and supports dark mode
- Make sure the component follows accessibility best practices

**How to preview:**
1. Save your changes to the `.tsx` file
2. Open [http://localhost:3000](http://localhost:3000) to see your component on the homepage
3. Navigate to `/components/[id]` (e.g., `/components/hero-01`) for a detailed preview
4. Check that your component looks good and functions correctly

**⚠️ DO NOT MODIFY:**
- Component name (e.g., `Hero01`, `Pricing02`)
- The default export structure

### Step 2: Update Component Properties

**Location:** `src/components/[category]/[component-name]-props.json`

**Example:** `src/components/hero/hero-01-props.json`

**What to do:**
Define all customizable properties of your component using JSON schema format.

**Structure:**
```json
{
  "propertyName": {
    "type": "string | number | boolean | object | array",
    "required": true | false,
    "default": "default value",
    "description": "Description of what this property does",
    "properties": {  // For object types
      "nestedProperty": {
        "type": "string",
        "default": "value"
      }
    }
  }
}
```

**Example:**
```json
{
  "title": {
    "type": "string",
    "required": true,
    "default": "Build amazing experiences with modern design",
    "description": "Main heading text"
  },
  "subtitle": {
    "type": "string",
    "required": false,
    "default": "Create beautiful, responsive websites",
    "description": "Supporting text below the main heading"
  },
  "primaryButton": {
    "type": "object",
    "required": false,
    "properties": {
      "text": { "type": "string", "default": "Get started" },
      "href": { "type": "string", "default": "#" }
    },
    "description": "Primary call-to-action button"
  }
}
```

**Tips:**
- Include all props that users might want to customize
- Provide clear, descriptive field names
- Set sensible default values
- Write helpful descriptions

**⚠️ DO NOT MODIFY:**
- The `installation` property (if present)
- The `usage` property (if present)

### Step 3: Configure Design Guidelines (Meta)

**Location:** `src/components/[category]/[component-name]-meta.json`

**Example:** `src/components/hero/hero-01-meta.json`

**What to do:**
Define design guidelines and constraints that help LLMs understand how to properly use and adapt your component.

**Structure:**
```json
{
  "ratio": ["16:9", "21:9", "full-width", "auto"],
  "color": {
    "primary": ["#0066FF", "#6366F1", "#8B5CF6", "#EC4899"],
    "secondary": ["#64748B", "#94A3B8"],
    "modes": {
      "light": {
        "background": "#FFFFFF",
        "text": "#0F172A",
        "accent": "#F1F5F9"
      },
      "dark": {
        "background": "#0F172A",
        "text": "#F8FAFC",
        "accent": "#1E293B"
      }
    }
  },
  "font": {
    "heading": ["GT Walsheim Bold", "Inter Bold", "System Bold"],
    "subheading": ["GT Walsheim Medium", "Inter Medium"],
    "body": ["GT Walsheim Regular", "Inter Regular"]
  },
  "motion": "Description of animation and transition guidelines",
  "size": {
    "fontSize": {
      "heading": { "min": "28px", "max": "72px" },
      "subheading": { "min": "18px", "max": "24px" },
      "body": { "min": "14px", "max": "18px" }
    },
    "dimensions": {
      "height": { "min": "400px", "max": "100vh" },
      "contentWidth": { "min": "320px", "max": "1280px" }
    },
    "spacing": {
      "padding": { "min": "24px", "max": "96px" },
      "gap": { "min": "16px", "max": "48px" }
    }
  }
}
```

**Field Descriptions:**

- **`ratio`**: Recommended aspect ratios for the component
  - Examples: `["16:9", "21:9", "full-width", "auto", "square"]`
  
- **`color`**: Color palette and theme configuration
  - `primary`: Accent and brand colors
  - `secondary`: Supporting colors
  - `modes.light`: Light theme color tokens
  - `modes.dark`: Dark theme color tokens

- **`font`**: Typography guidelines
  - Specify font families for different text hierarchies
  - List fallback fonts in order of preference

- **`motion`**: Animation and interaction guidelines
  - Describe entrance/exit animations
  - Hover and focus states
  - Transition timing and easing

- **`size`**: Size constraints and responsive behavior
  - `fontSize`: Text size ranges for different screen sizes
  - `dimensions`: Component height and width constraints
  - `spacing`: Padding and gap values

**Tips:**
- Be specific about size constraints (min/max values)
- Include both light and dark mode color specifications
- Describe motion behavior in clear, actionable terms
- Consider mobile, tablet, and desktop viewports
- Think about how the component should scale and adapt

**⚠️ DO NOT MODIFY:**
- The `installation` property (if present)
- The `usage` property (if present)
- Component name references

### Step 4: Testing Your Changes

1. **Visual Check**: View your component on the homepage (`http://localhost:3000`)
2. **Detailed Preview**: Navigate to `/components/[component-id]` for full-screen preview
3. **Responsive Testing**: Test on different screen sizes
4. **Dark Mode**: Toggle dark mode to ensure proper styling
5. **Props Validation**: Verify that all props in `props.json` match your component implementation
6. **Meta Accuracy**: Confirm that `meta.json` guidelines reflect the actual component design

### Submission Guidelines

When submitting a pull request:

1. Ensure all three files are updated:
   - `[component-name].tsx`
   - `[component-name]-props.json`
   - `[component-name]-meta.json`

2. Test your changes thoroughly

3. Follow the existing naming conventions:
   - Component files: `kebab-case` (e.g., `hero-01.tsx`)
   - Component names: `PascalCase` (e.g., `Hero01`)

4. Provide clear commit messages describing your changes

## Available Component Categories

- **Hero** - Header sections with primary calls-to-action
- **Features** - Feature showcases and benefit highlights
- **Pricing** - Pricing tables and plan comparisons
- **Testimonials** - Customer reviews and social proof
- **CTA** - Call-to-action sections
- **FAQ** - Frequently asked questions
- **Footer** - Site footer navigation and information
- **Login/Signup** - Authentication forms
- **Team** - Team member showcases
- **Stats** - Statistics and metrics displays
- **Logo Cloud** - Partner and client logo displays
- **Content** - General content sections
- **Integrations** - Integration showcases
- **Comparator** - Comparison tables

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

## License

[Your License Here]
