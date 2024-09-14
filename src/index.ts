import * as fs from "node:fs";
import * as xlsx from "xlsx";
import {generate} from "./generator";

const sourcePath: string = process.argv[2];

if (!sourcePath || !sourcePath.endsWith('.xlsx') ||!fs.existsSync(sourcePath)) {
    console.error("No source .XLSX path provided");
    process.exit(1);
}

const workbook = xlsx.readFile(sourcePath)

for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet, {header: 1}) as NumericRow[];
    const result = generate({
        worksheet: {
            name: sheetName,
            data: {
                rows: data
            }
        }
    })
    console.log(result);
}