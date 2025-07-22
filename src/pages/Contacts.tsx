import { useState } from "react";
import { useContacts } from "../utils/usecontacts"
import ContactList from "../components/ContactList"
import ContactForm from "../components/ContactForm";
import { Button } from "../components/ui/Button"; 

export default function Contacts() {
  const { contacts, loading, addContact, updateContact, removeContact } = useContacts();
  const [showForm, setShowForm] = useState(false);

  if (loading) return <p className="p-4">Loading contacts...</p>;

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-950">Contacts</h1>
        <Button onClick={() => setShowForm(true)}>Add Contact</Button>
      </div>

      {showForm && (
        <ContactForm
          onSubmit={async (data) => {
            await addContact(data);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      <ContactList
        contacts={contacts}
        onDelete={removeContact}
        onEdit={updateContact}
      />
    </div>
  );
}
