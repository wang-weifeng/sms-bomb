const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer')
puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage()
  //page.setViewport({width: 1200, height: 600})
 
  try {
      await page.goto('http://www.iqiyi.com/iframe/loginreg?is_reg=1&');
      await page.waitFor(1000);
      await page.type('input[data-regbox="name"]', "15555373875", { delay: 100 });
      await page.click('[rseat="prgd_smsbtn"]');
  } catch (e) {
      console.log("e:"+e);
  }

 
  // await page.close()
  // browser.close()
})




module.exports = router;
