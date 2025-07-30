# Makerspace Dashboard Setup Guide

## Firebase Configuration

The "auth/configuration-not-found" error occurs when Firebase isn't properly configured. Follow these steps to fix it:

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter your project name (e.g., "makerspace-dashboard")
4. Follow the setup wizard

### 2. Get Your Firebase Configuration
1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and choose Web
4. Register your app and copy the configuration

### 3. Set Up Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Replace the placeholder values with your actual Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Enable Authentication
1. In Firebase Console, go to Authentication
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" authentication

### 5. Install Dependencies
```bash
npm install
```

### 6. Run the Development Server
```bash
npm run dev
```

## Project Structure
```
├── lib/
│   ├── firebase.js    # Firebase configuration
│   └── auth.js        # Authentication functions
├── .env.local         # Environment variables (create this)
├── package.json       # Dependencies
└── next.config.js     # Next.js configuration
```

## Common Issues
- **auth/configuration-not-found**: Make sure your Firebase config is correct in `.env.local`
- **auth/invalid-api-key**: Check that your API key is correct
- **auth/unauthorized-domain**: Add your domain to authorized domains in Firebase Console

## Next Steps
After fixing the Firebase configuration, you can start building your Makerspace dashboard components!