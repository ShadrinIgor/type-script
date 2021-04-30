import {Author, Book, Person} from './interfaces';

/* export type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}; */

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BoorOrUndefined = Book & undefined;

export type UpdateBook = Partial<Book>;

export type AuthorWEmail = Omit<Author, 'email'>;

export type CreateFunctionCustomType = (name: string, age?: number, city?: string ) => void;



