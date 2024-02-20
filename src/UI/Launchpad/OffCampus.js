import React from "react";
import JobCard from "./JobCard";
import Header from "../Components/Header";
import BottomFooter from "./BottomFooter";

class OffCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      jobs :[
        {
          "id": 1,
          "title": "Software Engineer",
          "company": "ABC Tech",
          "company_photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1hD6stryfbcokdEJmfFdCAAAAA%26pid%3DApi&f=1&ipt=0bc999705257d24ab0ac4f5a22ca36fffd6cb76fa922ee8ed159eae9598f44c1&ipo=images",
          "eligibility_criteria": "Bachelor's degree in Computer Science or related field",
          "streams_allowed": ["Computer Science", "Information Technology", "Software Engineering"],
          "apply_link": "https://example.com/apply",
          "description": "ABC Tech is seeking a talented software engineer to join our development team...",
          "important_note": "Remote work options available.",
          "last_date":"21/03/2024"
        },
        {
          "id": 2,
          "title": "Data Analyst",
          "company": "XYZ Analytics",
          "company_photo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Hgwnqel2sq-28jl77S-CBgHaEK%26pid%3DApi&f=1&ipt=d178dd1e13e607fc332a6c8399090f5876a98eac8481228de791460ebefba98a&ipo=images",
          "eligibility_criteria": "Bachelor's degree in Statistics, Mathematics, or related field",
          "streams_allowed": ["Statistics", "Mathematics", "Data Science"],
          "apply_link": "https://example.com/apply",
          "description": "XYZ Analytics is looking for a data analyst to analyze large datasets and generate insights...",
          "important_note": "Experience with SQL and Python preferred.",
          "last_date":"22/03/2024"
        }
  ]  
    };
  }

  handleSearch = () => {
    console.log(this.state.searchTerm); // Access searchTerm from state
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }); // Update searchTerm in state
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid home-bg cardcss">
          <div className="container pt-5">
            <div className="row justify-content-center pt-5 pb-2">
                <h3 className="text-center">Off Campus</h3>
                <div className="col-6">
                <div className='input-group'>
                    <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with segmented dropdown button"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary" onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
                </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
             {this.state.jobs.map((d) =>(
              <JobCard props={d}/>
             ))}
            </div>
            <BottomFooter/>
          </div>
        </div>
      </div>
    );
  }
}

export default OffCampus;
