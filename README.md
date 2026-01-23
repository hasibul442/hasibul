# Portfolio Application

A modern, responsive portfolio application built with Next.js 16, React 19, and MongoDB with Mongoose. Features a beautiful UI based on Soft UI Dashboard with authentication, data management, and comprehensive API functionality.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16 and React 19
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: User registration and login with bcrypt password hashing
- **RESTful API**: Complete CRUD operations for all entities
- **Responsive Design**: Mobile-first approach with Soft UI Dashboard theme
- **Dashboard Analytics**: Interactive charts and statistics
- **Content Management**: Blog, projects, experience, skills, and more
- **Icon Library**: React Icons and Font Awesome integration

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 16.1.4
- **React Version**: 19.2.3
- **Database**: MongoDB with Mongoose
- **Authentication**: bcryptjs for password hashing
- **Styling**: Bootstrap, Soft UI Dashboard CSS, Material-UI
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Notifications**: SweetAlert2
- **Cookie Management**: js-cookie

## 📦 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd hasibul
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 API Documentation

All API endpoints are prefixed with `/api/v1/`

### Authentication

- `POST /api/v1/auth/register` - Register new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123",
    "role": "user"
  }
  ```
- `POST /api/v1/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```

### Blog

- `GET /api/v1/blog` - Get all blogs
- `GET /api/v1/blog?id={id}` - Get blog by ID
- `GET /api/v1/blog?slug={slug}` - Get blog by slug
- `POST /api/v1/blog` - Create new blog
- `PUT /api/v1/blog?id={id}` - Update blog
- `DELETE /api/v1/blog?id={id}` - Delete blog

### Experience

- `GET /api/v1/exprience` - Get all experiences
- `GET /api/v1/exprience?id={id}` - Get experience by ID
- `POST /api/v1/exprience` - Create new experience
- `PUT /api/v1/exprience?id={id}` - Update experience
- `DELETE /api/v1/exprience?id={id}` - Delete experience

### Project

- `GET /api/v1/project` - Get all projects
- `GET /api/v1/project?id={id}` - Get project by ID
- `GET /api/v1/project?featured=true` - Get featured projects
- `POST /api/v1/project` - Create new project
- `PUT /api/v1/project?id={id}` - Update project
- `DELETE /api/v1/project?id={id}` - Delete project

### Skill

- `GET /api/v1/skill` - Get all skills
- `GET /api/v1/skill?id={id}` - Get skill by ID
- `GET /api/v1/skill?category={category}` - Get skills by category
- `POST /api/v1/skill` - Create new skill
- `PUT /api/v1/skill?id={id}` - Update skill
- `DELETE /api/v1/skill?id={id}` - Delete skill

### Education

- `GET /api/v1/education` - Get all educations
- `GET /api/v1/education?id={id}` - Get education by ID
- `POST /api/v1/education` - Create new education
- `PUT /api/v1/education?id={id}` - Update education
- `DELETE /api/v1/education?id={id}` - Delete education

### Testimonial

- `GET /api/v1/testimonial` - Get all testimonials
- `GET /api/v1/testimonial?id={id}` - Get testimonial by ID
- `POST /api/v1/testimonial` - Create new testimonial
- `PUT /api/v1/testimonial?id={id}` - Update testimonial
- `DELETE /api/v1/testimonial?id={id}` - Delete testimonial

### Interest

- `GET /api/v1/interest` - Get all interests
- `GET /api/v1/interest?id={id}` - Get interest by ID
- `POST /api/v1/interest` - Create new interest
- `PUT /api/v1/interest?id={id}` - Update interest
- `DELETE /api/v1/interest?id={id}` - Delete interest

### Health Check

- `GET /api/v1/health` - Health check endpoint

## 📊 Database Models

### User

```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['user', 'admin'], default: 'user')
}
```

### Blog

```javascript
{
  title: String (required),
  slug: String (required, unique),
  excerpt: String,
  content: String (required),
  author: String,
  coverImage: String,
  tags: [String],
  published: Boolean (default: false),
  views: Number (default: 0)
}
```

### Experience

```javascript
{
  title: String (required),
  company: String (required),
  location: String,
  startDate: Date (required),
  endDate: Date,
  current: Boolean (default: false),
  description: String,
  technologies: [String],
  order: Number (default: 0)
}
```

### Project

```javascript
{
  title: String (required),
  description: String (required),
  longDescription: String,
  technologies: [String],
  image: String,
  liveUrl: String,
  githubUrl: String,
  featured: Boolean (default: false),
  order: Number (default: 0)
}
```

### Skill

```javascript
{
  name: String (required),
  category: String (required, enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other']),
  level: String (enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], default: 'Intermediate'),
  icon: String,
  order: Number (default: 0)
}
```

### Education

```javascript
{
  degree: String (required),
  institution: String (required),
  location: String,
  startDate: Date (required),
  endDate: Date,
  current: Boolean (default: false),
  grade: String,
  description: String,
  order: Number (default: 0)
}
```

### Testimonial

```javascript
{
  name: String (required),
  position: String (required),
  company: String,
  testimonial: String (required),
  avatar: String,
  rating: Number (1-5, default: 5),
  order: Number (default: 0)
}
```

### Interest

```javascript
{
  title: String (required),
  description: String,
  icon: String,
  order: Number (default: 0)
}
```

## 🔧 Project Structure

```
hasibul/
├── public/              # Static assets
│   └── assets/         # CSS, JS, images
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── api/        # API routes
│   │   │   └── v1/     # API version 1
│   │   ├── admin/      # Admin dashboard
│   │   └── auth/       # Authentication pages
│   ├── Components/     # React components
│   ├── Helper/         # Helper functions
│   ├── lib/            # Library configurations
│   │   └── mongodb.js  # MongoDB connection
│   └── models/         # Mongoose models
├── .env.local          # Environment variables (create this)
├── .env.local.example  # Example environment file
├── jsconfig.json       # JavaScript configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Dependencies
└── README.md           # This file
```

## 🚀 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# MongoDB Configuration (Required)
MONGODB_URI=mongodb://localhost:27017/portfolio

# For MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Application
NODE_ENV=development
```

## 💾 Database Setup

### Local MongoDB

1. Install MongoDB on your system
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/portfolio`

### MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace username, password, and database name
5. Update `MONGODB_URI` in `.env.local`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

For any inquiries or support, please contact the project maintainer.

---

Built with ❤️ using Next.js and MongoDB
