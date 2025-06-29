# Class Catalog

A simple web application for browsing and managing class information, built to showcase modern JavaScript skills and database integration.

## Project Overview

I built this small project to demonstrate my JavaScript proficiency and showcase modern web development practices. The application serves as a class catalog where users can browse available classes and view detailed information about each class and its instructor.

**Why I built this:** To showcase my ability to create clean, maintainable JavaScript code, integrate with external databases, and implement responsive web design without relying on hardcoded data.

**How I built this:** Using vanilla JavaScript with ES6+ features, I connected to a Supabase PostgreSQL database for dynamic data retrieval. The application uses modern async/await patterns, proper error handling, and modular code structure. All data is fetched dynamically from the database - no hardcoded content.

**What I built:** A responsive web application with three main pages: a home page displaying all classes, individual class detail pages, and teacher information pages. The app features clean navigation, dynamic content loading, and a modern user interface.

## Features

- Browse available classes
- View class details
- Teacher information
- Responsive design
- Dynamic data from Supabase database
- No hardcoded content

## GitHub Actions - Supabase Keep Alive

This project includes an automated GitHub Actions workflow that runs every 5 days to keep the Supabase database active. 

**Why it's needed:** Supabase pauses projects that are inactive for more than 7 days. Since this is a small and not ongoing project that may not receive regular traffic, the cron job ensures the database remains active and accessible.

**How it works:** The workflow (`supabase-ping.yml`) makes a simple database query every 5 days, preventing the project from being paused due to inactivity. This ensures the live demo remains functional for potential employers or collaborators.

## Pages

- **Home** (`index.html`) - Main catalog page displaying all classes
- **Class Details** (`class.html`) - Detailed view of individual classes
- **Teacher Info** (`teacher.html`) - Information about teachers

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Live Site
The application is deployed at: `https://tonyg666.github.io/example_catalog/`

### Manual Deployment
If you need to deploy manually:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set the source to "GitHub Actions"


## File Structure

```
catalog/
├── public/           # Main application files
│   ├── index.html    # Home page
│   ├── class.html    # Class details page
│   ├── teacher.html  # Teacher information page
│   └── src/          # JavaScript and CSS files
│       ├── index.js  # Main application logic
│       ├── class.js  # Class-specific functionality
│       ├── teacher.js # Teacher-specific functionality
│       └── styles.css # Application styles
├── .github/          # GitHub Actions configuration
│   └── workflows/    # GitHub Actions workflows
│       ├── deploy.yml # Deployment workflow
│       └── supabase-ping.yml # Database keep-alive workflow
└── README.md         # This file
```