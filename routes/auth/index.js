import {Router} from 'express';
import {createToken} from '../../utils/jwt';
const router = Router();

router.post('/login',(req,res)=>{
    const {username, password} = req.body;
    if (username == 'admin' && password == '123456'){
        const token = createToken(username);
        return res.json({token:token});
    }
    return res.status(401).send('Unauthorized');
})

export default router;