# Jowina Restaurant Website

A full-featured, responsive restaurant website for Jowina Restaurant with online ordering, reservation system, and customer engagement features.

![Jowina Restaurant](images/jowina.jpg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Dependencies](#dependencies)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 Overview

Jowina Restaurant Website is a comprehensive web platform designed to enhance the dining experience by providing online services such as menu browsing, table reservations, online ordering, and customer reviews. The website aims to showcase the restaurant's offerings, ambiance, and culinary excellence while providing convenient digital services to customers.

## ✨ Features

### Navigation & Home
- Responsive navigation with mobile menu toggle
- Hero section with call-to-action buttons
- About section with restaurant story and features

### Menu Section
- Interactive menu with filtering options (categories, dietary preferences)
- Search functionality for menu items
- Price range filter
- Pagination for better user experience

### Gallery
- Filterable gallery with different categories (restaurant, food, events)
- Lightbox modal for image viewing with navigation
- Responsive grid layout

### Reservation System
- Online table booking form
- Date and time selection
- Party size specification
- Special requests field
- Confirmation modal and email

### Online Ordering
- Dual ordering options: Delivery & Pickup
- Dynamic cart management
- Menu item customization options
- Payment method selection
- Order confirmation process

### Customer Reviews
- Review display with rating summary
- Submit review functionality
- Star rating visualization

### Blog/News Section
- Latest news and recipes showcase
- Load more functionality

### Contact Information
- Multiple contact methods (phone, email, address)
- Interactive map integration
- Contact form
- Social media links

### Additional Features
- Newsletter subscription
- Back to top button
- Floating cart icon with item count
- Various modal popups for interactions
- Form validations

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome (icons)
- Leaflet/Google Maps (map integration)
- Responsive design principles

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/uwen-godwin/jowina-restaurant.git
   ```

2. Navigate to project directory:
   ```bash
   cd jowina-restaurant
   ```

3. Open the project in your code editor.

4. Launch the website:
   ```bash
   # If you have a simple HTTP server installed (like Python's http.server)
   python -m http.server
   
   # Or using Node.js' http-server
   npx http-server
   ```

5. Open your browser and navigate to `http://localhost:8000` (or whichever port is specified in your terminal).

## 📁 Project Structure

```
jowina-restaurant/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── jowina.jpg
│   ├── Godwin.jpg
│   └── [other images]
├── index.html
├── README.md
└── [other project files]
```

## 🚀 Usage

### For Restaurant Owners/Administrators

1. **Updating Menu Items**:
   - Edit the menu data in the script.js file (or connect to a backend service)
   - Add new items by following the existing structure

2. **Managing Reservations**:
   - Connect the reservation form to your preferred backend service
   - Configure email notifications in script.js

3. **Content Updates**:
   - Update images, text content, and other information directly in index.html

### For Developers

1. **Customizing Styles**:
   - Modify the CSS files to match your branding needs
   - Update responsive breakpoints as needed

2. **Extending Functionality**:
   - Add new sections or features by following the existing HTML/JS patterns
   - Implement backend integration for forms and dynamic content

## ⚙️ Configuration

### Google Maps API

Replace the placeholder API key in the index.html file:

```html
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
```

### Restaurant Information

Update the contact information, opening hours, and address in the relevant sections of the index.html file.

## 🔌 API Integration

This front-end project is designed to be connected to back-end services for the following features:

1. **Reservation System**:
   - Implement an API endpoint to handle reservation submissions
   - Set up email confirmation service

2. **Online Ordering**:
   - Create endpoints for menu retrieval, order submission, and payment processing
   - Implement order tracking functionality

3. **Reviews System**:
   - Develop API for submitting and retrieving customer reviews
   - Implement moderation if needed

4. **Contact Form**:
   - Create an endpoint to handle form submissions
   - Set up email notification system

## 📦 Dependencies

- jQuery 3.6.0
- Font Awesome 6.0.0-beta3
- Leaflet 1.7.1 (map implementation)
- Google Maps API (optional alternative to Leaflet)

## 🌐 Browser Compatibility

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera (latest 2 versions)
- Mobile browsers (iOS Safari, Android Chrome)

## 👥 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Restaurant Contact**: info@jowinrestaurant.com
- **Developer Contact**: uwengodwin001@gmail.com
- **Website**: [jowinrestaurant.com](https://jowinrestaurant.com)

---

Made with ❤️ for Jowina Restaurant
