import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState ,useEffect} from 'react';
import { likeTweet,unlikeTweet,commentSubmit,getTweetLikes } from '../../Firebase/FetchTweet';
import { auth } from '../../Firebase/Config';
import { useAuth } from '../../Context/AuthContext';

const TweetCard = ({ data }) => {
    useEffect(() => {
        const fetchTweetLikes = async () => {
            const { totalLikes, currentUserLiked } = await getTweetLikes(data.id);
            console.log('Total likes:', totalLikes);
            console.log('Current user liked:', currentUserLiked);
            setIsLiked(currentUserLiked);
            setLike(totalLikes);
        };
        fetchTweetLikes();
    }, [data.id]);
    const {currentUser}=useAuth();
    const [isLiked,setIsLiked]=useState(false);
    const [like, setLike] = useState(data.likescount);
    const [expanded, setExpanded] = useState(false); // State to track if tweet is expanded


    const handleLike = () => {
        if(isLiked) {
            setIsLiked(false);
            setLike(like-1);
            unlikeTweet(data.id,auth.currentUser.uid);
        }
        else{
            setIsLiked(true);
            setLike(like+1);
            likeTweet(data.id,auth.currentUser.uid);
        }
        console.log(like);
    };

    const [commentText, setCommentText] = useState('');
    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };
    const handleCommentSubmit = () => {
        console.log('Comment submitted:', commentText);
        commentSubmit(commentText,data.id,currentUser);
        setCommentText('');
    };

    const postDate = new Date(data.timestamp.seconds * 1000);
    const formattedDate = `${postDate.getDate()}/${postDate.getMonth() + 1}/${postDate.getFullYear()}`;
    const formattedTime = `${postDate.getHours()}:${postDate.getMinutes()}`;   
    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    const renderFullTweet = () => {
        return (
            <div>
                <p>Comments:- </p>
                {data.comments.map((comment, index) => (
                    <div key={index}>
                        <p><strong>User:</strong> {comment.username}</p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="py-3 mx-3">
            <div className="row">
                    <div className="card">
                        <div className="d-flex card-header">
                            <img className='rounded-circle' src={data.userProfilePhoto} height={35} width={35} alt="Profile" />
                            <Link to={`/profile/${data.uid}`} className="link text-decoration-none">
                                <h5 className="px-2 py-1">{data.username}</h5>
                            </Link>
                        </div>
                            <div className="card-body">
                            {/* Toggle tweet expansion on text click */}
                            <p onClick={toggleExpand} style={{ cursor: 'pointer' }}>{data.thought}</p>
                            {data.photoUrl && <img src={data.photoUrl} className="card-img-top" height={400} width={500} alt="Post" />}
                            </div>
                        <div className="card-footer">
                            <div className='row'>
                                <div className='col-2 d-flex'>
                                <IconButton onClick={handleLike} color={isLiked ? 'secondary' : 'default'}>
                                    <FavoriteIcon />
                                </IconButton>
                                    <p>{like}</p>
                                </div>
                                <div className='col-7 d-flex align-items-center'>
                                <TextField
                                    value={commentText}
                                    onChange={handleCommentChange}
                                    label="Add a comment"
                                    variant="outlined"
                                    size="small"
                                    fullWidth  
                                />
                                <IconButton onClick={handleCommentSubmit}>
                                    <SendIcon />
                                </IconButton>
                                </div>
                                <div className='col-3'>
                                    <p className='text-xs'>{formattedDateTime}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Render full tweet if expanded */}
                        {expanded && renderFullTweet()}
                    </div>
            </div>
        </div>
    );
};

export default TweetCard;
