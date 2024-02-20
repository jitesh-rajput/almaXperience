import React, { useState } from 'react';
import Header from '../Components/Header';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    branch: 'Computer Science',
    year: '2023',
    tweets: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    blogs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: 'React, JavaScript, HTML, CSS',
    experience: 'Frontend Developer Intern at ABC Company',
    education: 'Bachelor of Technology in Computer Science',
  });
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(userData.name);
  const [branch, setBranch] = useState(userData.branch);
  const [year, setYear] = useState(userData.year);
  const [tweets, setTweets] = useState(userData.tweets);
  const [blogs, setBlogs] = useState(userData.blogs);
  const [skills, setSkills] = useState(userData.skills);
  const [experience, setExperience] = useState(userData.experience);
  const [education, setEducation] = useState(userData.education);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setUserData({
      name,
      branch,
      year,
      tweets,
      blogs,
      skills,
      experience,
      education,
    });
    setEditMode(false);
  };

  return (
    <div>
    <Header/>
    <div className="container mt-5 pt-5">
      {editMode ? (
        <div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="branch" className="form-label">Branch</label>
            <input type="text" className="form-control" id="branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">Year</label>
            <input type="text" className="form-control" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="tweets" className="form-label">Tweets</label>
            <input type="text" className="form-control" id="tweets" value={tweets} onChange={(e) => setTweets(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="blogs" className="form-label">Blogs</label>
            <input type="text" className="form-control" id="blogs" value={blogs} onChange={(e) => setBlogs(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">Skills</label>
            <input type="text" className="form-control" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="experience" className="form-label">Experience</label>
            <input type="text" className="form-control" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="education" className="form-label">Education</label>
            <input type="text" className="form-control" id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Branch:</strong> {userData.branch}</p>
          <p><strong>Year:</strong> {userData.year}</p>
          <p><strong>Tweets:</strong> {userData.tweets}</p>
          <p><strong>Blogs:</strong> {userData.blogs}</p>
          <p><strong>Skills:</strong> {userData.skills}</p>
          <p><strong>Experience:</strong> {userData.experience}</p>
          <p><strong>Education:</strong> {userData.education}</p>
          <button type="button" className="btn btn-primary" onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
