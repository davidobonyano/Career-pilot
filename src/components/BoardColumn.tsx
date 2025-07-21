import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { AnimatePresence } from "framer-motion";
import JobCard from "./JobCard";
import type { Job } from "../types/jobs.types";

interface BoardColumnProps {
  colId: string;
  jobs: Job[];
  onDeleteJob: (colId: string, jobId: string) => void;
}

const BoardColumn: React.FC<BoardColumnProps> = ({ colId, jobs, onDeleteJob }) => {
  return (
    <Droppable droppableId={colId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-5 border border-green-100"
        >
          <h2 className="text-xl font-semibold mb-4 flex justify-between items-center capitalize">
            {colId}
            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
              {jobs.length}
            </span>
          </h2>
          <div className="space-y-4">
            <AnimatePresence>
              {jobs.map((job, index) => (
                <Draggable key={job.id} draggableId={job.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <JobCard
                        title={job.title}
                        company={job.company}
                        onDelete={() => onDeleteJob(colId, job.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </AnimatePresence>
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default BoardColumn;
