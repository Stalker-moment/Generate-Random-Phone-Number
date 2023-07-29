//=======================================//
//JANGAN SALAH GUNAKAN CODE INI!
//Code ini hanya bentuk implementasi dari logic random
//=======================================//

const fs = require('fs-extra');
const scanf = require('scanf');
const axios = require('axios')

//DEFAULT CONFIG
let config = JSON.parse(fs.readFileSync('config.json'))
let { 
        target_number,
        operator_mode,
        prefix_mode,
        digit_number,
        pathdata,
        pathtxt,
        pathsortedjson,
        pathsortedtxt,
        CLI_MODE,
        TXT_OUTPUT,
        SORTING_WA
    } = config

const dataArray = []; // Array untuk menyimpan data baru
const count = 0;

if(CLI_MODE == false){
    var target = target_number;
    var mode = operator_mode //avaliable 7 mode
    var advancemode = prefix_mode //avaliable 6 mode
    var neededdigit = digit_number //choice range 8-13
} else {
  if(SORTING_WA == false){
    console.log('Masukkan Target Nomor Yang Ingin Dibuat : ');
    var target = scanf('%d')

    console.log('\nPilih Operator :\n1. All Operator\n2. Telkomsel\n3. Indosat\n4. XL\n5. Axis\n6. Three\n7. Smartfreen\n\npilih salah satu (angka saja) : ')
    var mode = scanf('%d')

    console.log('\nPilih Prefix :\n1. All Prefix\n2. 08\n3. 628\n4. +628\n5. WA link (wa.me)\n6. WA Id (@c.us)\n\npilih salah satu (angka saja) : ')
    var advancemode = scanf('%d')

    console.log('Masukkan digit nomor (range 8-12) : ')
    var neededdigit = scanf('%d')
  } else if(SORTING_WA == true){
    console.log('Masukkan Target Nomor Yang Ingin Dibuat : ');
    var target = scanf('%d')

    console.log('\nPilih Operator :\n1. All Operator\n2. Telkomsel\n3. Indosat\n4. XL\n5. Axis\n6. Three\n7. Smartfreen\n\npilih salah satu (angka saja) : ')
    var mode = scanf('%d')

    console.log('prefix tidak dapat dipilih\nmode sorting WA mewajibkan prefix 628')
    var advancemode = 3 

    console.log('Masukkan digit nomor (range 8-12) : ')
    var neededdigit = scanf('%d')
  }
}

if (neededdigit > 8 && neededdigit < 14){
    var digit = neededdigit - 4
} else {
    return console.loh('bad digit')
}

function get_random(arraynya) {
  return arraynya[Math.floor(Math.random() * arraynya.length)];
}

function generateRandomNumber(length) {
  const max = Math.pow(10, length) - 1;
  const min = Math.pow(10, length - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function checknum(number){
  const data = await axios.get(`https://male-than-angola-pull.trycloudflare.com/checkNumberStatus?number=`+number); //API VALIDATOR WA
  return data.data.status.canReceiveMessage
}

function readJsonFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading JSON file:', err);
    return [];
  }
}

// Fungsi untuk menulis data ke file JSON
function writeJsonFile(filename, data) {
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log('Data successfully written to', filename);
  } catch (err) {
    console.error('Error writing JSON file:', err);
  }
}

const prefixnumber = ['08', '628', '+628'];
const alloperatorprefix = ['55', '56', '57', '58', '14', '15', '16', '11', '52', '53', '12', '13', '21', '22', '23', '51', '17', '18', '19', '59', '77', '78', '32', '33', '38', '95', '96', '97', '98', '99', '81', '82', '83', '84', '85', '86', '87', '88', '89'];
const optelkom = ['52', '53', '11', '12', '13', '21', '22', '23', '51']
const opindosat = ['55', '56', '57', '58', '14', '15', '16']
const opxl = ['17', '18', '19', '59', '77', '78']
const opaxis = ['32', '33', '38']
const opthree = ['95', '96', '97', '98', '99']
const opsmart = ['81', '82', '83', '84', '85', '86', '87', '88', '89']
const extendwa = 'https://wa.me/'

