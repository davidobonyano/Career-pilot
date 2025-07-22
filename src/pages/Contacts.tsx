import { useState } from "react";
import { useContacts } from "../utils/usecontacts";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import { Button } from "../components/ui/Button"; 
import type { Contact } from "../types/contactstypes";

export default function Contacts() {
  const { contacts, loading, addContact, updateContact, removeContact } = useContacts();
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  if (loading) return <p className="p-4">Loading contacts...</p>;

  const handleAdd = async (data: Omit<Contact, "id" | "createdAt">) => {
    await addContact(data);
    setShowForm(false);
  };

  const handleUpdate = async (data: Omit<Contact, "id" | "createdAt">) => {
    if (editingContact) {
      await updateContact(editingContact.id, data);
      setEditingContact(null);
      setShowForm(false);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-950">Contacts</h1>
        {!showForm && ( // HIDE Add button while form is active
          <Button
            onClick={() => {
              setEditingContact(null);
              setShowForm(true);
            }}
          >
            Add Contact
          </Button>
        )}
      </div>

      {showForm && (
        <ContactForm
          onSubmit={editingContact ? handleUpdate : handleAdd}
          onCancel={() => {
            setShowForm(false);
            setEditingContact(null);
          }}
          initialData={editingContact || undefined}
        />
      )}

     <ContactList
  contacts={contacts.filter((c) => !editingContact || c.id !== editingContact.id)}
  onDelete={removeContact}
  onEdit={(id) => {
    const contact = contacts.find((c) => c.id === id);
    if (contact) {
      setEditingContact(contact);
      setShowForm(true);
    }
  }}
/>

    </div>
  );
}
