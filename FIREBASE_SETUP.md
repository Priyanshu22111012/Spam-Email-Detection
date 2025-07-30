# Firebase Setup Guide - Fixing auth/configuration-not-found Error

## Problem
The error `Firebase: Error (auth/configuration-not-found)` occurs when Firebase is not properly initialized or configured in your project.

## Solution

### 1. Install Firebase Dependencies
```bash
npm install firebase
```

### 2. Firebase Project Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project or create a new one
3. Go to Project Settings (gear icon)
4. Scroll down to "Your apps" section
5. Click on the Web app icon (`</>`) or select your existing web app
6. Copy the Firebase configuration object

### 3. Environment Variables Setup
1. Create a `.env.local` file in your project root
2. Copy the contents from `.env.local.example`
3. Replace the placeholder values with your actual Firebase configuration values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_actual_measurement_id
```

### 4. Enable Authentication
1. In Firebase Console, go to Authentication
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Save the changes

### 5. Updated Code Structure
The issue in your original code was:
- Missing Firebase initialization
- Incorrect import path (`@/lib/firebase` should be `./firebase` or proper alias)
- No proper Firebase app initialization

### 6. File Structure
```
lib/
├── firebase.js          # Firebase configuration and initialization
└── auth.js             # Authentication functions (your corrected code)
```

### 7. Usage in Your Components
```javascript
import { createAccountWithEmailAndPassword, loginWithEmailAndPassword, logoutFirebase } from './lib/auth';

// Use the functions as before - they should now work properly
```

## Important Notes
- Make sure your `.env.local` file is in your `.gitignore`
- Restart your development server after adding environment variables
- Ensure all Firebase configuration values are correct
- Check that Authentication is enabled in your Firebase project

## Testing
After setup, try creating an account or signing in. The `auth/configuration-not-found` error should be resolved.