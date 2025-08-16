import React from 'react';

const courses = [
  { title: 'History of graphic design', progress: 25, rating: 4.3 },
  { title: 'App Design Course', progress: 25, rating: 4.3 },
  { title: 'Digital painting', progress: 25, rating: 4.3 },
];

const CourseList: React.FC = () => {
  return (
    <div className="bg-white rounded p-4 shadow">
      <h2 className="font-semibold mb-4">My Courses</h2>
      {courses.map((course) => (
        <div key={course.title} className="mb-3">
          <div className="flex justify-between mb-1">
            <span>{course.title}</span>
            <span>{course.rating} ★</span>
          </div>
          <div className="w-full bg-gray-200 rounded h-2">
            <div className="bg-green-500 h-2 rounded" style={{ width: `${course.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
