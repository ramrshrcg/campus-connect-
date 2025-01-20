
import express from 'express';

const router= express.Router();

const homerouter=router.get('/',(req, res)=>{
    res.status(200).json({
        message: "this is a home page route by '/ ",
      });
})

export default homerouter