export interface Contact {
    id?: number;
    person_id: number;
    name: string;
    email: string|null;
    phone: string|null;
    whatsapp: string|null;
    created_at?: Date|null;
    updated_at?: Date|null;
    deleted_at?: Date|null;
}