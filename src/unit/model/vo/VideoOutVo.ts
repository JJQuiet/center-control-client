import StrUnit from "@/unit/tool/StrUnit";

export default class VideoOutVo {
    public  id:string = "";
    public videoname:string;
    public  aliasname:string;
    public  outputtype:string;
    public  cmdname:string;
    public  cmddata:string;

    public select:boolean = false;


    public constructor(obj:any){
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                (this as any)[key] = element;
            }
        }
        // if(this.cmddata.indexOf("&") != -1)
        // {
        //     this.screenType = "four";
        // }
        // else
        // {
        //     this.screenType = "full";
        // }
    }

    public clone(){
        let newVo = new VideoOutVo(this);
        newVo.select = this.select;
        return newVo;
    }
    public getIsFour(){
        if(!this.cmddata)
            return false;
        //1$.
        if(this.cmddata.indexOf(StrUnit.getNumber(this.outputtype)+"$.")!=-1)
        return false;
        if(this.cmddata.indexOf("8V") != -1)
        return true;

        return false;
    }
}