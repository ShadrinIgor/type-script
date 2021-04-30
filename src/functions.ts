/* eslint-disable no-redeclare */

import {Category} from './enums';
import {Book, LibMgrCallback} from './interfaces';

export function getAllBooks(): ReadonlyArray<Book> {
    let books = <const>[
        {
            id: 1,
            category: Category.JavaScript,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true
        },
        {
            id: 2,
            category: Category.JavaScript,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false
        },
        {id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true},
        {
            id: 4,
            category: Category.JavaScript,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true
        }
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const numBooks = books?.length;
    const firstBook: string = books.find(book => book.available)?.title;
    console.log(`numBooks:${numBooks}; firstBook:${firstBook};`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        {lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];

    return data.reduce((acc, obj) => acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook), 0n);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookById(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(item => item.id === id);
}

export function checkOutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Customer: ${customer}`);
    const books = getAllBooks();
    return bookIds.map(id => getBookById(id))
        .filter(book => book.available)
        .map(book => book.title);
}

export function getTitles(author: string): string[];

export function getTitles(available: boolean): string[];

export function getTitles(id: number, available: boolean): string[];

export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    let titles: string[];

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            titles = books.filter(book => book.author === arg)
                .map(book => book.title);

        } else if (typeof arg === 'boolean') {
            titles = books.filter(book => book.available === arg)
                .map(book => book.title);
        }
    }
    if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            titles = books.filter(book => book.id === id && book.available === available)
                .map(book => book.title);
        }
    }

    return titles;
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('Error');

    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`title: ${book.title} by ${book.author}`);
}

// export function getProperty(book: Book, prop: BookProperties): any {
//     if (typeof book[prop] === 'function') {
//         return (book[prop] as Function).name;
//     }
//
//     return book[prop];
// }

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        return obj[prop]['name'];
    }

    return obj[prop];
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callBack: LibMgrCallback): void {
    let foundTitleBooks: string[];
    setTimeout(() => {
        try {
            foundTitleBooks = getBookTitlesByCategory(category);
            if (foundTitleBooks.length > 0) {
                callBack(null, foundTitleBooks);
            }
        } catch (e) {
            callBack(e, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolce, reject) => {
        let foundTitleBooks: string[];
        setTimeout(() => {
            foundTitleBooks = getBookTitlesByCategory(category);
            if (foundTitleBooks.length > 0) {
                resolce(foundTitleBooks);
            } else {
                reject(null);
            }
        }, 2000);
    });

}
