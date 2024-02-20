import React from 'react';
import StudentTable from './StudentTable';
import Header from '../Components/Header';
import BottomFooter from './BottomFooter';

const Placements = () => {
  // Example student data
  const studentData = [
    { name: 'John', branch: 'Computer Science', year: '2023', company: 'ABC Corp', package: '$100,000' },
    { name: 'Jane', branch: 'Electrical Engineering', year: '2022', company: 'XYZ Inc', package: '$90,000' },
    { name: 'John', branch: 'Computer Science', year: '2023', company: 'ABC Corp', package: '$100,000' },
    { name: 'Jane', branch: 'Electrical Engineering', year: '2022', company: 'XYZ Inc', package: '$90,000' },
    { name: 'John', branch: 'Computer Science', year: '2023', company: 'ABC Corp', package: '$100,000' },
    { name: 'Jane', branch: 'Electrical Engineering', year: '2022', company: 'XYZ Inc', package: '$90,000' },
    { name: 'John', branch: 'Computer Science', year: '2023', company: 'ABC Corp', package: '$100,000' },
    { name: 'Jane', branch: 'Electrical Engineering', year: '2022', company: 'XYZ Inc', package: '$90,000' }
  ];

  return (
    <div>
      <Header/>
      <div className="container mt-5 pt-5">
        <h1>Our Placements</h1>
        <StudentTable data={studentData} />
      </div>
      <BottomFooter/>
    </div>
  );
};

export default Placements;
