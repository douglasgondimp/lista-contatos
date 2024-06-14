export interface Person {
    id?: number|null;
    name: string;
    cpf: string;
    email: string;
    phone?: string|null;
    birth_date?: Date|null;
    created_at?: Date|null;
    updated_at?: Date|null;
    deleted_at?: Date|null;
}