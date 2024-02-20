import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends React.Component {
    render() {
      return(
      <div>
      <div className="container-fluide header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand logo">
              AlmaXperience
            </Link>  
            <li className="nav-item mb-1">
                <Link to="/login" className="nav-link active" href="www.google.com">
                    Check Website
                </Link>
            </li>
          </div>
          </nav>
        </div>
      </div>

      <div className="container-fluide">
      <div className="bg">
      <div>
      <h2 className="heading">
          Elevate your journey   
          <br/>
            at  <span>PCCOER </span>
          <br/>
          with our on-campus insights and alumni connections.
      </h2>
      </div>
      </div>
      </div>

    <div className="container-fluid bg-dark text-white">
        <h2 className="text-center py-4 headline">Features</h2>
        <div className="container">
          <div className="row py-5">
          <div className="col-sm-4 text-center border border-3 rounded border-warning p-4 m-2">
            <h2> Alumni Engagement & Mentorship </h2>
          </div>
          <div className="col-sm-4 text-center border border-3 rounded border-warning p-4 m-2">
            <h2>Student Showcase Platform</h2>
          </div>
          <div className="col-sm-3 text-center border border-3 rounded border-warning p-4 m-2">
            <h2>Multiplatform Application</h2>
          </div>
          </div>

          <div className="row pb-4">
          <div className="col-sm-4 text-center border border-3 rounded border-warning p-4 m-2">
            <h2> Placed Student Information </h2>
          </div>
          <div className="col-sm-4 text-center border border-3 rounded border-warning p-4 m-2">
            <h2>Company Drive Notification</h2>
          </div>
          <div className="col-sm-3 text-center border border-3 rounded border-warning p-4 m-2">
            <h2>Experience Blogs</h2>
          </div>
          </div>
        </div>
    </div>

 
    <div className="container-fluid bg-dark">

        <h2 className="text-center py-4 headline">Download App</h2>
        <h2 className="text-center headline">About US</h2>


        <div className="container text-white">
          <div className="row py-5">
          <div className="col-sm-6">
            <h2>PCCOER</h2>
            <h5 className="py-2"><a href="https://www.pccoer.com" target="_blank">https://www.pccoer.com</a></h5>
            <h6>
            PCP, PCCOE and SBPIM are operational in Pradhikaran, Nigdi, in
            more than 10 Acres of land and having more than 4500 students on board.
            </h6>
            <h5 className="py-2">pccoer.ravet@gmail.com</h5>
          </div>
          <div className="col-sm-6">
            <h2>DEVELOPED BY</h2>
            <a className="text-info text-decoration-none" href="https://www.linkedin.com/in/jitesh-rajput-916076215/" target="_blank">Jitesh Rajput</a> <br/>
            <a className="text-info text-decoration-none" target="_blank" href="https://www.linkedin.com/in/shraddha-warade-b8a921230/">Gaurav Sonavane</a> <br/>
            <a className="text-info text-decoration-none" target="_blank" href="https://www.linkedin.com/in/nikita-badhekar-b551841aa/">Nikita Badhekar</a> <br/>
            <a className="text-info text-decoration-none" target="_blank" href="https://www.linkedin.com/in/swastik-ghonsikar-7035b6214/">Swastik Ghonsikar</a> <br/>
            <h6 className="pt-2">Prof. Tejaswini Gavhane</h6>
          </div>
          </div>
        </div>
    </div>    
</div>
      );
    }
  }

  export default Landing;