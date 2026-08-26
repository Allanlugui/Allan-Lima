import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, doc, getDoc, setDoc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { PortfolioDatabase, DEFAULT_PORTFOLIO_DATA } from './portfolio-store';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    if (getApps().length > 0) {
      app = getApp();
    } else {
      app = initializeApp({
        apiKey: firebaseConfig.apiKey,
        authDomain: firebaseConfig.authDomain,
        projectId: firebaseConfig.projectId,
        storageBucket: firebaseConfig.storageBucket,
        messagingSenderId: firebaseConfig.messagingSenderId,
        appId: firebaseConfig.appId,
      });
    }
  }
  return app;
}

export function getDb(): Firestore {
  if (!db) {
    const firebaseApp = getFirebaseApp();
    if (firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)') {
      db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);
    } else {
      db = getFirestore(firebaseApp);
    }
  }
  return db;
}

const PORTFOLIO_COLLECTION = 'portfolio';
const PORTFOLIO_DOC = 'main';

/**
 * Fetch the latest portfolio data from Firestore cloud database
 */
export async function fetchPortfolioFromFirestore(): Promise<PortfolioDatabase | null> {
  try {
    const firestore = getDb();
    const docRef = doc(firestore, PORTFOLIO_COLLECTION, PORTFOLIO_DOC);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as PortfolioDatabase;
    }
    return null;
  } catch (err) {
    console.warn('Could not fetch portfolio from Firestore, falling back to local storage:', err);
    return null;
  }
}

/**
 * Save updated portfolio database to Firestore cloud database
 */
export async function savePortfolioToFirestore(data: PortfolioDatabase): Promise<boolean> {
  try {
    const firestore = getDb();
    const docRef = doc(firestore, PORTFOLIO_COLLECTION, PORTFOLIO_DOC);
    await setDoc(docRef, {
      ...data,
      lastUpdated: new Date().toISOString(),
    }, { merge: true });
    return true;
  } catch (err) {
    console.error('Error saving portfolio to Firestore:', err);
    return false;
  }
}

/**
 * Listen for real-time portfolio updates from Firestore
 */
export function subscribeToPortfolioFirestore(
  onUpdate: (data: PortfolioDatabase) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  try {
    const firestore = getDb();
    const docRef = doc(firestore, PORTFOLIO_COLLECTION, PORTFOLIO_DOC);
    return onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const cloudData = snapshot.data() as PortfolioDatabase;
          onUpdate(cloudData);
        } else {
          // Document does not exist yet on cloud, initialize it with DEFAULT_PORTFOLIO_DATA
          savePortfolioToFirestore(DEFAULT_PORTFOLIO_DATA).catch(console.error);
        }
      },
      (error) => {
        console.warn('Firestore subscription error:', error);
        if (onError) onError(error);
      }
    );
  } catch (err) {
    console.warn('Failed to subscribe to Firestore:', err);
    return () => {};
  }
}
