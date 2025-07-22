import type { Contact } from "../types/contactstypes";
import ContactCard from "./ContactCard";

interface ContactListProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Contact>) => void;
}

export default function ContactList({ contacts, onDelete, onEdit }: ContactListProps) {
  if (contacts.length === 0) {
    return <p className="text-gray-600">No contacts yet. Add one to get started!</p>;
  }

  return (
    <div className="grid gap-4">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onEdit={(id) => onEdit(id, {})} // You can later pass real updates
        />
      ))}
    </div>
  );
}
