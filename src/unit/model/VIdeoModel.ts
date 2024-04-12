import ReqUtils from "../http/ReqUtils";
import VideoInpVo from "./vo/VideoInpVo";
import VideoOutVo from "./vo/VideoOutVo";

export default class VideoModel {

    public static videoOutArr:VideoOutVo[] = [];
    public static videoInpArr:VideoInpVo[] = [];

    public static inpReset(inPutArr:any){
        inPutArr.value.splice(0,inPutArr.value.length);
        for (const data of this.videoInpArr) {
            inPutArr.value.push(data.clone());            
        }
    }

    public static getByInputType(type:string){
        for (const data of this.videoInpArr) {
            if(data.inputtype == type)
            {
                return data;
            }
        }
        return null;
    }

    public static async updateOutVideoVo2Four(vo:VideoOutVo,outPutArr:any){
        let voArr:VideoOutVo[] = [];
        for (const data of outPutArr.value) {
           if(vo.id == data.id)
           {
               vo.select = data.select;
               voArr.push(vo);
           } 
           else
           {
                if(data.getIsFour())
                {
                    //其他4分屏，要去掉 变成X$.
                    let cmddata = data.outputtype+"$.";
                    let res = await ReqUtils.videoOutSave(data.id,data.aliasname,"full",cmddata);
                    data.cmddata = cmddata;
                    data.screenType = "full";
                }
                voArr.push(data);
           }
        }
        outPutArr.value.splice(0,outPutArr.value.length);
        for (const obj of voArr) {
           outPutArr.value.push(obj); 
        }       
    }

}