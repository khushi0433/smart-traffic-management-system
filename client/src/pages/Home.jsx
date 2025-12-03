import React from 'react';
import Dashboard from '../components/Dashboard';
import IntersectionList from '../components/IntersectionList';
import TrafficChart from '../components/TrafficChart';
import AlertPanel from '../components/AlertPanel';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Smart Traffic Management System</h1>
          <p className="text-primary-200 mt-2">Real-time traffic monitoring and optimization dashboard</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Dashboard />
          <IntersectionList />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 pb-2 border-b border-gray-200">
            Traffic Analytics
          </h2>
          <TrafficChart />
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 pb-2 border-b border-gray-200">
            System Alerts
          </h2>
          <AlertPanel />
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>STMS Dashboard © 2024 | Smart Traffic Management System</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;