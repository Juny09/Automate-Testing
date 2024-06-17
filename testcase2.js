const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function TestCase2() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    //navigate to xe page
    await driver.get("https://www.xe.com/");

    //click to the convert page
    await driver.findElement(By.xpath("//*[@id='__next']/div[4]/div[2]/section/div[2]/div/div/a[1]")).click();

    // Select input elements and fill them out
    await driver.findElement(By.xpath("//*[@id='amount']")).sendKeys("100");

    //select the source currency
    await driver.findElement(By.xpath("//*[@id='midmarketFromCurrency']/div[2]/div/input")).sendKeys("GBP");
    await driver.findElement(By.xpath("//*[@id='midmarketFromCurrency-option-2']")).click();

    //select the target currency
    await driver.findElement(By.xpath("//*[@id='midmarketToCurrency']/div[2]/div/input")).sendKeys("CAD");
    await driver.findElement(By.xpath("//*[@id='midmarketToCurrency-option-3']")).click();

    //swap the currencies
    await driver.findElement(By.xpath("//*[@id='__next']/div[4]/div[2]/section/div[2]/div/main/div/div[1]/div[6]/button")).click();

    //click on the convert button
    await driver.findElement(By.xpath("//*[@id='__next']/div[4]/div[2]/section/div[2]/div/main/div/div[2]/button")).click();

    const pageTitle = await driver.getTitle();
    // assert usign node assertion
    assert.strictEqual(pageTitle, "Welcomepage");
    //Check if redirect to xe page was successfull
    await driver.wait(until.titleIs("Welcomepage"), 10000);
  } finally {
    //await driver.quit()
    await driver.wait(until.elementLocated(By.id("msgError")), 1000);
  }
}
TestCase2();

