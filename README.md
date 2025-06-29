# Class Catalog

A simple web application for browsing and managing class information.

## Features

- Browse available classes
- View class details
- Teacher information
- Responsive design

## Pages

- **Home** (`index.html`) - Main catalog page displaying all classes
- **Class Details** (`class.html`) - Detailed view of individual classes
- **Teacher Info** (`teacher.html`) - Information about teachers

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Live Site
The application is deployed at: `https://[your-username].github.io/catalog/`

### Manual Deployment
If you need to deploy manually:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set the source to "GitHub Actions"

## Local Development

To run this project locally:

1. Clone the repository
2. Open `public/index.html` in your web browser
3. Or serve the files using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server public
   ```

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
└── README.md         # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE). 