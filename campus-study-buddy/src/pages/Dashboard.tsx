import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardCards from '../components/BuddySearch';
import CourseList from '../components/Courses';
import Calendar from '../components/Calendar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <DashboardCards />
          <CourseList />
          <Calendar />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
