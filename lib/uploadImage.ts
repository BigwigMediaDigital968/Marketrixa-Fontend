// lib/uploadImage.ts

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadImageToFirebase(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(storage, `blogs/${fileName}`);

  const snapshot = await uploadBytes(storageRef, file);

  const downloadURL = await getDownloadURL(snapshot.ref);

  return downloadURL;
}