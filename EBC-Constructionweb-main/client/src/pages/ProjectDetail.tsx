import { useParams, useNavigate } from "react-router-dom";
import React from "react";

const completedProjects = [
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

const ongoingProjects = [
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

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idx = Number(id) - 1;
  const allProjects = [...completedProjects, ...ongoingProjects];
  const project = allProjects[idx];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Project not found</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-10">
      <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-teal-400 text-white rounded-3xl shadow-2xl p-10 w-full max-w-xl animate-fade-in">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg flex items-center gap-2">🧾 {project.client}</h2>
        <div className="mb-2 flex items-center text-blue-100 text-lg"><span className="mr-2">📍</span> {project.location}</div>
        <div className="mb-2 flex items-center text-blue-100 text-lg"><span className="mr-2">🧰</span> {project.description}</div>
        <div className="mb-4 flex items-center text-blue-100 text-lg"><span className="mr-2">💰</span> {project.value}</div>
        <span className={`inline-block px-4 py-2 rounded-full text-base font-bold w-fit ${project.status === 'Completed' ? 'bg-green-300 text-green-900' : 'bg-yellow-300 text-yellow-900'} shadow-lg mb-4`}>{project.status === 'Completed' ? '✅ Completed' : '🔄 Ongoing'}</span>
        <button className="mt-4 bg-white text-blue-700 font-bold px-6 py-2 rounded-xl shadow hover:bg-blue-100 transition" onClick={() => navigate(-1)}>Back to Projects</button>
      </div>
    </div>
  );
} 