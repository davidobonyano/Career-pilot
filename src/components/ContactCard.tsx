import type { Contact } from "../types/contactstypes";
import { Button } from "../components/ui/Button";

interface ContactCardProps {
  contact: Contact;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ContactCard({ contact, onEdit, onDelete }: ContactCardProps) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold">{contact.name}</h2>
        {contact.company && <p className="text-sm text-gray-600">{contact.company}</p>}
        {contact.email && <p className="text-sm text-gray-600">{contact.email}</p>}
        {contact.phone && <p className="text-sm text-gray-600">{contact.phone}</p>}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => onEdit(contact.id)}>Edit</Button>
        <Button onClick={() => onDelete(contact.id)}>Delete</Button>
      </div>
    </div>
  );
}
