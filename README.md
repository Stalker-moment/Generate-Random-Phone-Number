# Generate-Random-Phone-Number
Generate nomor telepon indonesia random, supported sorting WA Number

## Language :
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

## Install
Clone this project

```bash
> git clone https://github.com/Stalker-moment/Generate-Random-Phone-Number/
> cd Generate-Random-Phone-Number
```

Install the dependencies:

```bash
> npm install
```

### Usage
1. run the Code

```bash
> npm start
```
 or
```bash
> node pickernumber.js
```

2. force stop the code
```bash
> ctrl + c
```

## Set Config.json

```json
{
    "target_number":100, 
    "operator_mode":1, 
    "prefix_mode":6,
    "digit_number":12,
    "pathdata":"./json-output/phone.json",
    "pathtxt":"./txt-output/phone.txt",
    "pathsortedjson":"./json-output/wa-valid.json",
    "pathsortedtxt":"./txt-output/wa-valid.txt",
    "CLI_MODE":true,
    "TXT_OUTPUT":true,
    "SORTING_WA":true
}
```

## Select Operator Mode

|   Number Code   |              Function            |
| :-------------: | :-----------------------------:  |
|       1         | All Operator                     |
|       2         | Telkomsel                        |
|       3         | Indosat                          |                   
|       4         | XL                               |
|       5         | Axis                             |
|       6         | Three                            |
|       7         | Smartfreen                       |

## Select Prefix Mode

|   Number Code   |              Function           |          OUTPUT         |
| :-------------: | :-----------------------------: | :---------------------: |
|       1         | All Prefix                      |  08xx, 628xx, +628xx    |
|       2         | Only 08                         |  08xx                   |
|       3         | Only 628                        |  628xx                  |
|       4         | Only +628                       |  +628xx                 |
|       5         | Wa link formatted               |  wa.me/628xx            |
|       6         | Wa Id formatted                 |  628xx@c.us             |

## Boolean Config

|     Variable    |                      true                                    |                  false                     |
| :-------------: | :----------------------------------------------------------: | :----------------------------------------: |
|  CLI_MODE       | Can select value at cmd                                      |  Auto read value on config.json            |
|  TXT_OUTPUT     | Save all number at path txt file                             |  Just save number at path json file (temp) |
|  SORTING_WA     | Auto sorting after random number generate & saving to path   |  Just save random number                   |

## Other

|     Variable    |             Format              |               Function                   |
| :-------------: | :-----------------------------: | :--------------------------------------: |
|  target_number  | Integer/Number                  |  Target for generate random number       |
|  digit_number   | Integer/Number (8-13)           |  Digits Number after the prefix          |
|  pathdata       | Path to Json file               |  Temp storage for random number          |
|  pathtxt        | Path to txt/plain file          |  Storage for random number               |
|  pathsortedjson | Path to Json filed              |  Temp storage for sorted valid number WA |
|  pathsortedtxt  | Path to txt/plain file          |  Storage for sorted valid number WA      |

