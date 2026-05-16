import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Back button */}
      <HashLink to="/#projects" className="text-emerald-400 hover:underline">← Back to Portfolio</HashLink>
      
      {/* Dynamic Title */}
      <h1 className="text-4xl font-bold mt-6 capitalize">{id.replace('-', ' ')} Details</h1>
      
      {/* Your layout blocks go here */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h2 className="text-xl font-semibold mb-3">About the Project</h2>
          <p className="text-slate-400">This is where the description for {id} will go.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <p className="text-slate-400">React, Tailwind CSS, Vite</p>
        </div>
      </div>
    </div>
  );
}