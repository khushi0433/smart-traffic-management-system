import React from 'react';
import DashboardGrid from '../components/DashboardGrid';
import AnalyticsPanel from '../components/AnalyticsPanel';
import MapView from '../components/MapView';

function OverviewPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-200 mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Real-time traffic monitoring and system status</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <MapView />
        </div>
        <div>
          <DashboardGrid />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsPanel />
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold text-gray-200 mb-6">Recent Incidents</h3>
          <div className="space-y-4">
            {[
              { location: 'Main St & 1st Ave', type: 'Accident', time: '5 min ago', priority: 'high' },
              { location: 'Broadway & 5th', type: 'Traffic Jam', time: '12 min ago', priority: 'medium' },
              { location: 'Park Avenue', type: 'Road Work', time: '25 min ago', priority: 'low' },
              { location: 'University Blvd', type: 'Signal Failure', time: '38 min ago', priority: 'high' }
            ].map((incident, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${incident.priority === 'high' ? 'bg-red-500' : incident.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                  <div>
                    <h4 className="font-medium text-gray-200">{incident.location}</h4>
                    <p className="text-sm text-gray-400">{incident.type}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{incident.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;