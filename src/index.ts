import * as fs from "node:fs";
import * as xlsx from "xlsx";
import {generate} from "./generator";

const sourcePath: string = process.argv[2];

if (!sourcePath || !sourcePath.endsWith('.xlsx') || !fs.existsSync(sourcePath)) {
    console.error("No source .xlsx path provided");
    console.log("Usage: npm run build <path_to_xlsx_file> [output_svg_file]");
    process.exit(1);
}

const workbook = xlsx.readFile(sourcePath);

for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, {header: 1}) as NumericRow[];

    const result = generate({
        worksheet: {
            name: sheetName,
            data: {
                rows: data
            }
        }
    });

    const outputPath = process.argv[3] ?? `${sheetName}_output.svg`;
    fs.writeFileSync(outputPath, result);

    console.log(`SVG file written to: ${outputPath}`);
}
