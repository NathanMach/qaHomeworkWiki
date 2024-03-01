import { By } from 'selenium-webdriver'
import { BasePage } from '../2.8/basePage'


export class cookie extends BasePage{
   language: By = By.id('langSelect-EN') 
   cookie: By = By.id('bigCookie')
   cursor: By = By.xpath('(//div[@class="product unlocked enabled"])[1]')
   legacy: By = By.xpath('(//div[@class="subButton"])[2]')
   ascend: By = By.xpath('//a[@class="option smallFancyButton focused"]')
   reincarnate: By = By.xpath('//a[@id="ascendButton"]')
   yes: By = By.xpath('//a[@id="promptOption0"]')


   constructor() {
    super({url: "https://orteil.dashnet.org/cookieclicker/"});
   };
   async cookieClicker (number, cookiee) {
    for (let i=0; i < number; i++){
        await this.click(cookiee);
    };
   };
};