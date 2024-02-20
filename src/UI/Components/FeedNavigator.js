import React from 'react';
import { Link } from 'react-router-dom';
import { DynamicFeed, AddBox,PersonAddAlt } from '@mui/icons-material';


const FeedNavigator = () => {
  return (
    <div className="bottom-footer py-3">
      <div className="container fixed-bottom">
        <div className="row">
          <div className="col-sm-12 col-lg-6 m-auto bg-dark rounded shadow-lg py-1">
            <div className="row text-center">
              <div className="col-3">
                <Link to="/feed">
                  <DynamicFeed style={{ fontSize: 40, color: '#fff' }} />
                </Link>
              </div>
              <div className="col-3">
                <Link to="/home/addtweet">
                  <AddBox style={{ fontSize: 40, color: '#fff' }} />
                </Link>
              </div>
              <div className="col-3">
                <Link to="/home/addfrd">
                  <PersonAddAlt style={{ fontSize: 40, color: '#fff' }} />
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedNavigator;
