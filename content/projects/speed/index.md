---
title: "SPEED - 'Software Practice Emperical Evidence' Database"
date: 2023-07-01
summary: "Next.js app deployed on Vercel to demonstrate authorisation for different account levels."
tags:
  - Web
tech_stack:
  - Next
  - React
  - Express
  - Node.js
  - MongoDB
  - Vercel
links:
  - type: github
    url: https://github.com/Ithrendrial/SPEED
    label: Code
  # - type: live
  #   url: https://weathernow-demo.netlify.app
  #   label: Demo
featured: true
status: null
role: "Developer and Scrum Master"
duration: "6 months"
team_size: 3
highlights:
  - ""
---

A modern, intuitive task management tool built for remote teams. Features real-time collaboration, customizable workflows, and beautiful UI.

## Overview

TaskFlow was born out of frustration with existing project management tools being either too complex or lacking essential features. I built a solution that's powerful yet simple to use.

## Key Features

### Core Functionality
- **Kanban Boards** - Drag-and-drop interface for visual task management
- **Real-Time Sync** - See changes instantly as team members update tasks
- **Multiple Views** - Switch between Kanban, List, and Calendar views
- **Task Details** - Rich descriptions, attachments, comments, and checklists
- **Labels & Filters** - Organize and find tasks quickly

### Collaboration
- **Team Workspaces** - Separate spaces for different projects/teams
- **@Mentions** - Tag team members in comments for notifications
- **Activity Feed** - Track all changes and updates
- **Permissions** - Role-based access control (admin, member, viewer)

### Productivity
- **Keyboard Shortcuts** - Power user features for faster navigation
- **Templates** - Reusable board templates for common workflows
- **Due Dates & Reminders** - Never miss a deadline
- **Time Tracking** - Built-in timer for task duration tracking

## Technical Implementation

### Real-Time Features
Used WebSockets (Socket.io) for instant updates across all connected clients. Implemented optimistic UI updates for snappy user experience even before server confirmation.

### Drag & Drop
Built custom drag-and-drop using react-beautiful-dnd with smooth animations and mobile touch support.

### Performance
- Implemented virtual scrolling for boards with 1000+ tasks
- Optimized database queries with proper indexing
- Used Redis for session storage and caching
- Image optimization with Next.js Image component

### Authentication
- Secure auth with NextAuth.js
- Support for email/password and OAuth (Google, GitHub)
- JWT tokens with automatic refresh

## Architecture

Built as a modern monolith with Next.js API routes:

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Next.js    │────▶│   API Routes │────▶│ PostgreSQL  │
│  (React)    │     │  (REST/WS)   │     │  + Prisma   │
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │
       │             ┌──────▼───────┐
       └────────────▶│  Socket.io   │
                     │  (Real-Time) │
                     └──────────────┘
```

## Challenges Solved

### Real-Time Conflicts
**Problem**: Multiple users editing same task simultaneously

**Solution**: Implemented operational transformation (OT) for conflict resolution and last-write-wins strategy with conflict notifications

### Mobile Performance
**Problem**: Drag-and-drop laggy on mobile devices

**Solution**: Optimized touch handlers and reduced re-renders using React.memo and useMemo

### Scale
**Problem**: Growing user base causing performance issues

**Solution**: Added Redis caching layer and optimized database queries, reducing response time by 65%

## Results

- 📈 **Users**: 2000+ active users within 3 months
- ⭐ **Product Hunt**: Featured and received 200+ upvotes
- 🚀 **Performance**: Sub-100ms API response times
- 💯 **Uptime**: 99.8% uptime since launch
- 📱 **Mobile**: 40% of traffic from mobile devices

## Tech Stack

**Frontend**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Beautiful DnD

**Backend**
- Next.js API Routes
- Prisma ORM
- PostgreSQL
- Socket.io for WebSockets
- NextAuth.js for authentication

**Infrastructure**
- Vercel for hosting
- Supabase for PostgreSQL
- Redis Cloud for caching
- AWS S3 for file storage