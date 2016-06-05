const fs = require('fs');
const portraits = 'images/portraits/';
const artistic = 'images/artistic/';

fs.readdir(`${portraits}`, (err, files) => {
  files.forEach( (fileName) => {
    if(fileName === '.DS_Store'){
      return;
    }
    console.log(fileName);
    rename = fileName.split(' ').join('');
    fs.rename(`${portraits}/${fileName}`, `${portraits}${rename}`)
    var imageHtml = `<div class="6u"><span class="image fit"><a href="${portraits}${rename}" data-lightbox="${rename}"><img src="${portraits}${rename}" alt="" /></a></span></div>`;
    fs.appendFile('./formatOutput/portraits.txt', imageHtml);
  });
});

fs.readdir(`${artistic}`, (err, files) => {
  files.forEach( (fileName) => {
    if(fileName === '.DS_Store'){
      return;
    }
    console.log(fileName);
    rename = fileName.split(' ').join('');
    var imageHtml = `<div class="6u"><span class="image fit"><a href="${artistic}${rename}" data-lightbox="${rename}"><img src="${artistic}${rename}" alt="" /></a></span></div>`;
    fs.appendFile('./formatOutput/artistic.txt', imageHtml);
  });
});
