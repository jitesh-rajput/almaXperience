import { db,storage ,auth} from './Config';
import { collection, addDoc } from 'firebase/firestore';
import { ResizeAndCompressImage } from './ResizeAndCompressImage';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
const UploadTweet = async (formData) => {
    try {
      const tweetData = {
        uid:auth.currentUser.uid,
        thought: formData.thought,
        photoUrl: null,
        likescount:0,
        comments:[],
        timestamp: new Date(),
      };

      // Upload photo to Firebase Storage
      if (formData.photo) {
        const compressedPhoto = await ResizeAndCompressImage(formData.photo);
        console.log('Image compressed:', compressedPhoto);
        const photoRef = ref(storage, `feedPhotos/${formData.photo.name}`);
        // Upload the file to Cloud Storage
        await uploadBytes(photoRef, formData.photo);
        // Get the download URL of the uploaded file
        const photoURL = await getDownloadURL(photoRef);
        console.log('Photo uploaded. URL:', photoURL);
        tweetData.photoUrl=photoURL;
      }
      const docRef = await addDoc(collection(db, 'tweets'), tweetData);
      console.log('Tweet uploaded successfully!');
      return true;
    } catch (error) {
      console.error('Error uploading tweet:', error);
      return false;
    }
  };

export default UploadTweet;