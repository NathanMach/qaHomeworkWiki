import { cookie } from "./setUpPage"; 
const page = new cookie()
const fs = require ('fs');

test('click cookie', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.language)
    await page.driver.sleep(3000)
    await page.cookieClicker(50, page.cookie)
    await page.driver.sleep(3000)
    await page.click(page.cursor)
    await page.click(page.legacy)
    await page.driver.sleep(5000)
    await page.click(page.ascend)
    await page.driver.sleep(7000)
    await page.click(page.reincarnate)
    await page.click(page.yes)
    await page.driver.sleep(3000)
    
    await fs.writeFile(`${__dirname}/cookie.png`,
    await page.driver.takeScreenshot(),"base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Nice save')
    });
    await page.driver.quit()
});