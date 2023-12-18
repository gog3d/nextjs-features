'use strict';
//const fs = require('fs');
const path = require('path');

const fs = require('node:fs');

const hashData = (obj, arr, link) => {
  for (const [key, value] of Object.entries(obj)) {
    if (value.hasOwnProperty('link')) {
      hashData(value, arr, `${link}${value.link}`);
    } else {
      if (typeof value === 'object'){
        hashData(value, arr, `${link}`);
      } else {
        if (
          key !== 'id' &&  key !== 'type' &&
          key !== 'link' && key !== 'mobile' &&
          key !== 'desctop' && key !== 'color_1' &&
          key !== 'color_2'
         ) {
          arr.push({link, value});
        }
      }
    }
  }
  return arr;
};

/*

*/
(async ()=>{
try {
  const filePath = path.join(process.cwd(), '/data.json');
  const data = await fs.promises.readFile(filePath);
  const jsonData  = await JSON.parse(data.toString());
  const arr = [];
  const hashArr = hashData(jsonData, arr, '');
    console.log(hashArr);
  } catch(e) {
    console.error(e);
  }
})()