import { useState,useEffect } from "react";
import React from "react";
import Header from "../Components/Header";
import TweetCard from "../Components/TweetCard";
import ShareTweetForm from "./ShareTweetForm";
import SearchUser from "./SearchUser";
import { fetchTweetsWithUserDetails } from "../../Firebase/FetchTweet";
import UserCard from "../Components/UserCard";

const Feed = () =>  {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastTweetTimestamp, setLastTweetTimestamp] = useState(null); // Keep track of the timestamp of the last fetched tweet
  const fetchTweets = async () => {
    setLoading(true);
    try {
      const fetchedTweets = await fetchTweetsWithUserDetails(lastTweetTimestamp);
      if (fetchedTweets.length > 0) {
        setLastTweetTimestamp(fetchedTweets[fetchedTweets.length - 1].timestamp);
        setTweets((prevTweets) => [...prevTweets, ...fetchedTweets]); // Append new tweets to existing ones
      }
      setLoading(false);
      console.log(tweets)
    } catch (error) {
      console.error('Error fetching tweets:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTweets(); // Call the fetch function
  }, []);
    return (
        <div>
        <Header />
        <div className="container-fluid pt-5 mt-5">
          <div className="row pt5 pb-2">
            <div className="col-lg-3 m-auto mt-3 py-2 rounded shadow-lg position-fixed top-5 start-0">
              <h4 className="text-center">Connect</h4>
              <SearchUser/>
              <UserCard/>
              <UserCard/>
            </div>

            <div className="col-sm-12 col-lg-6 m-auto mt-3 py-2  rounded shadow-lg">
              <h4 className="text-center">Tweets</h4>
              {/* Use map here because we want only uniqu post */}
              {[...new Map(tweets.map((item) => [item.id, item])).values()].map((uniqueItem) =>(
                <TweetCard data={uniqueItem} key={uniqueItem.id}/>
              ))}
              <button className="btn" onClick={fetchTweets}>Load Post ...</button>
            </div>
            <div className="col-lg-3 m-auto mt-3 py-2 rounded shadow-lg position-fixed top-5 end-0">
            <ShareTweetForm/>
            </div>
            
          </div>
          </div>   
        </div>
        )
}
export default Feed;