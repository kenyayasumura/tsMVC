export function isset (data: any){
    if(data === "" || data === null || data === undefined){
        return false;
    }else{
        return true;
    }
};