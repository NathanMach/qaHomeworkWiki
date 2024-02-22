import { Google } from "./baseGooglePage"
const google = new Google();

test("do a search", async () => {
    await google.navigate();
    await google.search("donuts");
    let results = await google.getResults();
    expect(results).toContain("donuts");
    await google.driver.quit();
});