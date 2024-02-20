import { Link } from 'react-router-dom';

const UserCard =()=>{
    return(
        <div className="row py-3"> 
        <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <div className='d-flex'>
                <img className='rounded-circle' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.audMX4ZGbvT2_GJTx2c4GgHaHw%26pid%3DApi&f=1&ipt=f53debe764a23f91a4b3d61d16192f5443ae026dcb3c7c56eb07b1024b713f86&ipo=images" height={40} width={40}/> 
                <Link to={`/profile/`} className="link text-decoration-none">
                <h5 className="px-2 py-1">Username</h5>
                </Link>
                </div>
            </div>
            <div className='row'>
            <p>Computer Engineering</p>
            <button className='btn'>Connect</button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default UserCard;