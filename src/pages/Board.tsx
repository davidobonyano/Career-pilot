import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import BoardColumn from "../components/BoardColumn";
import AddJobModal from "../components/AddJobModal";

// Temporary inline type – we will move this to jobs.types.ts
interface Job {
  id: string;
  title: string;
  company: string;
}

type ColumnJobs = {
  [key: string]: Job[];
};

const initialData: ColumnJobs = {
  wishlist: [
    { id: "1", title: "Frontend Developer", company: "TechCorp" },
    { id: "2", title: "React Engineer", company: "StartupX" },
  ],
  applied: [{ id: "3", title: "Backend Developer", company: "CodeBase" }],
  interview: [{ id: "4", title: "Full Stack Developer", company: "NextGen" }],
};

const Board: React.FC = () => {
  const [columns, setColumns] = useState<ColumnJobs>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({ title: "", company: "", column: "wishlist" });

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const items = Array.from(columns[source.droppableId]);
      const [moved] = items.splice(source.index, 1);
      items.splice(destination.index, 0, moved);
      setColumns({ ...columns, [source.droppableId]: items });
    } else {
      const start = Array.from(columns[source.droppableId]);
      const [moved] = start.splice(source.index, 1);
      const end = Array.from(columns[destination.droppableId]);
      end.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: start,
        [destination.droppableId]: end,
      });
    }
  };

  const handleAddJob = () => {
    if (!newJob.title.trim() || !newJob.company.trim()) return;
    const newId = Date.now().toString();
    const updatedColumn = [
      ...columns[newJob.column],
      { id: newId, title: newJob.title, company: newJob.company },
    ];
    setColumns({ ...columns, [newJob.column]: updatedColumn });
    setShowModal(false);
    setNewJob({ title: "", company: "", column: "wishlist" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAF9E7] via-[#C0E6BA] to-[#EAF9E7] text-[#013237] font-sans flex flex-col">
      {/* Navbar */}
      <header className="bg-[#4CA771] text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">CareerPilot</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="/board" className="hover:underline underline-offset-4">Board</a>
          <a href="/contacts" className="hover:underline underline-offset-4">Contacts</a>
          <a href="/tasks" className="hover:underline underline-offset-4">Tasks</a>
        </nav>
      </header>

      {/* Board Columns */}
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(columns).map(([colId, jobs]) => (
            <BoardColumn key={colId} colId={colId} jobs={jobs} />
          ))}
        </main>
      </DragDropContext>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-[#4CA771] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        + Add Job
      </button>

      {/* Add Job Modal */}
      <AddJobModal
        show={showModal}
        newJob={newJob}
        setNewJob={setNewJob}
        onClose={() => setShowModal(false)}
        onAdd={handleAddJob}
      />
    </div>
  );
};

export default Board;
