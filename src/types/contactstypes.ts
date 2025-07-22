export interface Contact {
  id: string;           // uuid
  name: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  notes?: string;
  createdAt: Date;
}
