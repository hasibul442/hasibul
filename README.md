# Admin Dashboard

A modern, responsive admin dashboard built with Next.js 15, React 19, and Firebase. Features a beautiful UI based on Soft UI Dashboard with authentication, real-time data management, and comprehensive admin functionality.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15 and React 19
- **Authentication**: Firebase Authentication with protected routes
- **Real-time Database**: Firebase Firestore integration
- **Responsive Design**: Mobile-first approach with Soft UI Dashboard theme
- **Dashboard Analytics**: Interactive charts and statistics
- **User Management**: Complete user administration system
- **Project Management**: GitHub integration and project overview
- **Middleware Protection**: Route-based authentication middleware
- **Icon Library**: React Icons and Font Awesome integration

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15.4.2
- **React Version**: 19.1.0
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Styling**: Soft UI Dashboard CSS Framework
- **Icons**: React Icons, Font Awesome
- **State Management**: React Firebase Hooks
- **Cookie Management**: js-cookie

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasibul442/hasibul.git
   cd hasibul
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── public/
│   ├── assets/           # Static assets (CSS, JS, images, fonts)
│   └── *.svg             # SVG icons
├── src/
│   ├── app/
│   │   ├── admin/        # Admin dashboard pages
│   │   ├── auth/         # Authentication pages (login, register)
│   │   ├── layout.jsx    # Root layout component
│   │   └── page.jsx      # Home page
│   ├── Components/       # Reusable React components
│   │   ├── GithubOverView.jsx
│   │   └── HomePageProjectTable.jsx
│   ├── Helper/           # Utility functions
│   │   └── CurrentPathHelper.jsx
│   ├── lib/              # Firebase configuration
│   │   ├── firebase.jsx
│   │   └── firebase-admin.jsx
│   └── middleware.js     # Authentication middleware
├── package.json
└── next.config.mjs
```

## 🔐 Authentication

The application includes a comprehensive authentication system:

- **Login/Register**: Firebase Authentication
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Cookie-based session handling
- **Role-based Access**: Admin dashboard access control

## 🎨 UI Components

The dashboard includes various pre-built components:

- **Dashboard Cards**: Statistics and metrics display
- **Data Tables**: Project and user management tables
- **GitHub Integration**: Repository overview and statistics
- **Charts & Analytics**: Visual data representation
- **Responsive Navigation**: Mobile-friendly sidebar and navigation

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore Database
3. Add your web app configuration to `.env.local`

### Next.js Configuration
The project uses Next.js 15 with the App Router and includes:
- Turbopack for faster development
- Custom middleware for authentication
- Optimized asset loading

## 📱 Responsive Design

The dashboard is fully responsive and includes:
- Mobile-first design approach
- Flexible grid system
- Touch-friendly interface
- Cross-browser compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Hasibul Hasan**
- GitHub: [@hasibul442](https://github.com/hasibul442)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Soft UI Dashboard](https://www.creative-tim.com/product/soft-ui-dashboard) - UI theme inspiration
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

⭐ **Star this repository if you find it helpful!**
