import jwt from 'jsonwebtoken';

const privateKey = 'ofir_secret';
export const createToken = (username) => {
    return jwt.sign({ data: username }, privateKey, {expiresIn: '7d'});
}

export const verifyToken = (token) => {
    return jwt.verify(token, privateKey);
}
