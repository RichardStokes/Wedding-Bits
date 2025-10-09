import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  CheckCircle, 
  Gift, 
  MapPin, 
  MessageCircle, 
  Globe,
  Edit3
} from 'lucide-react';
import ProgressRing from './ProgressRing';
import TaskCard from './TaskCard';
import VendorCard from './VendorCard';
import BudgetTracker from './BudgetTracker';
import AIAssistant from './AIAssistant';
import WebsiteBuilder from './WebsiteBuilder';

const WeddingDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Book Wedding Photographer', category: 'Photography', dueDate: '15 Feb', priority: 'high', details: 'Research and book your wedding photographer', estimatedTime: '2-3 hours', tips: 'Research multiple options and read reviews before making a decision.', completed: false },
    { id: 2, title: 'Finalize Menu Tasting', category: 'Catering', dueDate: '20 Feb', priority: 'medium', details: 'Complete menu selection with caterer', completed: false },
    { id: 3, title: 'Send Save the Dates', category: 'Invitations', dueDate: '10 Feb', priority: 'high', details: 'Design and send save the date cards', completed: false },
    { id: 4, title: 'Book Wedding Band', category: 'Entertainment', dueDate: '25 Feb', priority: 'medium', details: 'Secure live music for ceremony and reception', completed: false },
    { id: 5, title: 'Choose Wedding Dress', category: 'Attire', dueDate: '5 Mar', priority: 'high', details: 'Find and purchase your dream wedding dress', completed: false },
    { id: 6, title: 'Select Groomsmen Suits', category: 'Attire', dueDate: '10 Mar', priority: 'medium', details: 'Coordinate suits for the groom and groomsmen', completed: false },
    { id: 7, title: 'Plan Honeymoon', category: 'Travel', dueDate: '1 Apr', priority: 'low', details: 'Research and book your honeymoon destination', completed: false },
    { id: 8, title: 'Order Wedding Cake', category: 'Catering', dueDate: '15 Apr', priority: 'medium', details: 'Choose flavors and design for your wedding cake', completed: false },
    { id: 9, title: 'Arrange Flowers', category: 'Decor', dueDate: '20 Apr', priority: 'high', details: 'Select floral arrangements for ceremony and reception', completed: false },
    { id: 10, title: 'Book Hair & Makeup Artist', category: 'Beauty', dueDate: '25 Apr', priority: 'medium', details: 'Schedule trials and book artists for the wedding day', completed: false },
    { id: 11, title: 'Finalize Guest List', category: 'Guests', dueDate: '1 May', priority: 'high', details: 'Confirm final guest count and addresses', completed: false },
    { id: 12, title: 'Send Invitations', category: 'Invitations', dueDate: '10 May', priority: 'high', details: 'Mail out wedding invitations to all guests', completed: false },
    { id: 13, title: 'Prepare Wedding Favors', category: 'Decor', dueDate: '15 May', priority: 'low', details: 'Assemble and prepare small gifts for guests', completed: false },
    { id: 14, title: 'Write Vows', category: 'Ceremony', dueDate: '1 Jun', priority: 'medium', details: 'Compose personal vows for the ceremony', completed: false },
    { id: 15, title: 'Obtain Marriage License', category: 'Legal', dueDate: '5 Jun', priority: 'high', details: 'Complete all legal requirements for marriage', completed: false },
  ]);

  const [showWebsiteBuilder, setShowWebsiteBuilder] = useState(false);

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = Math.round((completedTasks / totalTasks) * 100);

  const handleTaskCompletion = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const budget = {
    total: 25000,
    spent: 18500,
    remaining: 6500,
    usedPercentage: 74
  };

  const vendors = [
    { id: 1, name: 'Elegant Moments Photography', category: 'Photography', price: '€2,500', rating: 4.9, location: 'Dublin', tags: ['Wedding', 'Portrait'] },
    { id: 2, name: 'Garden Party Catering', category: 'Catering', price: '€85/person', rating: 4.8, location: 'Cork', tags: ['Farm-to-table', 'Vegan Options'] },
    { id: 3, name: 'Harmony Wedding Band', category: 'Entertainment', price: '€1,200', rating: 4.7, location: 'Galway', tags: ['Live Music', 'DJ Services'] },
  ];

  if (showWebsiteBuilder) {
    return <WebsiteBuilder />;
  }

  return (
    <div className="min-h-screen bg-champagne p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <img src="/src/assets/react.svg" alt="WeddingBits Logo" className="h-10" />
          <h1 className="text-3xl font-bold text-rose-gold">WeddingBits</h1>
          <p className="text-gray-600">Your AI Wedding Planner</p>
        </div>
        <div className="text-right">
          <p className="text-gray-700">Sarah & James</p>
          <p className="text-sm text-gray-500">-324 days to go! 👰🤵</p>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <section className="lg:col-span-2 space-y-8">
          {/* Welcome Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-deep-sage mb-2">Welcome back, Sarah! 👋</h2>
            <p className="text-gray-700">You're making great progress! Let's continue planning your perfect day.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-champagne p-4 rounded-lg text-center">
                <Calendar className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                <p className="text-sm text-gray-600">Wedding Date</p>
                <p className="text-lg font-semibold text-rose-gold">15 Sept 2024</p>
              </div>
              <div className="bg-champagne p-4 rounded-lg text-center">
                <Users className="w-6 h-6 text-sage-green mx-auto mb-2" />
                <p className="text-sm text-gray-600">Guest Count</p>
                <p className="text-lg font-semibold text-sage-green">120</p>
              </div>
              <div className="bg-champagne p-4 rounded-lg text-center">
                <DollarSign className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                <p className="text-sm text-gray-600">Budget Used</p>
                <p className="text-lg font-semibold text-rose-gold">{budget.usedPercentage}%</p>
              </div>
              <div className="bg-champagne p-4 rounded-lg text-center">
                <CheckCircle className="w-6 h-6 text-sage-green mx-auto mb-2" />
                <p className="text-sm text-gray-600">Tasks Done</p>
                <p className="text-lg font-semibold text-sage-green">{completedTasks}/{totalTasks}</p>
              </div>
            </div>
          </div>

          {/* Planning Progress & Upcoming Tasks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Planning Progress</h3>
              <ProgressRing progress={progress} />
              <p className="text-sm text-gray-600 mt-4">{completedTasks} of {totalTasks} completed</p>
              <p className="text-deep-sage font-medium mt-2">You're doing amazing! 🌟</p>
            </div>

            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Tasks</h3>
              <div className="space-y-4">
                {tasks.slice(0, 5).map(task => (
                  <TaskCard key={task.id} task={task} onComplete={handleTaskCompletion} />
                ))}
              </div>
              <button className="mt-6 w-full bg-sage-green text-white py-2 rounded-lg hover:bg-deep-sage transition-colors">View All</button>
            </div>
          </div>

          {/* Budget Tracker */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Budget Tracker</h3>
            <BudgetTracker budget={budget} />
          </div>
        </section>

        {/* Sidebar / Recommendations */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Recommended for You */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recommended for You</h3>
            <div className="space-y-4">
              {vendors.map(vendor => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-rose-gold text-white py-3 px-4 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center space-x-2">
                <Gift className="w-4 h-4" />
                <span>Browse Vendors</span>
              </button>
              <button className="w-full bg-sage-green text-white py-3 px-4 rounded-lg hover:bg-deep-sage transition-colors flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Find Venues</span>
              </button>
              <button 
                onClick={() => setShowWebsiteBuilder(true)}
                className="w-full bg-rose-gold text-white py-3 px-4 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>Build Website</span>
              </button>
              <button className="w-full bg-sage-green text-white py-3 px-4 rounded-lg hover:bg-deep-sage transition-colors flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Manage Guests</span>
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* AI Assistant Floating Button */}
      <AIAssistant />
    </div>
  );
};

export default WeddingDashboard;


