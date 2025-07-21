import React from "react";

interface AddJobModalProps {
  show: boolean;
  newJob: { title: string; company: string; column: string };
  setNewJob: React.Dispatch<
    React.SetStateAction<{ title: string; company: string; column: string }>
  >;
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
        <input
          type="text"
          placeholder="Job Title"
          className="w-full border p-2 rounded mb-3"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full border p-2 rounded mb-3"
          value={newJob.company}
          onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
        />
        <select
          className="w-full border p-2 rounded mb-3"
          value={newJob.column}
          onChange={(e) => setNewJob({ ...newJob, column: e.target.value })}
        >
          <option value="wishlist">Wishlist</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
        </select>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onAdd}
            className="px-4 py-2 rounded bg-[#4CA771] text-white hover:opacity-90"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJobModal;
