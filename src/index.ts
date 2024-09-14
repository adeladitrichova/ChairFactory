import * as fs from "node:fs";
import * as xlsx from "xlsx";

const sourcePath: string = process.argv[2];

if (!sourcePath || !sourcePath.endsWith('.XLSX') ||!fs.existsSync(sourcePath)) {
    console.error("No source .XLSX path provided");
    process.exit(1);
}