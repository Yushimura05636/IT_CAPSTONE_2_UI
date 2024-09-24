import { Personality } from "./Personality";

export class Library {
  private _description?: string;
  private _id?: number;
  private _oldText?: string;

  set oldText(value: string | undefined) {
    this._oldText = value;
  }

  // Getter and Setter for personality_id (optional)
  get oldText(): string | undefined {
    return this._oldText;
  }

  set description(value: string | undefined) {
    this._description = value;
  }

  // Getter and Setter for personality_id (optional)
  get description(): string | undefined {
    return this._description;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  // Getter and Setter for personality_id (optional)
  get id(): number | undefined {
    return this._id;
  }
}

// CustomersService instance for the Customers model
export const libraryService = new Library();
