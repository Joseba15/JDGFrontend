import { Supplier } from "./supplier";

export interface Shoe {
    idShoe:   number;
    model:    string;
    type:     string;
    price:    number;
    img:      string;
    supplier: Supplier;
    listSize: ListSize[];
}

export interface ListSize {
    number: Number;
    stock:  number;
}

export interface Number {
    number: number;
}
