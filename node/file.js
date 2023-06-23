//import core module
const fs = require('fs');
const { isBuffer } = require('util');


//reading files

// fs.readFile('./blog.txt',(err, data)=>{
//    if (err) {
//     console.log(err);
//    }
//    console.log(data.toString());
// });
// console.log('last line');


//writing files

// fs.writeFile('./blog.txt','Welcome to myy Worldddd!!!!',()=>
// {
//    console.log('file was writtem');
// });

// fs.writeFile('./blog2.txt','Create files if does not exist hahahahah sweetttt ;))))',()=>
// {
//    console.log('file was writtem');
// });



//directiories
// if (!fs.existsSync('./assets')){
//    fs.mkdir('./assets',(err)=>{
//       if(err){
//          console.log(err);
//       }
//       console.log('created!!#');
//    });
// } else{
//    fs.mkdir('./assets', (err) =>{
//       if(err){
//          console.log(err)
//       }
//       console.log('folder deleted')
//    })
// }


//deleting files
if (fs.existsSync('./assets/deleteme.txt')){
   fs.unlink('./assets/deleteme.txt',(err)=> {
      if (err){
         console.log(err)
      }
      console.log('file deleted !!')
   })
}