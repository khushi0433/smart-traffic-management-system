import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

function IntersectionList() {
  const intersections = [
    { id: 1, name: 'Main St & 1st Ave', status: 'high', waitTime: '68s', trend: 'up' },
    { id: 2, name: 'Broadway & 5th Ave', status: 'medium', waitTime: '42s', trend: 'stable' },
    { id: 3, name: 'Park Ave & Center St', status: 'low', waitTime: '25s', trend: 'down' },
    { id: 4, name: 'River Rd & Bridge St', status: 'high', waitTime: '75s', trend: 'up' },
    { id: 5, name: 'University Blvd', status: 'medium', waitTime: '38s', trend: 'stable' },
    { id: 6, name: 'Market Square', status: 'low', waitTime: '22s', trend: 'down' }
  ];

  const getStatusColor = (status) => {
    return {
      low: 'bg-traffic-low/20 text-traffic-low',
      medium: 'bg-traffic-medium/20 text-traffic-medium',
      high: 'bg-traffic-high/20 text-traffic-high'
    }[status];
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-green-600" />;
      default: return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-primary-800">Intersection Status</h2>
        <span className="text-sm text-gray-500">Live Updates</span>
      </div>
      
      <div className="space-y-3">
        {intersections.map((intersection) => (
          <div 
            key={intersection.id} 
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${
                intersection.status === 'high' ? 'bg-traffic-high' :
                intersection.status === 'medium' ? 'bg-traffic-medium' : 'bg-traffic-low'
              }`} />
              <div>
                <h3 className="font-semibold text-gray-800">{intersection.name}</h3>
                <p className="text-sm text-gray-600">Wait Time: {intersection.waitTime}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(intersection.status)}`}>
                {intersection.status.charAt(0).toUpperCase() + intersection.status.slice(1)}
              </span>
              {getTrendIcon(intersection.trend)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Last updated: 2 minutes ago</span>
          <button className="text-primary-600 hover:text-primary-800 font-medium">
            View All Intersections →
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntersectionList;