import jsonwebtoken from "jsonwebtoken";

export default function createToken(object: {}){
    const jwt = jsonwebtoken;
    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
    const EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;
    const jwtConfig = {
        expiresIn: EXPIRES_IN
      };
  
    const token = jwt.sign(object, SECRET, jwtConfig);
   
    return token;
}