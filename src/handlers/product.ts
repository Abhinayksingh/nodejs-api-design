import prisma from "../db"

export const handlerProduct = async (res, req) => {
    const product = await prisma.user.findUnique({
        where:{
            id:req.user.id
        }
    })


}