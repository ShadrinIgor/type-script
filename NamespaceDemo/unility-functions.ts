namespace  Utility {
    export namespace Frees {
        export function calculateLateFree(dayslate: number): number {
            return dayslate * 0.25;
        }
    }

    export function maxBookAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFunction(): void {
        console.log('private');
    }
}