for (let i = 0; i < target; i++) {

  if (mode == 1){ //all operator
    var getoperatornumber = get_random(alloperatorprefix);
    var get9digitrandom = generateRandomNumber(digit);
  } else if(mode == 2){ //op telkom
    var getoperatornumber = get_random(optelkom);
    var get9digitrandom = generateRandomNumber(digit);
  } else if(mode == 3){ //op indosat
    var getoperatornumber = get_random(opindosat);
    var get9digitrandom = generateRandomNumber(digit);
  } else if(mode == 4){ //op xl
    var getoperatornumber = get_random(opxl);
    var get9digitrandom = generateRandomNumber(digit);
  } else if(mode == 5){ //op axis
    var getoperatornumber = get_random(opaxis);
    var get9digitrandom = generateRandomNumber(digit);
  } else if(mode == 6){ //op three
    var getoperatornumber = get_random(opthree);
    var get9digitrandom = generateRandomNumber(digit);
  } else if(mode == 7){ //op smartfreen
    var getoperatornumber = get_random(opsmart);
    var get9digitrandom = generateRandomNumber(digit);
  } else{
    return console.log('choice mode first')
  }

  if(advancemode == 1){ //random prefix number
    var getrandomnumber = get_random(prefixnumber);
    var databaru = `${getrandomnumber}${getoperatornumber}${get9digitrandom}`;
  } else if(advancemode == 2){ //08 prefix number
    var getrandomnumber = '08'
    var databaru = `${getrandomnumber}${getoperatornumber}${get9digitrandom}`;
  } else if(advancemode == 3){ //628 prefixnumber
    var getrandomnumber = '628'
    var databaru = `${getrandomnumber}${getoperatornumber}${get9digitrandom}`;
  } else if(advancemode == 4){ //+628 prefixnumber
    var getrandomnumber = '+628'
    var databaru = `${getrandomnumber}${getoperatornumber}${get9digitrandom}`;
  } else if(advancemode == 5){ //generate WA link
    var getrandomnumber = '628'
    var databaru = `${extendwa}${getrandomnumber}${getoperatornumber}${get9digitrandom}`;
  } else if(advancemode == 6){ //generate WA id (wa-automate)
    var getrandomnumber = '628'
    var databaru = `${getrandomnumber}${getoperatornumber}${get9digitrandom}@c.us`;
  } else {
    return console.log('please choice advance mode')
  }

  if(TXT_OUTPUT == true){
    fs.appendFileSync(pathtxt, '\n'+databaru);
  }

  dataArray.push(databaru); 
  console.log(databaru);
}

// Menyimpan dataArray dalam file JSON
const jsonData = JSON.stringify(dataArray, null, 2);
fs.writeFileSync(pathdata, jsonData);

if(TXT_OUTPUT == true){
  console.log(`Random Nomor Selesai\nData telah disimpan dalam file ${pathdata} dan ${pathtxt}\nThis data not realistic, because generated random by system`);
} else {
  console.log(`Random Nomor Selesai\nData telah disimpan dalam file ${pathdata}\nThis data not realistic, because generated random by system`);
}

async function processSorting() {
  const jsonData = readJsonFile(pathdata);
  const newData = [];
  let count = 0;
  
  // Loop melalui setiap nomor dan cek statusnya
  for (const data of jsonData) {
    const getnum = await checknum(data)
    console.log(getnum)
    if (getnum == true) {
      newData.push(extendwa+data);
      count = count + 1;

      if (TXT_OUTPUT == true) {
        fs.appendFileSync(pathsortedtxt, '\n' + extendwa+data);
      }
    }
  }

  writeJsonFile(pathsortedjson, newData);

  if (TXT_OUTPUT == true) {
    console.log(`Sorting Nomor WA Selesai\nData telah disimpan dalam file ${pathsortedjson} dan ${pathsortedtxt}\nJangan disalahgunakan, hanya untuk implementasi system sorting\n\n-----------------------------------------------\n\n${count} number valid of ${target}\n\n-----------------------------------------------`);
  } else {
    console.log(`Sorting Nomor WA Selesai\nData telah disimpan dalam file ${pathsortedjson}\nJangan disalahgunakan, hanya untuk implementasi system sorting\n\n-----------------------------------------------\n\n${count} number valid of ${target}\n\n-----------------------------------------------`);
  }
}

// Panggil fungsi processSorting dengan async/await
(async () => {
  if (SORTING_WA === true) {
    try {
      await processSorting();
    } catch (error) {
      console.error('Error while sorting data:', error);
    }
  }
})();


