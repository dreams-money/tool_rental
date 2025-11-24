import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['All', 'Heavy Equipment', 'Demolition', 'Cleaning', 'Concrete', 'Compaction', 'Power', 'Access', 'Digging', 'Cutting'];

const toolImages: Record<string, string> = {
  'excavator-mini': 'https://images.unsplash.com/photo-1652922660696-60c68ec51582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBleGNhdmF0b3J8ZW58MXx8fHwxNzYzNjg2MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'skid-steer': 'https://images.unsplash.com/photo-1630628535113-e1cc025c8c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lkJTIwc3RlZXIlMjBsb2FkZXJ8ZW58MXx8fHwxNzYzNjg2MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'jackhammer': 'https://images.unsplash.com/photo-1582284168532-ef7b89baa1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWNraGFtbWVyJTIwZGVtb2xpdGlvbnxlbnwxfHx8fDE3NjM2ODYyODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'pressure-washer': 'https://images.unsplash.com/photo-1592365559101-19adfefdf294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMHdhc2hlcnxlbnwxfHx8fDE3NjM2ODYyODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'concrete-mixer': 'https://images.unsplash.com/photo-1690719744562-249937b9c03a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMG1peGVyfGVufDF8fHx8MTc2MzYxODc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'plate-compactor': 'https://images.unsplash.com/photo-1729944950511-e9c71556cfd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0ZSUyMGNvbXBhY3RvcnxlbnwxfHx8fDE3NjM2ODYyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'generator-7500': 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdlbmVyYXRvcnxlbnwxfHx8fDE3NjM2ODYyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'scaffold-set': 'https://images.unsplash.com/photo-1635961365604-c001fd0ea2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FmZm9sZCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjM2ODYyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'post-hole-digger': 'https://images.unsplash.com/photo-1551868561-f2cdee310ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdlciUyMGRyaWxsfGVufDF8fHx8MTc2MzY4NjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  'tile-saw': 'https://images.unsplash.com/photo-1574679322295-61db3505f217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwc2F3fGVufDF8fHx8MTc2MzY4NjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'carpet-cleaner': 'https://images.unsplash.com/photo-1644743694668-920c3e5d05b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBjbGVhbmVyfGVufDF8fHx8MTc2MzY4NjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'chainsaw': 'https://images.unsplash.com/photo-1474742817425-9f91918183b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpbnNhd3xlbnwxfHx8fDE3NjM2ODYyODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="mb-8 text-[#0076A8]">Browse Our Equipment</h1>
      
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-[#0076A8] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map(tool => (
          <Link
            key={tool.id}
            to={`/tools/${tool.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={toolImages[tool.id]}
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-[#F2B134] text-[#0076A8] rounded-full text-sm mb-3">
                {tool.category}
              </div>
              <h3 className="mb-2 text-[#0076A8]">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Daily Rate</div>
                  <div className="text-[#0076A8]">${tool.dailyRate}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Weekly Rate</div>
                  <div className="text-[#0076A8]">${tool.weeklyRate}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
