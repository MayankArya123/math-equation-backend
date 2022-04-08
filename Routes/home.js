const express = require('express')
const letter  = require('../models/letter')


const Router =new express.Router()



Router.get('/alphabets', async  ( req,res)=>{

    console.log('route hitting')

    try{
        const alphabets = await letter.find({})

        console.log('alphabets',alphabets)

      res.send(alphabets)

    }catch(err){

        console.log('error',err)

        res.send(err)

    }

})




Router.post('/solve_equation', async  ( req,res)=>{

    // console.log('route hitting')

    const {value1,value2,operationSign,compareSign,compareResult} = req.body

      console.log(value1,value2,operationSign,compareSign,compareResult)

      if(!value1  || !value2   || !operationSign || !compareSign || !compareResult === (0 && !null ) )  {


      return  res.status(401).send({
            msg:'wrong wquation',
            succs:false
        })

      }

      

     var operation_result = null

      if(operationSign === '+'){

        operation_result = value1 + value2

      }
      if(operationSign === '-'){

    operation_result = value1 - value2

      }
      if(operationSign === '*'){

    operation_result = value1 * value2

      }
      if(operationSign === '/'){

    operation_result = value1 / value2

      }


      console.log('seeing',operation_result)





if(compareSign === '>') {

    if(operation_result > compareResult){

        console.log('true is greater')


         res.send({
            succs:true,
            message:'is greater',
            operation_result:operation_result
        })

    }

    else {

        console.log('oo',operation_result)

        console.log('false not greater')

        
        res.send({
            succs:false,
            message:'is not greater',
            operation_result:operation_result
        })

    }

}

else{
    
if(compareSign === '<') {


    console.log( 'resultss',operation_result)

    if(operation_result < compareResult){

        console.log('true is smaller')

        res.send({
            succs:true,
            message:'is smaller',
            operation_result:operation_result
        })

    }

    else {

        console.log('false not smaller')

        res.send({
            succs:false,
            message:'is not smaller',
            operation_result:operation_result
        })

    }

}


}

    // try{
    //     // const alphabets = await letter.find({})

    //     // console.log('alphabets',alphabets)

    // //   res.send(alphabets)

    // }catch(err){

    //     console.log('error',err)

    //     res.send(err)

    // }

})


// app.post('/insertMany', async  ( req,res)=>{

//     console.log('route hitting')

//     try{


//         const letters = [
            
//             {
//                letter:'A',
//                value:1
//             },
//             {
//                letter:'B',
//                value:2
//             },
//             {
//                letter:'C',
//                value:3
//             },
//             {
//                letter:'D',
//                value:4
//             },
//             {
//                letter:'E',
//                value:5
//             }


//         ]

//         const alphabets = await letter.insertMany(letters)

//         console.log('alphabets',alphabets)

//       res.send(alphabets)

//     }catch(err){

//         console.log('error',err)

//         res.send(err)

//     }

// })


module.exports = Router

