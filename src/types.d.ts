declare type Sheet = {
    name: string;
    data: SheetData;
};

declare type SheetData = {
    rows: NumericRow[];
};

declare type NumericRow = number[];