export default class ViceInpVo {

    private  id:string;
    private  vicename:string;
    private  aliasname:string;
    private  inputtype:string;
    private  cmddata:string;

    public constructor(obj:any){
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                (this as any)[key] = element;
            }
        }
    }

}