/* eslint-disable no-redeclare */

// eslint-disable-next-line no-underscore-dangle

import {Category} from './enums';
import {Book} from './interfaces';
import {getBooksByCategoryPromise} from "./functions";

function showHello(divName: string, name: string): void {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// showHello('greeting', 'TypeScript');
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// console.log(getBookAuthorByIndex(1));

// console.log(calcTotalPages());

//  const myId = createCustomerID('Ann', 10);
// console.log('myId', myId);
// let idGenerator: (a: string, b: number) =>  string = (name: string, id: number) => `${id}-${name}`;
//
// idGenerator = createCustomerID;
// console.log('idGenerator', idGenerator('Boris', 5));

// createCustomer('Ann');
// createCustomer('Ann', 10);

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookById(1));
// const myBooks = checkOutBooks('Ann', 1, 2, 4);
// Task 04.01
// getTitles(1, true);

// const myBook: Book = {
//     id: 5,
//     title: '11',
//     author: '11',
//     available: true,
//     category: Category.JavaScript,
//     pages: 300,
//     markDamaged: (reason: string) => console.log(`Damaged ${reason}`)
// };
//
// printBook(myBook);
// myBook.markDamaged('soma rezon');
// Task 04.02
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged ${reason}`);
// Task 04.03
// const favoriteAuthor: Author = {
//     name: '1',
//     email: 'email@m',
//     numBookPublish: 1
// };
//
// const favoriteLibrarion: Librarian = {
//     name: '1',
//     email: 'email@m',
//     department: 1,
//     assistCustomer: (custName: string) => console.log(`assistCustomer: ${custName}`),
// };
//  Task 04.04
// const offer: any = {
//     book: {
//         title: 'Test'
//     }
// };

// Task 04.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// Task 05.01
//
// const ref: ReferenceItem = new ReferenceItem(1, 'Test', 200);
// ref.printItem();
// Task 05.05
// const refBook: Encyclopedia = new Encyclopedia(1, 'Test', 200, 3);
// refBook.printItem();
// Task 05.03
// const refBook: RefBook = new RefBook(1, 'Test', 200, 3);
// refBook.printCitation();
// Task 05.04
// const n: Librarian = new UniversityLibrarian();
// n.name = '1';
// n.assistCustomer('22');
// Task 05.05
// const personBook: PersonBook = {
//     name: 'Ann',
//     email: 'n@n.n',
//     id: 1,
//     author: 'A',
//     category: Category.HTML,
//     title: 'Some',
//     markDamaged: null,
//     available: false
// };
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(m => {
//             const reader = new m.Reader();
//             reader.name = 'Anne';
//             reader.take(getAllBooks()[2]);
//         });
// }
// Task 06.06

// let libObj: Library;
// const libObj2: Library = new Library();
// Task 07.01
// const inventory: Book[] = [
//     {
//         id: 1,
//         author: 'A',
//         category: Category.HTML,
//         title: 'Some',
//         markDamaged: null,
//         available: false
//     },
//     {
//         id: 1,
//         author: 'A',
//         category: Category.HTML,
//         title: 'Some',
//         markDamaged: null,
//         available: false
//     }
// ];
// ];
// Task 07.02
// const shelf = new Shelf<Book>();
// shelf.add(...inventory);
//
// const magazine: Magazine[] = [
//     {title: '11', publisher: '111'},
//     {title: '11', publisher: '111'},
//     {title: '11', publisher: '111'}
// ];
//
// getProperty(magazine[0], 'title');

// Task 07.04
// let params: Parameters<CreateFunctionCustomType> = ['AA', 1];
// createCustomer(...params);

// Task 08.01
// const obj = new UniversityLibrarian();

// Task 08.02
// const obj = new UniversityLibrarian();

// Task 08.04
// const enc = new RefBook();

// Task 08.05 08.06
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('ff');
// console.log(obj.name);

// Task 09.1
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// Task 09.2
// getBooksByCategoryPromise(Category.JavaScript)
//     .then((titles: string[]) => {
//         console.log(titles);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// Task 09.3
// logSearchResults(category: Category.JavaScript);
