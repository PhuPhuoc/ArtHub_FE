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
export async function downloadImage(id) {
  try {
    const url = await getImage(id);
    const response = await fetch(url);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    // Create a link element and trigger a download
    const link = document.createElement("a");
    link.href = objectURL;
    link.download = `image_${id}.jpg`; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
