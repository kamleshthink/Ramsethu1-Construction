# EBC Limited - Infrastructure Company Website

## Overview

This is a comprehensive React-based website for EBC Limited, India's leading infrastructure conglomerate. The application showcases the company's 4+ decades of excellence in construction and infrastructure development across various sectors including buildings, transportation, water & environment, railways, irrigation, and mining. Features include a video header, animated statistics, enhanced UI/UX, YouTube achievement videos, and annual reports section.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state, React Hook Form for form management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions
- **Development**: Hot module replacement with Vite middleware

### Key Components

#### Pages Structure
- **Home** (`/`) - Hero section with company overview and statistics
- **About** (`/about`) - Company history and legacy
- **Expertise** (`/expertise`) - Detailed breakdown of service areas
- **Commitment** (`/commitment`) - Mission, vision, and ESG initiatives
- **Investors** (`/investors`) - Financial information and reports
- **Landmarks** (`/landmarks`) - Showcase of major projects
- **Media** (`/media`) - News, videos, and press releases
- **Human Capital** (`/human-capital`) - Leadership team and careers
- **Contact** (`/contact`) - Contact forms and office locations

#### UI Components
- **Reusable Cards**: ExpertiseCard, ProjectCard, LeadershipCard
- **Interactive Elements**: StatisticsCounter with scroll-triggered animations
- **Layout Components**: Header with navigation, Footer with links
- **Form Components**: Contact and job application forms with validation

#### Shared Components
- **shadcn/ui**: Comprehensive component library including buttons, forms, cards, dialogs, and more
- **Custom Hooks**: Mobile detection, toast notifications, scroll animations
- **Utility Functions**: Class name merging, form validation schemas

## Data Flow

### Client-Side Flow
1. User navigates through pages using Wouter router
2. React Query manages API calls and caching
3. Forms use React Hook Form with Zod validation
4. Animations trigger on scroll using Intersection Observer
5. Toast notifications provide user feedback

### Server-Side Flow
1. Express server handles API routes (`/api/*`)
2. Form submissions are validated using Zod schemas
3. Contact and job application data is processed
4. Static assets served in production, Vite middleware in development

### Database Schema
- **Users table**: Basic user management structure
- **Extensible**: Schema designed to accommodate additional entities (projects, news, etc.)

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Form Handling**: React Hook Form, Hookform Resolvers
- **Data Fetching**: TanStack React Query
- **Styling**: Tailwind CSS, Class Variance Authority
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod schema validation
- **Animations**: Framer Motion (referenced in content)

### Development Dependencies
- **Build Tools**: Vite, TypeScript, ESBuild
- **Development**: TSX for TypeScript execution
- **Replit Integration**: Runtime error overlay and cartographer

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: TSX runs server with hot reloading
- **Production**: Node.js runs bundled server code
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Deployment Commands
- `npm run dev` - Development server with hot reloading
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Apply database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- July 06, 2025 - Enhanced homepage with video header featuring high-quality project achievement videos
- July 06, 2025 - Added animated statistics counters that activate on scroll
- July 06, 2025 - Enhanced UI/UX for expertise, project showcase, strength, and leadership sections with modern animations
- July 06, 2025 - Added YouTube achievement videos section showcasing engineering excellence
- July 06, 2025 - Implemented annual reports section with horizontal scrolling for 10 reports
- July 06, 2025 - Complete company rebranding from NCC Limited to EBC Limited
- July 06, 2025 - Fixed mobile navigation and HTML nesting issues
- July 06, 2025 - Enhanced CSS animations including fade-in, floating, and hover effects
- July 06, 2025 - Improved responsive design and smooth scrolling throughout

## Changelog

- July 06, 2025. Initial setup and comprehensive enhancement