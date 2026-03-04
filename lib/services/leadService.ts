import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { LeadFormData } from "../schemas/leadSchema";

export async function createLead(data: LeadFormData) {
  await addDoc(collection(db, "leads"), {
    ...data,
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
    createdAt: serverTimestamp()
  });
}