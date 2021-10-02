import bcrypt from 'bcrypt'


export async function hashItem(item:string){

    const salt = await bcrypt.genSalt(10)

    return bcrypt.hash(item, salt);

}



export async function validateHash(hashedItem:string , item:string){

    return await bcrypt.compare(item, hashedItem)
}