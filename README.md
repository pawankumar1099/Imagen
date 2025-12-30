# 🎨 Imagen - AI Image Generation Platform

A full-stack web application that leverages AI to generate stunning images. Users can authenticate, manage credits, and generate high-quality images powered by advanced AI models.

![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646cff?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-8.17.2-47a248?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38b2ac?logo=tailwindcss)

---

<img width="3817" height="1861" alt="diagram-export-30-12-2025-11_11_52-am" src="https://github.com/user-attachments/assets/872f52ba-c44b-40f9-9abb-8634a8d08238" />


---

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration with JWT tokens
- 🎬 **AI Image Generation** - Generate images using advanced AI models
- 💳 **Credit System** - Purchase and manage credits for image generation
- 💰 **Payment Integration** - Razorpay payment gateway for credit purchases
- 📊 **Transaction History** - Track all image generation and purchase transactions
- 🎨 **Beautiful UI** - Modern, responsive design with TailwindCSS
- ⚡ **Fast Performance** - Built with Vite for optimized build and HMR
- 🔄 **Real-time Updates** - Toast notifications for user feedback

---

## 🏗️ Project Structure

```
imagen/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   ├── Description.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GenerateBtn.jsx
│   │   │   ├── Head.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Prism.jsx
│   │   │   ├── Steps.jsx
│   │   │   └── Testimonial.jsx
│   │   ├── contexts/      # React Context for state management
│   │   │   └── AppContext.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Result.jsx
│   │   │   └── BuyCredit.jsx
│   │   ├── assets/        # Static assets
│   │   ├── App.jsx        # Root component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
└── server/                # Node.js/Express Backend
    ├── config/
    │   └── mongodb.js     # MongoDB connection
    ├── controllers/       # Business logic
    │   ├── userController.js
    │   └── imageController.js
    ├── middlewares/       # Authentication middleware
    │   └── auth.js
    ├── models/           # Database schemas
    │   ├── userModel.js
    │   └── transactionModel.js
    ├── routes/           # API routes
    │   ├── userRoutes.js
    │   └── imageRoutes.js
    ├── server.js         # Express app entry point
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance)
- Create a `.env` file in the server directory with required environment variables

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd imagen
```

#### 2. Setup Server

```bash
cd server
npm install
```

**Create `.env` file in the server directory:**
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
# Add other required environment variables
```

#### 3. Setup Client

```bash
cd ../client
npm install
```

---

## 📝 Available Scripts

### Server Commands

```bash
# Start the server
npm start
# Runs: node server.js

# Start server with auto-reload (development)
npm run dev
# Runs: nodemon server.js
```

**Server runs on:** `http://localhost:4000`

### Client Commands

```bash
# Start development server
npm run dev
# Runs: vite

# Build for production
npm run build
# Runs: vite build

# Preview production build
npm preview
# Runs: vite preview

# Run ESLint
npm run lint
# Runs: eslint .
```

**Client runs on:** `http://localhost:5173` (default Vite port)

---

## 🔌 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /profile` - Get user profile (protected)
- `POST /logout` - Logout user

### Image Routes (`/api/image`)
- `POST /generate` - Generate AI image (requires credits)
- `GET /history` - Get user's image generation history (protected)
- `DELETE /:id` - Delete a generated image

---

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TailwindCSS 4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Motion** - Animation library
- **OGL** - WebGL library

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Razorpay** - Payment processing
- **Validator** - Input validation
- **CORS** - Cross-origin requests
- **Dotenv** - Environment variables
- **Nodemon** - Development auto-reload

---

## 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for secure authentication:

1. User registers or logs in
2. Server returns a JWT token
3. Client stores the token (typically in localStorage)
4. Token is sent in request headers for protected routes
5. Server verifies token via auth middleware

---

## 💳 Payment Integration

The project integrates **Razorpay** for handling credit purchases:

- Users can buy credits through the `/buy` route
- Payments are processed securely via Razorpay API
- Transaction history is maintained in the database

---

## 🌐 Environment Variables

### Server `.env` Example
```env
PORT=4000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/imagen
JWT_SECRET=your_super_secret_jwt_key_12345
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxxx
```

---

## 📦 Deployment

### Client Deployment (Vercel, Netlify, etc.)
```bash
cd client
npm run build
# Deploy the dist folder
```

### Server Deployment (Heroku, Railway, Render, etc.)
```bash
cd server
# Push to your hosting platform
# Ensure environment variables are set in production
```

---

## 🐛 Troubleshooting

**Port Already in Use**
```bash
# Change port in server.js or .env
PORT=5000 npm start
```

**MongoDB Connection Error**
- Verify MongoDB URI in `.env`
- Ensure MongoDB service is running
- Check network access if using MongoDB Atlas

**CORS Issues**
- Verify CORS configuration in `server.js`
- Ensure client and server URLs match

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💼 Author

Created with ❤️ for AI-powered image generation enthusiasts.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📞 Support

For support, open an issue on the repository or contact the development team.

---

**Made with ❤️ by Pawan Kumar**
