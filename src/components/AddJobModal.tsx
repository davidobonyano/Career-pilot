import React from "react";
import type { NewJobForm } from "../types/jobstypes";

interface AddJobModalProps {
  show: boolean;
  newJob: NewJobForm;
  setNewJob: React.Dispatch<React.SetStateAction<NewJobForm>>;
  onClose: () => void;
  onAdd: () => void;
}

const AddJobModal: React.FC<AddJobModalProps> = ({
  show,
  newJob,
  setNewJob,
  onClose,
  onAdd,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-xl">
        <h3 className="text-lg font-bold mb-4">Add New Job</h3>

        <div className="space-y-4">
          {/* Job Title */}
          <input
            type="text"
            placeholder="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          />

          {/* Company */}
          <input
            type="text"
            placeholder="Company"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          />

          {/* Column Selection */}
          <select
            value={newJob.column}
            onChange={(e) => setNewJob({ ...newJob, column: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
          >
            <option value="wishlist">Wishlist</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onAdd}
            className="px-4 py-2 rounded bg-[#4CA771] text-white hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJobModal;
