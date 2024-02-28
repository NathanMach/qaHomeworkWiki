import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class fishLasers extends BasePage{
    searchBar: By = By.css('.gLFyf')
    results: By = By.id('rcnt')

    constructor() {
        super({url: "https://www.google.com/"})
    };
    async search (dogLasers: string) {
        return this.setInput(this.searchBar, `${dogLasers}\n`)
    };
    async getResults() {
        return this.getText(this.results)
    };
};



