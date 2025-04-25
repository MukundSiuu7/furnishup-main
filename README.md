# �� FurnishUp - Modern Furniture E-commerce Platform

![FurnishUp Banner](assets/logo.svg)

## 🌟 Overview

FurnishUp is a modern e-commerce platform specifically designed for furniture products. Built with Next.js and MongoDB, it offers a seamless shopping experience with features like real-time cart management, order tracking, and a responsive design.

## ✨ Features

- 🛍️ **Product Management**
  - Browse furniture categories
  - Detailed product views
  - Real-time stock tracking
  - Image gallery support

- 🛒 **Shopping Cart**
  - Real-time cart updates
  - Quantity management
  - Price calculations
  - Persistent cart data

- 👤 **User Management**
  - Secure authentication
  - Profile management
  - Order history
  - Address management

- 📱 **Responsive Design**
  - Mobile-first approach
  - Dark/Light mode
  - Smooth animations
  - Cross-browser compatibility

## 🛠️ Tech Stack

- **Frontend:**
  - Next.js 14
  - React
  - Tailwind CSS
  - Context API

- **Backend:**
  - MongoDB
  - Mongoose
  - Next.js API Routes

- **Authentication:**
  - Clerk

- **Cloud Services:**
  - Cloudinary (Image Storage)
  - Vercel (Deployment)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- MongoDB
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/furnishup.git
```

2. Install dependencies
```bash
cd furnishup
npm install
```

3. Set up environment variables
```env
MONGODB_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)
