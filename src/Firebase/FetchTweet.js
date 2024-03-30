import { db,auth } from './Config';
import { collection, getDocs, doc, getDoc, query, orderBy, limit, startAfter,updateDoc,arrayRemove,arrayUnion } from 'firebase/firestore';

const likeTweet = async (tweetId, userId) => {
  try {
    const tweetRef = doc(db, 'tweets', tweetId);
    await updateDoc(tweetRef, {
      likes: arrayUnion(userId)
    });
    console.log('Tweet liked successfully');
  } catch (error) {
    console.error('Error liking tweet:', error);
  }
};

const unlikeTweet = async (tweetId, userId) => {
  try {
    const tweetRef = doc(db, 'tweets', tweetId);
    await updateDoc(tweetRef, {
      likes: arrayRemove(userId)
    });
    console.log('Tweet unliked successfully');
  } catch (error) {
    console.error('Error unliking tweet:', error);
  }
};

const getTweetLikes = async (tweetId) => {
  try {
    const tweetRef = doc(db, 'tweets', tweetId);
    const tweetSnapshot = await getDoc(tweetRef);
    if (tweetSnapshot.exists()) {
      const tweetData = tweetSnapshot.data();
      const totalLikes = tweetData.likes ? tweetData.likes.length : 0;
      const currentUserLiked = tweetData.likes ? tweetData.likes.includes(auth.currentUser.uid) : false;
      return { totalLikes, currentUserLiked };
    } else {
      console.error('Tweet not found');
      return null;
    }
  } catch (error) {
    console.error('Error getting tweet likes:', error);
    return null;
  }
};


export const fetchTweetsWithUserDetails = async (lastTimestamp = null, pageSize = 3) => {
  try {
    let tweetsQuery;
    console.log("Calledddd ")
    if (lastTimestamp) {
      // If lastTimestamp is provided, start fetching tweets after that timestamp
      tweetsQuery = query(
        collection(db, 'tweets'),
        orderBy('timestamp', 'desc'),
        startAfter(lastTimestamp),
        limit(pageSize)
      );
    } else {
      // If lastTimestamp is not provided, fetch the initial set of tweets
      tweetsQuery = query(
        collection(db, 'tweets'),
        orderBy('timestamp', 'desc'),
        limit(pageSize)
      );
    }

    const tweetsSnapshot = await getDocs(tweetsQuery);

    const tweetsWithUserDetails = [];

    for (const tweetDoc of tweetsSnapshot.docs) {
      const tweetData = tweetDoc.data();

      const userDoc = await getDoc(doc(db, 'users', tweetData.uid));
      const userData = userDoc.data();

      const tweetWithUserDetails = {
        ...tweetData,
        userProfilePhoto: userData.profile_pic,
        username: userData.username,
      };

      tweetsWithUserDetails.push(tweetWithUserDetails);
    }

    return tweetsWithUserDetails;
  } catch (error) {
    console.error('Error fetching tweets with user details:', error);
    return null;
  }
};

const commentSubmit = async (commentText,id,currentUser) => {
  try {
    console.log(currentUser);
      // Ensure comment text is not empty
      if (commentText.trim() === '') {
          return;
      }
      // Update the comments array in Firestore
      const tweetRef = doc(db, 'tweets', id);
      await updateDoc(tweetRef, {
          comments: arrayUnion({
              userId: currentUser.uid,
              text: commentText.trim(),
          })
      });
      console.log('Comment added successfully');
  } catch (error) {
      console.error('Error adding comment:', error);
  }
};

export{getTweetLikes,likeTweet,unlikeTweet,commentSubmit};