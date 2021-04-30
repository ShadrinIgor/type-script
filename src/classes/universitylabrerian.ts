import * as interfaces from '../interfaces';
import {logger, logParameters, sealed, writable} from '../decrators';

@logger
class UniversityLibrarian implements interfaces.Librarian {
    name: string;
    email: string;
    department: number;

    assistCustomer(@logParameters custName: string): void {
        console.log(`${this.name} is ${custName}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log('assistFaculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('teachCommunity');
    }
}

export {UniversityLibrarian};
