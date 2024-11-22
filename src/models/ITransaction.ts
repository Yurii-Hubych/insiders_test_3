type out = {
    value: number;
}

export interface ITransaction {
    x: {
        hash: string;
        out: out[];
    }
}