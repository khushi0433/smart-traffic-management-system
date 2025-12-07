import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle, X } from 'lucide-react';

function AlertsPage() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'critical', title: 'Signal Failure', location: 'Main St & 1st Ave', time: '2 min ago', message: 'Traffic signal malfunctioning, manual control required' },
    { id: 2, type: 'high', title: 'Heavy Congestion', location: 'Broadway & 5th', time: '5 min ago', message: 'Traffic volume exceeding capacity by 40%' },
    { id: 3, type: 'medium', title: 'Camera Offline', location: 'Park Avenue', time: '15 min ago', message: 'Surveillance camera #12 not responding' },
    { id: 4, type: 'low', title: 'Routine Maintenance', location: 'University Blvd', time: '1 hour ago', message: 'Scheduled signal timing adjustment completed' },
    { id: 5, type: 'high', title: 'Accident Reported', location: 'River Road', time: '8 min ago', message: 'Minor collision blocking right lane' }
  ]);

  const getAlertIcon = (type) => {
    switch(type) {
      case 'critical': return <AlertTriangle className="h-5 w-5" />;
      case 'high': return <AlertCircle className="h-5 w-5" />;
      case 'medium': return <Info className="h-5 w-5" />;
      case 'low': return <CheckCircle className="h-5 w-5" />;
      default: return <Info className="h-5 w-5" />;
    }
  };

  const getAlertColor = (type) => {
    switch(type) {
      case 'critical': return 'border-red-500 bg-red-500/10';
      case 'high': return 'border-orange-500 bg-orange-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      case 'low': return 'border-emerald-500 bg-emerald-500/10';
      default: return 'border-blue-500 bg-blue-500/10';
    }
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-emerald-500';
      default: return 'text-blue-500';
    }
  };

  const dismissAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-200 mb-2">System Alerts</h1>
        <p className="text-gray-400">Real-time notifications and system warnings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Critical', count: alerts.filter(a => a.type === 'critical').length, color: 'red' },
          { label: 'High Priority', count: alerts.filter(a => a.type === 'high').length, color: 'orange' },
          { label: 'Medium', count: alerts.filter(a => a.type === 'medium').length, color: 'yellow' },
          { label: 'Low Priority', count: alerts.filter(a => a.type === 'low').length, color: 'emerald' }
        ].map((stat, index) => (
          <div key={index} className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
            <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
            <div className={`text-3xl font-bold text-${stat.color}-400`}>{stat.count}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-200">Active Alerts</h3>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm">
              Filter
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
              Clear All
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`border-l-4 ${getAlertColor(alert.type)} rounded-lg p-4 transition-all`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`${getIconColor(alert.type)} mt-1`}>
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-200">{alert.title}</h4>
                      <span className="text-sm text-gray-400">{alert.time}</span>
                    </div>
                    <p className="text-gray-300 mb-2">{alert.message}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">📍 {alert.location}</span>
                      <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => dismissAlert(alert.id)}
                  className="text-gray-400 hover:text-gray-200 transition-colors ml-4"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {alerts.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-200 mb-2">All Clear!</h3>
            <p className="text-gray-400">No active alerts at this time</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlertsPage;