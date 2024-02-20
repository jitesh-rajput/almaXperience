import { Link ,useLocation} from 'react-router-dom';
import React,{ useEffect,useState } from 'react';

const BottomFooter = ()=>{
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
  
    useEffect(() => {
      const pathname = location.pathname;
      const activeMatch = pathname.includes('launchpad/offcampus') ? 'offcampus' :
                         pathname.includes('launchpad/placements') ? 'placements' :
                         pathname.includes('launchpad/info') ? 'info' :
                         'launchpad';
      console.log("match  "+activeMatch);
      if (activeMatch) {
        setActiveLink(activeMatch);
      }
    }, [location.pathname]);

    return(
        <div>
          <div className="container fixed-bottom py-3">
          <div className="row">
            <div className="col-sm-12 col-lg-6 m-auto bg-dark rounded shadow-lg py-3">
            <div className="row text-center">
            <div className="col-3">
            <Link to="/launchpad" className={`p-2 text-center ${
                    activeLink === 'launchpad' ? 'text-white' : ''
                  }`}>
                On Campus
            </Link>
            </div>
            <div className="col-3">
            <Link to="/launchpad/offcampus" className={`p-2 text-center ${
                    activeLink === 'offcampus' ? 'text-white' : ''
                  }`}>
                Off Campus
            </Link>
            </div>
            <div className="col-3">
            <Link to="/launchpad/placements" className={`p-2 text-center ${
                    activeLink === 'placements' ? 'text-white' : ''
                  }`}>
                Placements
            </Link>
            </div>
            <div className="col-3">
            <Link to="/launchpad/info" className={`p-2 text-center ${
                    activeLink === 'info' ? 'text-white' : ''
                  }`}>
                Info
            </Link>
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default BottomFooter;