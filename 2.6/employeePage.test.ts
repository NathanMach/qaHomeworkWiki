import { Builder, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { EmployeePage } from "./employeeManagerPage";
const page = new EmployeePage(driver);

describe("Practing Page Objects", () => {
    beforeEach(async () => {
        await page.navigate(); 
    }); 
    afterAll(async () => {
        await page.driver.quit(); 
    }); 
    test('changing bernices name', async () => {
        await page.click(page.bernice); 
        await page.click(page.name); 
        await page.setInput(page.name, "Jane Doe"); 
        await page.click(page.saveBtn);  
    }); 
    test('adding employee', async () => {
        await page.click(page.addEmployee); 
        await page.click(page.newEmployee); 
        await page.setInput(page.name, "donut"); 
        await page.setInput(page.phone, '1481815464'); 
        await page.setInput(page.title, 'Choco tester');
        await page.click(page.saveBtn); 
    }); 
    test('promoting phillip', async () => {
        await page.click(page.phillip); 
        await page.setInput(page.title, 'choco god'); 
        await page.click(page.saveBtn); 
    })
}) 