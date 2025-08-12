# VeloAI - AI-Powered Content Creation Platform

![VeloAI Logo](./frontend/assets/logo.png)

VeloAI is a comprehensive AI-powered platform that provides various content creation tools including article writing, blog title generation, image creation, background removal, object removal, and resume review services. Built with modern web technologies and powered by cutting-edge AI APIs.

## 🌟 Features

### 🤖 AI Content Generation
- **Article Generation** - Create long-form content with customizable length using Google Gemini AI
- **Blog Title Generator** - Generate engaging titles across 8 different categories
- **AI Image Creation** - Text-to-image generation powered by ClipDrop API

### 🖼️ Image Processing
- **Background Removal** - Automatically remove backgrounds from any image
- **Object Removal** - Remove specific objects from images with AI precision
- **High-Quality Processing** - Maintain image quality during transformations

### 📄 Document Analysis
- **Resume Review** - AI-powered analysis and feedback for resumes
- **PDF Processing** - Extract and analyze content from uploaded documents

### 👥 Community Features
- **Content Sharing** - Publish and discover AI-generated content
- **Like System** - Engage with community creations
- **User Profiles** - Track your creations and activity

### 💳 Subscription Management
- **Free Tier** - 10 free requests to get started
- **Premium Plans** - Unlimited access with advanced features
- **Usage Tracking** - Monitor your API usage and limits

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS for responsive design
- **Authentication:** Clerk for secure user management
- **Routing:** React Router DOM for SPA navigation
- **HTTP Client:** Axios with interceptors
- **UI Components:** Custom components with Lucide React icons
- **Notifications:** React Hot Toast for user feedback
- **Markdown:** React Markdown for content rendering

### Backend
- **Runtime:** Node.js with Express.js
- **Database:** PostgreSQL with SQL template literals
- **Authentication:** Clerk Express middleware
- **File Upload:** Multer for multipart form handling
- **Image Storage:** Cloudinary for cloud-based image management
- **AI Services:** 
  - Google Gemini AI via OpenAI SDK
  - ClipDrop API for image processing
- **PDF Processing:** pdf-parse for document analysis
- **CORS:** Configured for cross-origin requests

### Deployment & DevOps
- **Frontend Hosting:** Vercel with automatic deployments
- **Backend Hosting:** Vercel serverless functions
- **Database:** PostgreSQL (Neon)
- **CDN:** Cloudinary for image delivery
- **Environment Management:** dotenv for configuration

## 📁 Project Structure

```
VeloAI/
├── frontend/                   # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── AiTools.jsx     # AI tools showcase
│   │   │   ├── CreationItem.jsx # Individual creation display
│   │   │   ├── Footer.jsx      # Site footer
│   │   │   ├── Hero.jsx        # Landing page hero
│   │   │   ├── Navbar.jsx      # Navigation component
│   │   │   ├── Plan.jsx        # Pricing plans
│   │   │   ├── Sidebar.jsx     # Dashboard sidebar
│   │   │   ├── Testimonials.jsx # User testimonials
│   │   │   ├── Toggle.jsx      # UI toggle component
│   │   │   ├── TrustedBrands.jsx # Brand logos
│   │   │   └── TrustedUser.jsx  # User trust indicators
│   │   ├── pages/              # Route components
│   │   │   ├── BlogTitles.jsx  # Blog title generator
│   │   │   ├── Community.jsx   # Community content feed
│   │   │   ├── Dashboard.jsx   # User dashboard
│   │   │   ├── GenerateImages.jsx # Image generation
│   │   │   ├── Home.jsx        # Landing page
│   │   │   ├── Layout.jsx      # Dashboard layout
│   │   │   ├── RemoveBackground.jsx # Background removal
│   │   │   ├── RemoveObject.jsx # Object removal
│   │   │   ├── ReviewResume.jsx # Resume analysis
│   │   │   └── WriteArticle.jsx # Article generation
│   │   ├── assets/             # Static assets
│   │   ├── App.jsx             # Main app component
│   │   ├── App.css             # Global styles
│   │   ├── index.css           # Base styles
│   │   └── main.jsx            # App entry point
│   ├── public/                 # Public assets
│   ├── package.json            # Dependencies and scripts
│   ├── vite.config.js          # Vite configuration
│   ├── vercel.json             # Vercel deployment config
│   └── .env                    # Environment variables
│
└── server/                     # Express.js backend
    ├── controllers/            # Route handlers
    │   ├── aiController.js     # AI service controllers
    │   └── userController.js   # User management controllers
    ├── middlewares/            # Custom middleware
    │   └── auth.js             # Authentication middleware
    ├── routes/                 # API route definitions
    │   ├── aiRoutes.js         # AI-related endpoints
    │   └── userRoutes.js       # User-related endpoints
    ├── configs/                # Service configurations
    │   ├── cloudinary.js       # Cloudinary setup
    │   ├── db.js               # Database connection
    │   └── multer.js           # File upload config
    ├── server.js               # Main server file
    ├── package.json            # Dependencies and scripts
    ├── vercel.json             # Vercel deployment config
    └── .env                    # Environment variables
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- API keys for required services

### Required API Keys & Services
1. **Clerk** - User authentication ([clerk.com](https://clerk.com))
2. **Google Gemini AI** - Text generation ([ai.google.dev](https://ai.google.dev))
3. **ClipDrop** - Image processing ([clipdrop.co](https://clipdrop.co))
4. **Cloudinary** - Image storage ([cloudinary.com](https://cloudinary.com))
5. **PostgreSQL** - Database ( [neon.tech](https://neon.tech))

### Environment Setup

**Frontend Environment Variables (.env)**
```env
VITE_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
```

**Backend Environment Variables (.env)**
```env
# Server Configuration
PORT=3000

