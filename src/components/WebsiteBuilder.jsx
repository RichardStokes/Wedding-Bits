import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { 
  Layout, 
  Type, 
  Image as ImageIcon, 
  PlusCircle, 
  Trash2, 
  Eye, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Save, 
  Palette, 
  List, 
  Globe,
  MapPin,
  CheckCircle
} from 'lucide-react';
import IrishWeddingElements from './IrishWeddingElements';

const initialContent = [
  { id: 'section-1', type: 'hero', data: { title: 'Welcome to Our Wedding!', subtitle: 'Sarah & James', date: '15 September 2024', image: 'https://via.placeholder.com/1200x600?text=Your+Wedding+Hero+Image' } },
  { id: 'section-2', type: 'text', data: { heading: 'Our Story', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' } },
  { id: 'section-3', type: 'gallery', data: { heading: 'Photo Gallery', images: ['https://via.placeholder.com/300?text=Photo+1', 'https://via.placeholder.com/300?text=Photo+2', 'https://via.placeholder.com/300?text=Photo+3'] } },
];

const WebsiteBuilder = () => {
  const [content, setContent] = useState(initialContent);
  const [selectedTemplate, setSelectedTemplate] = useState('celtic-elegance');
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop', 'tablet', 'mobile'
  const [activeSection, setActiveSection] = useState(null);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newContent = Array.from(content);
    const [reorderedItem] = newContent.splice(result.source.index, 1);
    newContent.splice(result.destination.index, 1);
    setContent(newContent);
  };

  const addSection = (type) => {
    const newSection = {
      id: `section-${Date.now()}`,
      type,
      data: getDefaultContent(type),
    };
    setContent([...content, newSection]);
  };

  const deleteSection = (id) => {
    setContent(content.filter(section => section.id !== id));
  };

  const updateSectionData = (id, newData) => {
    setContent(content.map(section => 
      section.id === id ? { ...section, data: { ...section.data, ...newData } } : section
    ));
  };

  const getDefaultContent = (type) => {
    switch (type) {
      case 'hero':
        return { title: 'Our Special Day', subtitle: 'Bride & Groom', date: 'DD Month YYYY', image: 'https://via.placeholder.com/1200x600?text=Hero+Image' };
      case 'text':
        return { heading: 'New Section', content: 'Add your text here.' };
      case 'gallery':
        return { heading: 'Our Photos', images: ['https://via.placeholder.com/300?text=Image+1'] };
      case 'irish-blessing':
        return { heading: 'An Irish Blessing', content: IrishWeddingElements.blessings[0] };
      case 'irish-tradition':
        return { heading: 'Irish Wedding Traditions', content: IrishWeddingElements.traditions[0].description };
      case 'irish-venue':
        return { heading: 'Our Irish Venue', name: 'Virginia Park Lodge', location: 'County Cavan, Ireland', description: 'A beautiful Irish country house for your special day.', image: 'https://via.placeholder.com/600x400?text=Virginia+Park+Lodge' };
      case 'rsvp':
        return { heading: 'RSVP', instructions: 'Please RSVP by [Date]' };
      default:
        return {};
    }
  };

  const renderSection = (section) => {
    switch (section.type) {
      case 'hero':
        return (
          <div className="relative h-96 bg-cover bg-center text-white flex flex-col justify-center items-center p-4" style={{ backgroundImage: `url(${section.data.image})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <h1 className="text-5xl font-bold text-center relative z-10">{section.data.title}</h1>
            <p className="text-2xl relative z-10 mt-2">{section.data.subtitle}</p>
            <p className="text-xl relative z-10 mt-1">{section.data.date}</p>
          </div>
        );
      case 'text':
        return (
          <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-deep-sage mb-4">{section.data.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.data.content}</p>
          </div>
        );
      case 'gallery':
        return (
          <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-deep-sage mb-4">{section.data.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.data.images.map((img, index) => (
                <img key={index} src={img} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        );
      case 'irish-blessing':
        return (
          <div className="p-8 bg-sage-green text-white shadow-md rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 special-heading">{section.data.heading}</h2>
            <p className="text-lg leading-relaxed italic">"{section.data.content}"</p>
          </div>
        );
      case 'irish-tradition':
        return (
          <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-deep-sage mb-4">{section.data.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.data.content}</p>
          </div>
        );
      case 'irish-venue':
        return (
          <div className="p-8 bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center gap-6">
            <img src={section.data.image} alt={section.data.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
            <div>
              <h2 className="text-3xl font-bold text-deep-sage mb-2">{section.data.name}</h2>
              <p className="text-rose-gold text-xl mb-2"><MapPin className="inline-block w-5 h-5 mr-1" />{section.data.location}</p>
              <p className="text-gray-700 leading-relaxed">{section.data.description}</p>
            </div>
          </div>
        );
      case 'rsvp':
        return (
          <div className="p-8 bg-rose-gold text-white shadow-md rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">{section.data.heading}</h2>
            <p className="text-lg mb-4">{section.data.instructions}</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg text-gray-800" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg text-gray-800" />
              <textarea placeholder="Message (e.g., dietary restrictions)" className="w-full p-3 rounded-lg text-gray-800"></textarea>
              <button type="submit" className="bg-white text-rose-gold font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">Submit RSVP</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  const getTemplateStyles = (template) => {
    switch (template) {
      case 'celtic-elegance':
        return 'font-serif text-gray-800 bg-gray-50';
      case 'emerald-isle':
        return 'font-sans text-green-800 bg-green-50';
      case 'claddagh-classic':
        return 'font-serif text-red-800 bg-red-50';
      case 'dublin-modern':
        return 'font-sans text-blue-800 bg-blue-50';
      case 'wild-atlantic-way':
        return 'font-sans text-indigo-800 bg-indigo-50';
      default:
        return '';
    }
  };

  const getSectionEditor = (section) => {
    const commonInputs = (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Section ID:</label>
        <input
          type="text"
          value={section.id}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>
    );

    switch (section.type) {
      case 'hero':
        return (
          <div className="space-y-4">
            {commonInputs}
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              value={section.data.title}
              onChange={(e) => updateSectionData(section.id, { title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Subtitle:</label>
            <input
              type="text"
              value={section.data.subtitle}
              onChange={(e) => updateSectionData(section.id, { subtitle: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Date:</label>
            <input
              type="text"
              value={section.data.date}
              onChange={(e) => updateSectionData(section.id, { date: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="text"
              value={section.data.image}
              onChange={(e) => updateSectionData(section.id, { image: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        );
      case 'text':
        return (
          <div className="space-y-4">
            {commonInputs}
            <label className="block text-sm font-medium text-gray-700">Heading:</label>
            <input
              type="text"
              value={section.data.heading}
              onChange={(e) => updateSectionData(section.id, { heading: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Content:</label>
            <textarea
              value={section.data.content}
              onChange={(e) => updateSectionData(section.id, { content: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md h-32"
            ></textarea>
          </div>
        );
      case 'gallery':
        return (
          <div className="space-y-4">
            {commonInputs}
            <label className="block text-sm font-medium text-gray-700">Heading:</label>
            <input
              type="text"
              value={section.data.heading}
              onChange={(e) => updateSectionData(section.id, { heading: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Image URLs (comma-separated):</label>
            <textarea
              value={section.data.images.join(', ')}
              onChange={(e) => updateSectionData(section.id, { images: e.target.value.split(',').map(url => url.trim()) })}
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            ></textarea>
          </div>
        );
      case 'irish-blessing':
        return (
          <div className="space-y-4">
            {commonInputs}
            <label className="block text-sm font-medium text-gray-700">Heading:</label>
            <input
              type="text"
              value={section.data.heading}
              onChange={(e) => updateSectionData(section.id, { heading: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Blessing Content:</label>
            <select
              value={section.data.content}
              onChange={(e) => updateSectionData(section.id, { content: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {IrishWeddingElements.blessings.map((blessing, index) => (
                <option key={index} value={blessing}>{blessing.substring(0, 50)}...</option>
              ))}
            </select>
          </div>
        );
      case 'irish-tradition':
        return (
          <div className="space-y-4">
            {commonInputs}
            <label className="block text-sm font-medium text-gray-700">Heading:</label>
            <input
              type="text"
              value={section.data.heading}
              onChange={(e) => updateSectionData(section.id, { heading: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Tradition:</label>
            <select
              value={section.data.content}
              onChange={(e) => updateSectionData(section.id, { content: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {IrishWeddingElements.traditions.map((tradition, index) => (
                <option key={index} value={tradition.description}>{tradition.name}</option>
              ))}
            </select>
          </div>
        );
      case 'irish-venue':
        return (
          <div className="space-y-4">
            {commonInputs}
            <label className="block text-sm font-medium text-gray-700">Heading:</label>
            <input
              type="text"
              value={section.data.heading}
              onChange={(e) => updateSectionData(section.id, { heading: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Venue Name:</label>
            <input
              type="text"
              value={section.data.name}
              onChange={(e) => updateSectionData(section.id, { name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Location:</label>
            <input
              type="text"
              value={section.data.location}
              onChange={(e) => updateSectionData(section.id, { location: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={section.data.description}
              onChange={(e) => updateSectionData(section.id, { description: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            ></textarea>
            <label className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="text"
              value={section.data.image}
              onChange={(e) => updateSectionData(section.id, { image: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        );
      case 'rsvp':
        return (
          <div className="space-y-4">
            {commonInputs}
            <label className="block text-sm font-medium text-gray-700">Heading:</label>
            <input
              type="text"
              value={section.data.heading}
              onChange={(e) => updateSectionData(section.id, { heading: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700">Instructions:</label>
            <textarea
              value={section.data.instructions}
              onChange={(e) => updateSectionData(section.id, { instructions: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            ></textarea>
          </div>
        );
      default:
        return <div className="text-gray-500">No editor for this section type.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Section Tools */}
      <div className="w-64 bg-white p-4 shadow-lg overflow-y-auto">
        <h2 className="text-xl font-bold text-deep-sage mb-4">Website Builder</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Templates</h3>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="celtic-elegance">Celtic Elegance</option>
            <option value="emerald-isle">Emerald Isle</option>
            <option value="claddagh-classic">Claddagh Classic</option>
            <option value="dublin-modern">Dublin Modern</option>
            <option value="wild-atlantic-way">Wild Atlantic Way</option>
          </select>
        </div>

        <h3 className="text-lg font-semibold text-gray-700 mb-2">Add Sections</h3>
        <div className="space-y-2">
          <button onClick={() => addSection('hero')} className="w-full flex items-center space-x-2 p-2 bg-champagne rounded-md hover:bg-gray-200">
            <Layout className="w-5 h-5 text-rose-gold" /><span>Hero Section</span>
          </button>
          <button onClick={() => addSection('text')} className="w-full flex items-center space-x-2 p-2 bg-champagne rounded-md hover:bg-gray-200">
            <Type className="w-5 h-5 text-sage-green" /><span>Text Block</span>
          </button>
          <button onClick={() => addSection('gallery')} className="w-full flex items-center space-x-2 p-2 bg-champagne rounded-md hover:bg-gray-200">
            <ImageIcon className="w-5 h-5 text-rose-gold" /><span>Image Gallery</span>
          </button>
          <button onClick={() => addSection('irish-blessing')} className="w-full flex items-center space-x-2 p-2 bg-champagne rounded-md hover:bg-gray-200">
            <Globe className="w-5 h-5 text-sage-green" /><span>Irish Blessing</span>
          </button>
          <button onClick={() => addSection('irish-tradition')} className="w-full flex items-center space-x-2 p-2 bg-champagne rounded-md hover:bg-gray-200">
            <List className="w-5 h-5 text-rose-gold" /><span>Irish Tradition</span>
          </button>
          <button onClick={() => addSection('irish-venue')} className="w-full flex items-center space-x-2 p-2 bg-champagne rounded-md hover:bg-gray-200">
            <MapPin className="w-5 h-5 text-sage-green" /><span>Irish Venue Spotlight</span>
          </button>
          <button onClick={() => addSection('rsvp')} className="w-full flex items-center space-x-2 p-2 bg-champagne rounded-md hover:bg-gray-200">
            <CheckCircle className="w-5 h-5 text-rose-gold" /><span>RSVP Form</span>
          </button>
        </div>
      </div>

      {/* Main Content - Website Preview */}
      <div className="flex-1 flex flex-col items-center p-4 overflow-auto">
        <div className="flex space-x-4 mb-4">
          <button onClick={() => setViewMode('desktop')} className={`p-2 rounded-md ${viewMode === 'desktop' ? 'bg-rose-gold text-white' : 'bg-gray-200'}`}><Monitor className="w-6 h-6" /></button>
          <button onClick={() => setViewMode('tablet')} className={`p-2 rounded-md ${viewMode === 'tablet' ? 'bg-rose-gold text-white' : 'bg-gray-200'}`}><Tablet className="w-6 h-6" /></button>
          <button onClick={() => setViewMode('mobile')} className={`p-2 rounded-md ${viewMode === 'mobile' ? 'bg-rose-gold text-white' : 'bg-gray-200'}`}><Smartphone className="w-6 h-6" /></button>
        </div>

        <div className={`border-2 border-gray-300 shadow-xl overflow-y-auto ${viewMode === 'desktop' ? 'w-full max-w-4xl h-[80vh]' : viewMode === 'tablet' ? 'w-[768px] h-[80vh]' : 'w-[375px] h-[80vh]'} ${getTemplateStyles(selectedTemplate)}`}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="website-content">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-full"
                >
                  {content.map((section, index) => (
                    <Draggable key={section.id} draggableId={section.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="relative group my-4"
                          onClick={() => setActiveSection(section.id)}
                        >
                          {renderSection(section)}
                          {activeSection === section.id && (
                            <div className="absolute top-2 right-2 flex space-x-2 z-20">
                              <button 
                                onClick={(e) => { e.stopPropagation(); deleteSection(section.id); }}
                                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      {/* Right Sidebar - Section Editor */}
      <div className="w-80 bg-white p-4 shadow-lg overflow-y-auto">
        <h2 className="text-xl font-bold text-deep-sage mb-4">Section Editor</h2>
        {activeSection ? (
          getSectionEditor(content.find(s => s.id === activeSection))
        ) : (
          <p className="text-gray-500">Select a section on the left to edit its properties.</p>
        )}
      </div>
    </div>
  );
};

export default WebsiteBuilder;


