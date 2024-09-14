declare type Sheet = {
    name: string;
    data: SheetData;
};

declare type SheetData = {
    rows: Row[];
};

declare type Row = {
    cells: number[];
};