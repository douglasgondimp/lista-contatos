export interface Contact {
    id: number|null;
    person_id?: number;
    name?: string;
    email: string;
    phone: string;
    whatsapp: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}