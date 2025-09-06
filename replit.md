# Portfolio Website

## Overview

This is a modern, interactive portfolio website for Narasimha Rao Baddika, an aspiring Java Full Stack Developer. The application showcases professional experience, skills, projects, and provides a contact form for potential employers or clients. Built with React and Express.js, it features a dark-themed design with smooth animations, particle effects, and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark color scheme with blue and cyan accents
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design system
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a component-based architecture with sections for hero, about, skills, projects, experience, and contact. Custom hooks handle animations (typing effects, scroll reveals, counter animations) and responsive behavior.

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for contact form submission and data retrieval
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes

The backend uses a storage interface pattern, currently implemented with in-memory storage but designed to easily swap in database implementations.

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Tables**: Users table (id, username, password) and contacts table (id, name, email, subject, message, createdAt)
- **Validation**: Zod schemas for runtime type validation on both client and server
- **Migrations**: Drizzle Kit for database schema management

The schema is defined in a shared directory for use across both frontend and backend.

### Development Environment
- **Dev Server**: Vite development server with Hot Module Replacement
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESM modules throughout the codebase
- **Build Process**: Separate builds for frontend (Vite) and backend (esbuild)

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for components like dialogs, dropdowns, and form controls
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe component variants for consistent styling
- **lucide-react**: Modern icon library for UI elements

### Data and State Management
- **@tanstack/react-query**: Server state management with caching, synchronization, and background updates
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for cloud deployment
- **zod**: Schema validation library for runtime type checking

### Form Handling
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for integration with Zod schemas

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for better code quality
- **@replit/vite-plugin-***: Replit-specific plugins for development environment integration

### Animation and Interactions
- **embla-carousel-react**: Touch-friendly carousel component
- **date-fns**: Date utility library for formatting and manipulation

The application is designed to be easily deployable on platforms like Replit, Vercel, or similar hosting services, with environment-based configuration for database connections and API endpoints.