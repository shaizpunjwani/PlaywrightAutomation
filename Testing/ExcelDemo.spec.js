const Exceljs = require('exceljs');
import {test, expect, Page, Locator} from "@playwright/test"


async function Writeexcel(filename, searchtext, replacetext, change)
{
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(filename);

    const sheet = workbook.getWorksheet('Sheet1');


    const output = await ReadExcel(sheet, searchtext);
   

    const cell = sheet.getCell(output.row+change.rowChange, output.col+change.colChange);
    cell.value = replacetext;
    await workbook.xlsx.writeFile(filename);
}

async function ReadExcel(sheet, searchtext)
{
    let output = {row:-1, col:-1};

    sheet.eachRow((row, rowNumber)=>{

        row.eachCell((cell, colNumber)=>{
            
            if(cell.value == searchtext)
            {
                console.log(rowNumber);
                console.log(colNumber);
                output.row=rowNumber;
                output.col=colNumber;
            }
        })
    })
    return output;
}



test('Upload download excel validation', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

    const downloadpromise = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Download'}).click();

    const download = await downloadpromise;

    await download.saveAs("C:/Users/USER/Downloads/download.xlsx");

    Writeexcel("C:/Users/USER/Downloads/download.xlsx", 'Apple', "Iphone", {rowChange:0, colChange:0});

    await page.locator("input[id='fileinput']").click();

    await page.locator("input[id='fileinput']").setInputFiles("C:/Users/USER/Downloads/download.xlsx");

    
})