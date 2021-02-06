import {Router} from 'express';
import {users} from '../../db';
const router = Router();

router.get('/users',(req,res)=>{
    res.json({users: users})
})

export default router;