# Database
DATABASE_URL=postgresql://username:password@host:port/database

# AI Services
GEMINI_API_KEY=your_google_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key

# Image Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Authentication
CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
```

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/veloai.git
cd veloai
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Install backend dependencies**
```bash
cd ../server
npm install
```

4. **Set up environment variables**
```bash
# Copy environment templates
cp frontend/.env.example frontend/.env
cp server/.env.example server/.env

# Fill in your API keys and configuration
```

5. **Set up the database**
```sql
-- Connect to your PostgreSQL database and run:

-- Users table for additional user data
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    clerk_id VARCHAR(255) UNIQUE NOT NULL,
    plan VARCHAR(50) DEFAULT 'free',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creations table for storing AI-generated content
CREATE TABLE IF NOT EXISTS creations (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL REFERENCES users(clerk_id),
    prompt TEXT NOT NULL,
    content TEXT NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('article', 'blog-title', 'image', 'resume-review')),
    publish BOOLEAN DEFAULT false,
    likes TEXT[] DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_creations_user_id ON creations(user_id);
CREATE INDEX IF NOT EXISTS idx_creations_type ON creations(type);
CREATE INDEX IF NOT EXISTS idx_creations_publish ON creations(publish);
CREATE INDEX IF NOT EXISTS idx_creations_created_at ON creations(created_at);
```

6. **Start development servers**

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
# Server runs on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📡 API Documentation

### Authentication
All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <clerk_jwt_token>
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

#### Backend Deployment
1. Push your code to GitHub
2. Connect repository to Vercel
3. Configure deployment:
   - **Framework:** Other
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Output Directory:** (leave empty)

4. Add environment variables in Vercel dashboard
5. Deploy and note the backend URL

#### Frontend Deployment
1. Create new Vercel project
2. Configure deployment:
   - **Framework:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

3. Add environment variables:
   ```
   VITE_BASE_URL=https://your-backend-url.vercel.app
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
   ```

4. Deploy frontend

#### Update CORS
Update your backend's CORS configuration with production URLs:
```javascript
app.use(cors({
    origin: [
        'https://your-frontend-url.vercel.app',
        'http://localhost:5173', // Keep for development
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'],
}));
```

### Custom Domain Setup
1. Add custom domain in Vercel project settings
2. Configure DNS records as instructed
3. Update CORS and Clerk settings with new domain

## 🔐 Authentication & Authorization

### User Management with Clerk
- **Sign Up/Sign In** - Email, social providers
- **User Profiles** - Managed through Clerk dashboard
- **Session Management** - JWT tokens with automatic refresh
- **Middleware Protection** - Custom auth middleware for API routes

### Subscription Plans
- **Free Plan**: 10 requests across all AI features
- **Premium Plan**: Unlimited access to all features
- **Usage Tracking**: Stored in user metadata

### Security Features
- JWT token validation on all protected routes
- CORS protection for cross-origin requests
- File upload validation and sanitization
- Rate limiting and usage quota enforcement

## 🎨 UI/UX Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes
- Touch-friendly interface for mobile users

### User Experience
- Real-time loading states and feedback
- Toast notifications for user actions
- Progressive image loading
- Smooth animations and transitions

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatible
- High contrast color schemes

## 🧪 Testing

### Run Tests Locally
```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd server
npm run test
```

### API Testing
Use the provided Postman collection or test with curl:
```bash
# Test article generation
curl -X POST https://your-backend-url.vercel.app/api/ai/generate-article \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"prompt": "Test article", "length": 500}'
```

## 📊 Performance & Monitoring

### Optimization Features
- Image optimization via Cloudinary
- Lazy loading for community images
- Efficient API response caching
- Minimized bundle sizes with Vite

### Monitoring
- Error tracking with try-catch blocks
- API response logging
- User activity tracking
- Performance metrics via Vercel Analytics

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests if applicable**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**
```javascript
// Solution: Update CORS origins in server.js
origin: ['https://your-frontend-domain.com']
```

**Build Failures**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Database Connection Issues**
```bash
# Check DATABASE_URL format
postgresql://username:password@host:port/database
```

**API Key Issues**
- Verify all API keys are correctly set in environment variables
- Check API key permissions and quotas
- Ensure environment variables are properly loaded

### Getting Help
- Open an issue on GitHub
- Check existing issues for solutions
- Join our Discord community (link in bio)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 VeloAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **OpenAI** for AI capabilities via compatible API
- **Google** for Gemini AI services
- **Clerk** for authentication infrastructure
- **Cloudinary** for image management
- **ClipDrop** for advanced image processing
- **Vercel** for hosting and deployment
- **React & Vite** for the development framework
- **Tailwind CSS** for styling capabilities


---

**Built with ❤️ by Harsh Jindal**

*Empowering creativity through artificial intelligence*