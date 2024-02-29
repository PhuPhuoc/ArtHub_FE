import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export async function addImage1(file, id) {
  try {
    if (!file) {
      console.error("No file provided.");
      return;
    }

    const imageRef = ref(storage, `images/${id}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.error("Error uploading image:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("Image uploaded successfully!");
          console.log("Download URL:", downloadURL);
        });
      }
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export async function getImage(id) {
  const storageRef = ref(storage, `images/${id}`);
  return getDownloadURL(storageRef);
}
