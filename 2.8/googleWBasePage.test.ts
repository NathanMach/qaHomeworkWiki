import { fishLasers } from "./googlePage";
const fl = new fishLasers()
const fs = require('fs')

test('do a search', async() => {
    await fl.navigate()
    await fl.search('humidifier')
    let text = await fl.getResults()
    expect(text).toContain('humidifier')
    await fs.writeFile(`${__dirname}/dogLasers.png`,
    await fl.driver.takeScreenshot(),"base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Nice save')
    });
    await fl.driver.quit()
});