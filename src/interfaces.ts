import {Category} from './enums';

export interface DamageLogger {
    (reason: string): void;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

export interface Person {
    name: string;
    email: string;
}

export interface Author extends Person {
    numBookPublish: number;
}

export interface Librarian extends Person {
    department: number;
    assistCustomer: (custName: string) => void;
}

export interface  Magazine {
    title: string;
    publisher: string;
}

export interface ShelfItem {
    title: string;
}

export interface LibMgrCallback {
    (err: Error, title: string[]): void;
}

export interface Callback<T> {
    (err: Error, data: T): void;
}
