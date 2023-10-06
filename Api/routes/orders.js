const express =require('express')
const router = express.Router()

router.get('/',(req, res, next)=>{
    res.status(200).send({

        message: 'handling the GET request items '
    });
});

router.get('/' ,(req, res,  next)=>{
    res.status(201).json({
        message: 'order were fetched'
    })
})
module.export = router;