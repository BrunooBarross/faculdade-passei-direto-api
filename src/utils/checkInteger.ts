export async function checkInteger(n: any){
    if(!parseInt(n)){
        throw { type: "unprocessable_entity", message: `O parametro "${n}" não é um número id válido`};
    }
    return parseInt(n);
}