import React from 'react';
import { AlertTriangle, Info, AlertCircle, CheckCircle } from 'lucide-react';

function AlertPanel() {
  const alerts = [
    { 
      id: 1, 
      message: 'Heavy congestion detected at Main St & 1st Ave', 
      level: 'high',
      time: '2 min ago',
      icon: AlertTriangle
    },
    { 
      id: 2, 
      message: 'Moderate traffic building at Broadway intersection', 
      level: 'medium',
      time: '5 min ago',
      icon: AlertCircle
    },
    { 
      id: 3, 
      message: 'Traffic pattern deviation detected - investigating', 
      level: 'medium',
      time: '10 min ago',
      icon: Info
    },
    { 
      id: 4, 
      message: 'Signal timing optimized at University Blvd', 
      level: 'low',
      time: '15 min ago',
      icon: CheckCircle
    }
  ];

  const getAlertStyles = (level) => {
    const baseStyles = "p-4 rounded-lg mb-3 border-l-4 ";
    switch(level) {
      case 'high':
        return baseStyles + "bg-red-50 border-red-500";
      case 'medium':
        return baseStyles + "bg-amber-50 border-amber-500";
      case 'low':
        return baseStyles + "bg-green-50 border-green-500";
      default:
        return baseStyles + "bg-blue-50 border-blue-500";
    }
  };

  const getIconColor = (level) => {
    switch(level) {
      case 'high': return "text-red-600";
      case 'medium': return "text-amber-600";
      case 'low': return "text-green-600";
      default: return "text-blue-600";
    }
  };

  return (
    <div>
      {alerts.map((alert) => {
        const Icon = alert.icon;
        return (
          <div key={alert.id} className={getAlertStyles(alert.level)}>
            <div className="flex items-start gap-3">
              <Icon className={`w-5 h-5 mt-0.5 ${getIconColor(alert.level)}`} />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{alert.message}</p>
                <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
              </div>
              <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                View
              </button>
            </div>
          </div>
        );
      })}
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            High Priority
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            Medium Priority
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Low Priority
          </span>
        </div>
        <button className="btn-secondary text-sm">
          Clear All Alerts
        </button>
      </div>
    </div>
  );
}

export default AlertPanel;