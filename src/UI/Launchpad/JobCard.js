import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const JobCard =(data)=>{
    data=data.props
    console.log(data);
    return(
        <div className="row py-3"> 
        <div className="col-sm-12 col-lg-6 m-auto">
        <div className="card">
        <div className="card-body">
                <div className='d-flex'>
                <img src={data.company_photo} height={50} /> 
                <h6 className="px-2 py-1 fw-bold">{data.title} At {data.company}</h6>
                </div>
                <div className="pt-2">
                <p>description:- {data.description}</p>
                <p>Eligibility Criteria :-  {data.eligibility_criteria}</p>
                <p>Streams Allowed: {data.streams_allowed.join(', ')}</p>
                <p> Important Note :- {data.important_note}</p>
                <p> Last Date :- {data.last_date}</p>
                <Link className="btn py-2" to={data.apply_link}> Apply</Link>
                </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default JobCard;