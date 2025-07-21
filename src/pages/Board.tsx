import React from "react";

interface JobCardProps {
  title: string;
  company: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company }) => (
  <div className="bg-[#C0E6BA] rounded-lg p-3 shadow hover:shadow-lg transition">
    <h3 className="font-medium text-[#013237]">{title}</h3>
    <p className="text-sm text-[#013237]/80">{company}</p>
  </div>
);

const Board: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EAF9E7] text-[#013237] font-sans flex flex-col">
      
      {/* Navbar */}
      <header className="bg-[#4CA771] text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">CareerPilot</h1>
        <nav className="flex gap-4">
          <a href="/board" className="hover:underline">Board</a>
          <a href="/contacts" className="hover:underline">Contacts</a>
          <a href="/tasks" className="hover:underline">Tasks</a>
        </nav>
      </header>

      {/* Main Board */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column: Wishlist */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-3">Wishlist</h2>
          <div className="space-y-3">
            <JobCard title="Frontend Developer" company="TechCorp" />
            <JobCard title="React Engineer" company="StartupX" />
          </div>
        </div>

        {/* Column: Applied */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-3">Applied</h2>
          <div className="space-y-3">
            <JobCard title="Backend Developer" company="CodeBase" />
          </div>
        </div>

        {/* Column: Interview */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-3">Interview</h2>
          <div className="space-y-3">
            <JobCard title="Full Stack Developer" company="NextGen" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Board;
