// import FooterData from './FooterData.json';
// const { ConsoleWriter } = require('istanbul-lib-report');
const FooterData=require('./FooterData.json');

console.log(FooterData);

console.log('\n')
const FooterRowData=null;
    for(let i=0;i<FooterData.length;i++)
    {
        // console.log('i loop running and the value of i is: ',i);
        for(let j=0;j<5;j++)
        {
            // console.log('J loop running and the value of j is: ',j);
            // console.log(FooterData[i][`column1_row1`]);
            console.log(FooterData[i][`column${i+1}_row${j+1}`]);
        }
        // console.log('\n');
    }