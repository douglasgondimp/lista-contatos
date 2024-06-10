export interface Person {
    id?: number;
    name: string;
    cpf: string;
    email: string;
    phone: string;
    birth_date: Date;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}