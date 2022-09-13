import bcrypt from 'bcrypt';

export default function passwordEncrypter(password:string){
    const encryptPassword = bcrypt.hashSync(password, 11);
    return encryptPassword;
}