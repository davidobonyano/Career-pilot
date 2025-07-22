import { useEffect, useState } from "react";
import type { Contact } from "../types/contactstypes";
import { contactsService } from "./contactsservice";

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contactsService.getAll().then((data) => {
      setContacts(data);
      setLoading(false);
    });
  }, []);

  const addContact = async (contact: Omit<Contact, "id" | "createdAt">) => {
    const newContact = await contactsService.add(contact);
    setContacts((prev) => [...prev, newContact]);
  };

  const updateContact = async (id: string, updates: Partial<Contact>) => {
    await contactsService.update(id, updates);
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  };

  const removeContact = async (id: string) => {
    await contactsService.remove(id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return { contacts, loading, addContact, updateContact, removeContact };
}
