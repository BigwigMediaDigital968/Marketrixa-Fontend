// lib/uploadImage.ts

import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadImageToFirebase(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(storage, `blogs/${fileName}`);

  const snapshot = await uploadBytes(storageRef, file);

  const downloadURL = await getDownloadURL(snapshot.ref);

  return downloadURL;
}

export async function deleteImageFromFirebase(downloadURL: string) {
  try {
    const imageRef = ref(storage, downloadURL);

    await deleteObject(imageRef);

    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
}