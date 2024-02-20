import { useState,useEffect } from "react";
import React from "react";
import Header from "../Components/Header";
import TweetCard from "../Components/TweetCard";
import ShareTweetForm from "./ShareTweetForm";
import SearchUser from "./SearchUser";
import { fetchTweetsWithUserDetails } from "../../Firebase/FetchTweet";
import UserCard from "../Components/UserCard";

const Feed = () =>  {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
      const fetchTweets = async () => {
      try {
        const tweets = await fetchTweetsWithUserDetails();
        if (tweets) {
          setDatas(tweets);
        } else {
          console.log('Failed to fetch tweets with user details.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

      fetchTweets();
    }, []); 
  
    return (
        <div>
        <Header />
        <div className="container-fluid pb-5">
        <div className="container-fluid pt-5">
          <div className="row pt-5 pb-2">
            <div className="col-lg-3 m-auto mt-3 py-2 rounded shadow-lg position-fixed top-5 start-0">
              <h4 className="text-center">Connect</h4>
              <SearchUser/>
              <UserCard/>
              <UserCard/>
            </div>

            <div className="col-sm-12 col-lg-6 m-auto mt-3 py-2  rounded shadow-lg">
              <h4 className="text-center">Tweets</h4>
                {datas.map(item=>(
                <TweetCard data={item} key={item.id}/>
              ))}
            </div>
            <div className="col-lg-3 m-auto mt-3 py-2 bg-dark text-white rounded shadow-lg position-fixed top-5 end-0">
            <ShareTweetForm/>
            </div>
            
          </div>
          </div>   
        </div>
        </div>
        )
}
export default Feed;