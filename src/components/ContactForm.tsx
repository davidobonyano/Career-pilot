import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import type { Contact} from  "../types/contactstypes";

interface ContactFormProps {
  onSubmit: (data: Omit<Contact, "id" | "createdAt">) => void;
  onCancel: () => void;
  initialData?: Partial<Contact>;
}

export default function ContactForm({ onSubmit, onCancel, initialData = {} }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    company: initialData.company || "",
    role: initialData.role || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    notes: initialData.notes || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Name is required");
      return;
    }
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
      className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-green-100"
    >
      <h2 className="text-xl font-bold text-teal-950">Add Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <InputField label="Company" name="company" value={formData.company} onChange={handleChange} />
          <InputField label="Role" name="role" value={formData.role} onChange={handleChange} />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </div>
        <TextAreaField label="Notes" name="notes" value={formData.notes} onChange={handleChange} />

        <div className="flex justify-end gap-3 pt-2">
          <Button onClick={onCancel} type="button">Cancel</Button>
          <Button type="submit">Save Contact</Button>
        </div>
      </form>
    </motion.div>
  );
}

/* ---------- Reusable Field Components ---------- */
interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
}


function InputField({ label, name, value, onChange, type = "text", required }: FieldProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
      />
    </div>
  );
}

function TextAreaField({ label, name, value, onChange }: Omit<FieldProps, "type">) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
      />
    </div>
  );
}
