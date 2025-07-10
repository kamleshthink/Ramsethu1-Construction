import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const completedProjects = [
  { client: 'GE T&D India Ltd.', location: 'Durgapur, WB', description: 'Civil & Erection Work at WBSETCL 400kV Substation', value: '₹3.49 Cr', status: 'Completed' },
  { client: 'GE T&D India Ltd.', location: 'Dalkhola, WB', description: 'Civil & ETC Work at PGCIL Site', value: '₹1.51 Cr', status: 'Completed' },
  { client: 'Gram Oorja', location: 'Kurdeg, Simdega', description: 'PCC Poles, Transmission Lines, Insulators', value: '₹1.14 Cr (multiple WOs)', status: 'Completed' },
  { client: 'BHEL / PVUNL', location: 'Patratu, Ramgarh', description: '24 Nos. High Mast Erection (30 mtr height)', value: '₹9.72 Lakhs', status: 'Completed' },
  { client: 'Gram Oorja', location: 'Darhatand, Jharkhand', description: 'Biogas Plant Installation & Civil Works', value: '₹17.15 Lakhs', status: 'Completed' },
  { client: 'OSAM Dairy Pvt. Ltd.', location: 'Chandil & Patratu', description: '11kV/415V Line, Transformer, Earthing, DG, Wiring', value: '₹30.57 Lakhs', status: 'Completed' },
  { client: 'Azure Power', location: 'Gumla (Korle, Hisir, Barkani)', description: 'Installation of 25kWp Solar Microgrids', value: '₹20.35 Lakhs', status: 'Completed' },
  { client: 'Arka Jain University', location: 'Gamharia, Jamshedpur', description: 'Rooftop Solar PV System – 50kWp', value: '₹20 Lakhs', status: 'Completed' },
  { client: 'PRADAN', location: 'Khunti, Gumla, Raidih, Kharsawan', description: 'Solar Microgrid & Wiring Projects (Multiple WOs)', value: '₹40+ Lakhs combined', status: 'Completed' },
  { client: 'ECR & SER Railways', location: 'Tori, Chopan, Patratu, Muri, Hatia', description: 'Signaling, IBS, RTU, Telecom, DG Room, Track Work', value: '₹1.5+ Cr (multiple)', status: 'Completed' },
  { client: 'BHEL', location: 'PVUNL Patratu', description: 'CCTV System Supply & Installation', value: '₹5.41 Lakhs', status: 'Completed' },
  { client: 'Bhavani Elect. Pvt. Ltd', location: 'PVUNL Patratu', description: 'CCTV Package for Safety Park', value: '₹18.29 Lakhs', status: 'Completed' },
];

export const ongoingProjects = [
  { client: 'GE T&D India Ltd.', location: 'Kahalgaon, Bihar', description: 'Civil & Erection Work at NTPC Kahalgaon', value: '₹2.68 Cr', status: 'Ongoing' },
  { client: 'GE T&D India Ltd.', location: 'Purulia & Ramkanali (WB)', description: 'Control Room Construction – 132kV Substation', value: '₹2.97 Cr + ₹2.16 Cr', status: 'Ongoing' },
  { client: 'GE T&D India Ltd.', location: 'Purulia & Ramkanali (WB)', description: 'ETC Work – 132kV Substation', value: '₹71.25L + ₹76.66L', status: 'Ongoing' },
  { client: 'ECR - Indian Railways', location: 'Dhanbad Division', description: 'Signal Gear Removal & Gate Closure Projects', value: '₹62.67 Lakhs', status: 'Ongoing' },
  { client: 'SER - Indian Railways', location: 'Tangarbansali, Ranchi Division', description: 'Extension of Overrun Line & Additional Loop Line Work', value: '₹49.26 Lakhs', status: 'Ongoing' },
  { client: 'SER - Indian Railways', location: 'Barlanga – Harubera, Muri Division', description: 'IBS Signal Construction between Stations', value: '₹83.21 Lakhs', status: 'Ongoing' },
  { client: 'SER - Indian Railways', location: 'Ranchi Division', description: 'RTU Installation + Monitoring Equipment', value: '₹1.14 Cr', status: 'Ongoing' },
  { client: 'ECR - Indian Railways', location: 'GMO – Tori Section', description: 'Rehabilitation of Telecom Gears & Cables', value: '₹19.44 Lakhs', status: 'Ongoing' },
  { client: 'Gram Oorja', location: 'Mukunda & Hurhuri, Ranchi', description: 'Biogas Plant Installation & Allied Work', value: '₹37+ Lakhs combined', status: 'Ongoing' },
];

