import {timeOut} from "../decrators";

abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log('Construct');
    // }

    #id: number;

    private _publicher: string;
    private _department: string = 'Class Literature';

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publicher.toLocaleUpperCase();
    }

    abstract printCitation(): void;

    constructor(id: number, public title: string, protected year: number) {
        console.log('Construct');
        this.#id = id;
    }

    @timeOut(1000)
    printItem() {
        console.log(`${this.title} was ${this.year}`);
    }

    getID(): number {
        return this.#id;
    }
}

export {ReferenceItem};
