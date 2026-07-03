import * as XLSX from 'xlsx';
import path from 'path';

export function readExcel(filePath,sheetName){

    const fullPath = path.resolve(filePath);
    console.log('Full Path is ', fullPath);

    const workbook = XLSX.readFile(fullPath);
    const sheet = workbook.Sheets[sheetName];
    // sheet_to_json automatically uses the first row as headers/keys
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
}