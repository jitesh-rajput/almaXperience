import { Link } from 'react-router-dom';

const TweetCard = ({ data }) => {
    console.log(data)
    data=data;
    console.log(data)
    const postDate = new Date(data.timestamp.seconds * 1000);
    const formattedDate = `${postDate.getDate()}/${postDate.getMonth() + 1}/${postDate.getFullYear()}`;
    
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
                        <Link to={`/feed/${data.id}`} className="text-decoration-none">
                            <div className="card-body">
                                <p className="card-text">{data.thought}</p>
                                {data.photoUrl && <img src={data.photoUrl} className="card-img-top" height={400} width={500} alt="Post" />}
                            </div>
                        </Link>
                        <div className="card-footer text-muted">
                            <div className='row'>
                                <div className='col-4'>
                                    <p>{data.likescount}</p>
                                </div>
                                <div className='col-4'>
                                    <p>{data.comments.length}</p>
                                </div>
                                <div className='col-4'>
                                    <p>{formattedDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default TweetCard;
