import {By} from "selenium-webdriver";
import { BasePage } from "./BasePage"

export class Google extends BasePage {
    searchBar: By = By.id('APJFqb');
    results: By = By.id('cnt');
    constructor() {
        super({url: "https://www.google.com/"});
    };
    async search(searchThing: string) {
        return this.setInput(this.searchBar, '${searchThing}\n');
    };
    async getResults() {
        return this.getText(this.results);
    };
};