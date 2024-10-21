export class LoanRelease {
private _notes!: string;
private __id!: number;

get id(): number {
    return this.__id;
}

set id(value: number) {
    this.__id = value;
}


get notes(): string {
    return this._notes;
}

set notes(value: string) {
    this._notes = value;
}

}
export const loanReleaseService = new LoanRelease();