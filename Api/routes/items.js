const express =require('express')
const router = express.Router()

router.get('/',(req, res, next)=>{
    res.status(200).send({

        message: 'handling the GET request items '
    });
});

router.post('/',(req, res, next)=>{
    res.status(200).send({

        message: 'handling the POST request items '
    });
});
 
router.get('/:itemId',(req, res, next)=>{ 
    const id = req.params.itemId;
    if(id === 'special') {
        res.status(200).json({
            message: 'you discovered the special ID',
            id: id
        })
    } else{
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
    });

    router.patch('/:itemId',(req, res, next)=>{ 
      res.status(200).json({
         message:('deleted item!')
      }); 
    })
    
module.export = router;