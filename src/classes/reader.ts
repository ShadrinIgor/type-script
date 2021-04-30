export const Reader = class {
    name: string;
    books: any[];

    take(book: any): void {
        this.books.push(book);
    }
};
