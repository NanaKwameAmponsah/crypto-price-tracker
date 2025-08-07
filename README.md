# Crypto Palace - Real-Time Cryptocurrency Tracker
A modern, responsive cryptocurrency tracking application built with React and powered by real-time data from CoinGecko API.

##  Live Demo

**[View Live Application →](https://nanakwameamponsah.github.io/crypto-price-tracker/)**

##  Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Performance Optimizations](#-performance-optimizations)
- [Future Enhancements](#-future-enhancements)
- [Developer](#-developer)

##  Overview

Crypto Palace is a comprehensive cryptocurrency tracking application that provides real-time market data, price charts, and detailed coin information. Built with modern React practices and optimized for both desktop and mobile experiences, this project demonstrates proficiency in:

- **Frontend Development**: React 19, Context API, React Router
- **API Integration**: RESTful API consumption with CoinGecko
- **Data Visualization**: Interactive charts with Google Charts
- **Responsive Design**: Mobile-first CSS approach
- **Modern Tooling**: Vite build system, ESLint configuration
- **Deployment**: Automated GitHub Pages deployment with CI/CD

##  Features

###  Core Functionality
- **Real-time Price Tracking**: Live cryptocurrency prices updated automatically
- **Market Data**: Market cap, 24h change, and ranking information
- **Advanced Search**: Intelligent search with autocomplete suggestions
- **Currency Conversion**: Support for multiple fiat currencies (USD, EUR, INR)
- **Interactive Charts**: Historical price data visualization
- **Responsive Design**: Seamless experience across all devices

###  User Experience
- **Clean Interface**: Modern, intuitive design with smooth animations
- **Fast Loading**: Optimized with Vite for lightning-fast development and builds
- **Error Handling**: Robust error handling for API failures
- **Loading States**: Professional loading indicators for better UX

###  Data Features
- **Top 10 Cryptocurrencies**: Curated list of most popular coins
- **Market Statistics**: Comprehensive market data including rankings
- **Price Trends**: Visual indicators for price movements (green/red)
- **Detailed Coin Pages**: Individual pages with comprehensive coin information

##  Tech Stack

### Frontend
- **React ** - Latest React with concurrent features
- **React Router DOM** - Client-side routing
- **React Context API** - State management
- **CSS3** - Custom styling with Flexbox/Grid

### Data Visualization
- **React Google Charts 5.2.1** - Interactive price charts

### Build Tools & Development
- **Vite ** - frontend tooling
- **ESLint** - Code quality and consistency
- **GitHub Pages** - Automated deployment

### API & Data
- **CoinGecko API** - Real-time cryptocurrency data
- **REST API Integration** - Efficient data fetching

##  Architecture

### Component Architecture
```
src/
├── components/
│   ├── Navbar/           # Navigation component
│   ├── Footer/           # Footer component
│   └── LineChart/        # Chart visualization
├── pages/
│   ├── Home/             # Main dashboard
│   └── Coin/             # Individual coin details
├── context/
│   └── CoinContext.jsx   # Global state management
└── assets/               # Static assets
```

### State Management Pattern
- **Context API**: Centralized state for currency and coin data
- **Local State**: Component-specific state for search and UI
- **Effect Hooks**: Efficient data fetching and side effect management

### Routing Strategy
- **Dynamic Routing**: `/coin/:coinId` for individual coin pages
- **Conditional Base Paths**: Environment-specific routing for development vs. production
- **GitHub Pages Compatible**: Proper basename configuration for subdirectory deployment

##  Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/NanaKwameAmponsah/crypto-price-tracker.git

# Navigate to project directory
cd crypto-price-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Configuration
The application automatically detects the environment:
- **Development**: Runs on `http://localhost:5173/`
- **Production**: Optimized build for `https://nanakwameamponsah.github.io/crypto-price-tracker/`

##  Usage

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Deployment
```bash
npm run deploy       # Build and deploy to GitHub Pages
```

##  API Integration

### CoinGecko API Implementation
- **Endpoint**: `https://api.coingecko.com/api/v3/coins/markets`
- **Authentication**: API key integration for enhanced rate limits
- **Data Fetching**: Efficient API calls with proper error handling
- **Real-time Updates**: Automatic data refresh based on currency changes

### API Features Used
- Market data retrieval
- Multi-currency support
- Coin metadata (images, names, symbols)
- Price change calculations
- Market cap rankings

##  Deployment

### Automated GitHub Pages Deployment
- **Build Process**: Vite optimized production builds
- **Asset Optimization**: Automatic code splitting and minification
- **Conditional Configuration**: Environment-specific settings
- **CI/CD Pipeline**: Automated deployment on push to main branch

### Deployment Features
- **Custom Domain Ready**: Configured for custom domain setup
- **SEO Optimized**: Proper meta tags and structure
- **Performance Optimized**: Compressed assets and efficient caching

## Project Structure

```
crypto-price-tracker/
├── public/
│   ├── logo.png              # Application logo
│   └── vite.svg             # Vite branding
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── Footer/          # Footer component
│   │   ├── LineChart/       # Chart component
│   │   └── Navbar/          # Navigation
│   ├── context/
│   │   └── CoinContext.jsx  # Global state
│   ├── pages/
│   │   ├── Home/            # Main dashboard
│   │   └── Coin/            # Coin details
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── dist/                    # Production build
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

##  Performance Optimizations

### Code Optimization
- **Lazy Loading**: Component-based code splitting
- **Efficient Rendering**: Optimized React patterns
- **Minimal Re-renders**: Strategic use of useEffect dependencies

### Build Optimization
- **Vite Build System**: HMR and optimized builds
- **Asset Optimization**: Automatic image and code optimization
- **Bundle Splitting**: Efficient chunk splitting for better caching

### User Experience
- **Loading States**: Professional loading indicators
- **Error Boundaries**: Graceful error handling

##  Future Enhancements

### Planned Features
- [ ] **Portfolio Tracking**: Personal portfolio management
- [ ] **Price Alerts**: Customizable price notifications
- [ ] **Advanced Charts**: More chart types and technical indicators
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Favorites**: Save and track favorite cryptocurrencies
- [ ] **News Integration**: Crypto news and market sentiment
- [ ] **Advanced Filtering**: Sort and filter by various metrics


## Developer

**Nana Kwame Amponsah**

- 📧 Email: [vfy7pe@virginia.edu]
- 💼 LinkedIn: [www.linkedin.com/in/nana-kwame-amponsah]
- 🌐 Portfolio: [Your Portfolio Website]
- 📱 GitHub: [@NanaKwameAmponsah](https://github.com/NanaKwameAmponsah)

---

###  Key Technical Achievements

- **Modern React Development**: Utilizing React 19 with latest patterns and best practices
- **API Integration**: Seamless integration with external APIs and proper error handling
- **Performance Optimization**: Efficient data fetching and rendering strategies
- **Deployment Automation**: Streamlined CI/CD pipeline with GitHub Pages
- **Code Quality**: ESLint configuration and consistent coding standards

###  Project Metrics

- **Performance Score**: Optimized for speed and efficiency
- **API Integration**: Real-time data updates
- **User Experience**: Intuitive and professional interface
- **Code Quality**: Clean, maintainable, and well-documented code
