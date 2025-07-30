# Firebase Setup Guide for Makerspace Innovation Cell NITRR

## Issue Resolution: auth/configuration-not-found Error

The error you're experiencing occurs when Firebase isn't properly initialized or configured. Here's how to fix it:

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select your existing project
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication
   - Optionally enable Google Sign-in for your club

### 2. Get Your Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select Web app
4. Register your app and copy the configuration object

### 3. Environment Variables Setup

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Firebase configuration values:

```bash
cp .env.local.example .env.local
```

3. Edit `.env.local` with your actual Firebase values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Install Dependencies

```bash
npm install
# or
yarn install
```

### 5. Key Changes Made

#### Fixed Firebase Configuration (`lib/firebase.js`):
- Properly initialized Firebase app
- Exported auth instance correctly
- Used environment variables for security

#### Fixed Authentication Functions (`lib/auth.js`):
- Removed duplicate `getAuth` import
- Fixed import path to use relative path
- Added error logging for debugging
- Used the properly initialized auth instance

### 6. Usage Example

```javascript
import { createAccountWithEmailAndPassword, loginWithEmailAndPassword } from '@/lib/auth';

// Sign up
const { user, error } = await createAccountWithEmailAndPassword(email, password);
if (error) {
  console.error('Sign up error:', error);
} else {
  console.log('User created:', user);
}

// Sign in
const { user, error } = await loginWithEmailAndPassword(email, password);
if (error) {
  console.error('Sign in error:', error);
} else {
  console.log('User signed in:', user);
}
```

### 7. Common Issues and Solutions

1. **"auth/configuration-not-found"**: 
   - Ensure Firebase is properly initialized in `lib/firebase.js`
   - Check that all environment variables are set correctly

2. **"auth/user-not-found"**:
   - User doesn't exist, try creating account first

3. **"auth/wrong-password"**:
   - Incorrect password entered

4. **"auth/email-already-in-use"**:
   - Email already registered, use sign in instead

### 8. Security Best Practices

- Never commit `.env.local` to version control
- Use environment variables for all Firebase config
- Enable proper authentication methods in Firebase Console
- Set up proper security rules for your database

### 9. Testing

After setup, test your authentication:

1. Start your development server: `npm run dev`
2. Try creating a new account
3. Try signing in with existing credentials
4. Check browser console for any errors

If you still encounter issues, check the browser console for specific error messages and ensure all environment variables are correctly set.