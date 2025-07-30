import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase';

export async function createAccountWithEmailAndPassword(
  email,
  password
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user, error: null };
  } catch (error) {
    console.error('Error creating account:', error);
    return { user: null, error: error };
  }
}

export async function loginWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user, error: null };
  } catch (error) {
    console.error('Error logging in:', error);
    return { user: null, error: error };
  }
}

export async function logoutFirebase() {
    try {
        await signOut(auth);
        return { error: null };
    } catch (error) {
        console.error('Error logging out:', error);
        return { error: error };
    }
}