import { verifyToken } from '../../utils/jwt';
const protect = (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        if (!req.headers.authorization){
            return res.status(401).send('Unauthorized');
        }
        const token = req.headers.authorization;
        const decoded = verifyToken(token);
        next();
    } catch (e) {
        return res.status(401).send('Unauthorized');
    }
}

export default protect;