export default class VideoInpVo {
    public id:string;
    public videoname:string;
    public aliasname:string;
    public inputtype:string;
    public watermark:string;

    public select:boolean = false;

    public constructor(obj:any){
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                (this as any)[key] = element;
            }
        }
    }

    public clone(){
        return new VideoInpVo(this);
    }
    
}