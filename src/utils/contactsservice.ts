import localforage from "localforage";
import type { Contact } from "../types/contactstypes";

import { v4 as uuid } from "uuid";

const CONTACTS_KEY = "contacts";

export const contactsService = {
  async getAll(): Promise<Contact[]> {
    return (await localforage.getItem<Contact[]>(CONTACTS_KEY)) || [];
  },

  async add(contact: Omit<Contact, "id" | "createdAt">): Promise<Contact> {
    const newContact: Contact = { id: uuid(), createdAt: new Date(), ...contact };
    const contacts = await this.getAll();
    contacts.push(newContact);
    await localforage.setItem(CONTACTS_KEY, contacts);
    return newContact;
  },

  async update(id: string, updates: Partial<Contact>) {
    const contacts = await this.getAll();
    const index = contacts.findIndex((c) => c.id === id);
    if (index !== -1) {
      contacts[index] = { ...contacts[index], ...updates };
      await localforage.setItem(CONTACTS_KEY, contacts);
    }
  },

  async remove(id: string) {
    const contacts = await this.getAll();
    const updated = contacts.filter((c) => c.id !== id);
    await localforage.setItem(CONTACTS_KEY, updated);
  },
};
