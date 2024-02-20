import { db } from './Config';
import { collection, getDocs, doc, getDoc, query, orderBy, limit } from 'firebase/firestore';

export const fetchTweetsWithUserDetails = async (pageNumber = 1, pageSize = 30) => {
  try {
    // Query to fetch tweets sorted by time with pagination
    const tweetsQuery = query(
      collection(db, 'tweets'),
      orderBy('timestamp', 'desc'), // Sort by timestamp in descending order
      limit(pageSize), // Limit the number of tweets per page
    );

    // Fetch tweets based on the query
    const tweetsSnapshot = await getDocs(tweetsQuery);

    // Array to store tweets with user details
    const tweetsWithUserDetails = [];

    // Iterate over each tweet document
    for (const tweetDoc of tweetsSnapshot.docs) {
      // Get tweet data
      const tweetData = tweetDoc.data();

      // Fetch user details based on UID
      const userDoc = await getDoc(doc(db, 'users', tweetData.uid));
      const userData = userDoc.data();

      // Add user details to the tweet data
      const tweetWithUserDetails = {
        ...tweetData,
        userProfilePhoto: userData.profile_pic, // Assuming profile photo is stored in 'profile_pic' field
        username: userData.username, // Assuming username is stored in 'username' field
      };

      // Add tweet with user details to the array
      tweetsWithUserDetails.push(tweetWithUserDetails);
    }

    // Return the array of tweets with user details
    return tweetsWithUserDetails;
  } catch (error) {
    console.error('Error fetching tweets with user details:', error);
    return null; // Return null in case of error
  }
};
