import React, { useState } from 'react';
import {
  CheckCircle, Info, Calendar, Tag, Clock, Lightbulb,
  Camera, Utensils, Mail, Music, Shirt, Plane,
  Sparkles, Sparkle, Users, Heart, Gavel
} from 'lucide-react';

const TaskCard = ({ task, onComplete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const priorityColors = {
    high: 'text-rose-gold',
    medium: 'text-sage-green',
    low: 'text-gray-500',
  };

  const categoryIcons = {
    Photography: <Camera className="w-4 h-4" />,
    Catering: <Utensils className="w-4 h-4" />,
    Invitations: <Mail className="w-4 h-4" />,
    Entertainment: <Music className="w-4 h-4" />,
    Attire: <Shirt className="w-4 h-4" />,
    Travel: <Plane className="w-4 h-4" />,
    Decor: <Sparkles className="w-4 h-4" />,
    Beauty: <Sparkle className="w-4 h-4" />,
    Guests: <Users className="w-4 h-4" />,
    Ceremony: <Heart className="w-4 h-4" />,
    Legal: <Gavel className="w-4 h-4" />,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onComplete?.(task.id)}
            className="form-checkbox h-5 w-5 text-rose-gold rounded-full border-gray-300 focus:ring-rose-gold"
          />
          <span className={`ml-3 text-lg font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {task.title}
          </span>
        </div>
        {task.completed ? (
          <CheckCircle className="text-sage-green w-5 h-5" />
        ) : (
          categoryIcons[task.category] || <Info className="w-5 h-5 text-gray-400" />
        )}
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
        <span className={`flex items-center ${priorityColors[task.priority] || ''}`}>
          <Tag className="w-3 h-3 mr-1" />
          {task.priority?.charAt(0).toUpperCase() + task.priority?.slice(1)}
        </span>
        {task.dueDate && (
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" /> Due {task.dueDate}
          </span>
        )}
      </div>

      <button
        onClick={() => setShowDetails((s) => !s)}
        className="text-sm text-rose-gold hover:underline mt-2"
      >
        {showDetails ? 'Less details' : 'More details'}
      </button>

      {showDetails && (
        <div className="mt-4 p-3 bg-champagne rounded-md text-gray-700 text-sm">
          {task.details && <p className="mb-2">{task.details}</p>}
          {task.estimatedTime && (
            <p className="flex items-center mb-1">
              <Clock className="w-4 h-4 mr-2 text-sage-green" />
              Estimated Time: {task.estimatedTime}
            </p>
          )}
          {task.tips && (
            <p className="flex items-center">
              <Lightbulb className="w-4 h-4 mr-2 text-rose-gold" />
              Tips: {task.tips}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskCard;