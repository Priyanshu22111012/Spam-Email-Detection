# Makerspace Innovation Cell Dashboard

A modern, responsive dashboard built with Next.js and Firebase for managing your Makerspace Innovation Cell team and projects.

## Features

- 🔐 **Firebase Authentication** - Secure login/signup system
- 📊 **Dashboard Overview** - Team stats, project tracking, and activity feed
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Built with Tailwind CSS for a clean, professional look
- ⚡ **Fast Performance** - Next.js with optimized components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Firebase project set up
- Git

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Authentication and choose Email/Password as a sign-in method
4. Go to Project Settings > General > Your apps
5. Click "Web" and register your app
6. Copy the Firebase configuration

### 3. Environment Configuration

1. Rename `.env.local` and update it with your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.js           # Root layout component
│   └── page.js             # Main page with auth logic
├── components/
│   ├── Dashboard.js        # Main dashboard component
│   └── LoginForm.js        # Authentication form
├── lib/
│   ├── auth.js            # Authentication functions
│   └── firebase.js        # Firebase configuration
├── .env.local             # Environment variables
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
└── tailwind.config.js     # Tailwind CSS configuration
```

## Usage

1. **First Time Setup**: Create an account using the sign-up form
2. **Login**: Use your email and password to access the dashboard
3. **Dashboard**: View team statistics, projects, and recent activity
4. **Logout**: Click the logout button in the top right

## Customization

### Adding New Features

- Add new components in the `components/` directory
- Create new pages in the `app/` directory
- Add Firebase functions in the `lib/` directory

### Styling

- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Use Tailwind classes for component styling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Firebase Hosting
- AWS Amplify
- Railway

## Troubleshooting

### Firebase Configuration Error

If you see "auth/configuration-not-found":
1. Double-check your `.env.local` file
2. Ensure all Firebase config values are correct
3. Restart the development server

### Build Errors

1. Make sure all dependencies are installed: `npm install`
2. Check for TypeScript errors if using TypeScript
3. Verify all imports are correct

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