const allClients = Array.from(new Set([...completedProjects, ...ongoingProjects].map(p => p.client)));
const allLocations = Array.from(new Set([...completedProjects, ...ongoingProjects].map(p => p.location)));

const badgeColor = (status: string) => status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-2 hover:shadow-xl transition-all duration-200">
    <div className="font-bold text-lg mb-1">🧾 {project.client}</div>
    <div className="flex items-center text-gray-700"><span className="mr-2">📍</span> <span>{project.location}</span></div>
    <div className="flex items-center text-gray-700"><span className="mr-2">🧰</span> <span>{project.description}</span></div>
    <div className="flex items-center text-gray-700"><span className="mr-2">💰</span> <span>{project.value}</span></div>
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold w-fit ${badgeColor(project.status)}`}>{project.status === 'Completed' ? '✅ Completed' : '🔄 Ongoing'}</span>
    <button className="mt-2 text-blue-600 underline text-xs">View Project Case Study</button>
  </div>
);

const Projects: React.FC<{ compactHeading?: boolean }> = ({ compactHeading }) => {
  const [activeTab, setActiveTab] = useState<'Completed' | 'Ongoing'>('Completed');
  const [clientFilter, setClientFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Home page par compactHeading true pass karo
  const isHome = compactHeading || location.pathname === "/";

  const projects = activeTab === 'Completed' ? completedProjects : ongoingProjects;
  const filtered = projects.filter(p =>
    (clientFilter ? p.client === clientFilter : true) &&
    (locationFilter ? p.location === locationFilter : true)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className={`${isHome ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl"} font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-1 animate-fade-in`}>
          PROJECT PORTFOLIO
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-blue-700 mb-6 animate-fade-in-slow">
          Excellence Delivered. Trust Engineered.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <button onClick={() => setActiveTab('Completed')} className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-all duration-200 ${activeTab === 'Completed' ? 'border-blue-600 text-blue-800 bg-blue-50 shadow' : 'border-transparent text-gray-500 bg-gray-100'}`}>✅ Completed Projects</button>
        <button onClick={() => setActiveTab('Ongoing')} className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-all duration-200 ${activeTab === 'Ongoing' ? 'border-yellow-500 text-yellow-800 bg-yellow-50 shadow' : 'border-transparent text-gray-500 bg-gray-100'}`}>🔄 Ongoing Projects</button>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <select value={clientFilter} onChange={e => setClientFilter(e.target.value)} className="border rounded px-3 py-2 shadow-sm">
          <option value="">Filter by Client</option>
          {allClients.map(client => <option key={client} value={client}>{client}</option>)}
        </select>
        <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} className="border rounded px-3 py-2 shadow-sm">
          <option value="">Filter by Location</option>
          {allLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
        {(clientFilter || locationFilter) && (
          <button onClick={() => { setClientFilter(''); setLocationFilter(''); }} className="ml-2 text-sm text-red-500 underline">Clear Filters</button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, idx) => (
          <div key={idx} className="rounded-2xl shadow-xl p-6 bg-gradient-to-br from-blue-700 via-blue-500 to-teal-400 text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
            <div className="font-extrabold text-2xl mb-2 flex items-center gap-2">
              🧾 <span className="drop-shadow-lg">{project.client}</span>
            </div>
            <div className="flex items-center text-blue-100 mb-1"><span className="mr-2">📍</span> <span>{project.location}</span></div>
            <div className="flex items-center text-blue-100 mb-1"><span className="mr-2">🧰</span> <span>{project.description}</span></div>
            <div className="flex items-center text-blue-100 mb-2"><span className="mr-2">💰</span> <span>{project.value}</span></div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold w-fit ${project.status === 'Completed' ? 'bg-green-300 text-green-900' : 'bg-yellow-300 text-yellow-900'} shadow-lg group-hover:scale-110 transition`}>
              {project.status === 'Completed' ? '✅ Completed' : '🔄 Ongoing'}
            </span>
            <div className="h-4"></div> {/* Badge aur button ke beech gap */}
            <button
              className="mt-4 text-white underline text-xs font-semibold opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => navigate(`/projects/${idx + 1}`)}
            >
              View Project Case Study
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-teal-500 transition font-bold text-lg">Download Full Project List</button>
      </div>
    </div>
  );
};

export default Projects; 