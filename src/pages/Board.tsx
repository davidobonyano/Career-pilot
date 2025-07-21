import React, { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import BoardColumn from "../components/BoardColumn";
import AddJobModal from "../components/AddJobModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import type { ColumnJobs, NewJobForm, DeleteTarget } from "../types/jobstypes";
import { saveJobs, loadJobs } from "../features/jobsStorage";

const defaultData: ColumnJobs = {
  wishlist: [
    { id: "1", title: "Frontend Developer", company: "TechCorp" },
    { id: "2", title: "React Engineer", company: "StartupX" },
  ],
  applied: [{ id: "3", title: "Backend Developer", company: "CodeBase" }],
  interview: [{ id: "4", title: "Full Stack Developer", company: "NextGen" }],
};

const Board: React.FC = () => {
  const [columns, setColumns] = useState<ColumnJobs>(defaultData);
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState<NewJobForm>({
    title: "",
    company: "",
    column: "wishlist",
  });

  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null);

  // Load data on mount
  useEffect(() => {
    loadJobs().then((data) => {
      if (data) setColumns(data);
    });
  }, []);

  // Save data whenever columns change
  useEffect(() => {
    saveJobs(columns);
  }, [columns]);

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

  const handleDeleteJob = (colId: string, jobId: string) => {
    setDeleteTarget({ colId, jobId });
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    const { colId, jobId } = deleteTarget;
    const updatedColumn = columns[colId].filter((job) => job.id !== jobId);
    setColumns({ ...columns, [colId]: updatedColumn });
    setDeleteTarget(null);
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Kanban Columns */}
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(columns).map(([colId, jobs]) => (
            <BoardColumn
              key={colId}
              colId={colId}
              jobs={jobs}
              onDeleteJob={handleDeleteJob}
            />
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

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        show={!!deleteTarget}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Board;
