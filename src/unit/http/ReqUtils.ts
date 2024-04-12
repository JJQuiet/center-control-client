
export default class ReqUtils {
    public static reqUrl = "";
    public static async getVideoOutList(){
        return this.GET("video/out/list");
    }
    public static async getVideoInpList(){
        return this.GET("video/inp/list");
    }
    public static async videoOutSave(id:string,aliasname:string,cmdname:string,cmddata:string){
        return this.GET("video/out/save",{id,aliasname,cmdname,cmddata});
    }
    public static async changeVideoInAliasName(id:number,aliasname:string){
        return this.GET("video/in/changealiasname",{id,aliasname});
    }
    public static async changeVideoOutAliasName(id:number,aliasname:string){
        return this.GET("video/out/changealiasname",{id,aliasname});
    }
    public static async changeVoiceInAliasname(id:number,aliasname:string){
        return this.GET("voice/in/changealiasname",{id,aliasname});
    }
    public static async changeVoiceOutAliasname(id:number,aliasname:string){
        return this.GET("voice/out/changealiasname",{id,aliasname});
    }
    public static async voiceChangeSave(id:string,aliasname:string,cmddata:string,cancelcmd:string){
        return this.GET("vice/inp/save",{id,aliasname,cmddata,cancelcmd});
    }
    public static async volumeChange(id:string,aliasname:string,cmddata:string){
        return this.GET("vice/sound/save",{id,aliasname,cmddata});
    }
    public static async getVolumeList(){
        return this.GET("vice/sound/list");
    }
    public static async getViceInpList(){
        return this.GET("vice/inp/list");
    }
    public static async getViceOutList(){
        return this.GET("vice/out/list");
    }
    /**
     * POST请求
     *
     * @static
     * @param {*} url
     * @param {object} [param={}]
     * @param {*} callback
     * @memberof HttpUtil
     */
    public static async POST(api: string,param: object = {},nowUrl: string = "") {
        if(!ReqUtils.reqUrl)
        ReqUtils.reqUrl = (window as any)["reqUrl"];
        if (nowUrl == "")
            nowUrl = ReqUtils.reqUrl + "/" + api;
        else
            nowUrl = nowUrl +"/"+api;

        console.log("httputil post "+JSON.stringify(param))
        return new Promise((resolve) => {
            var xhr = new XMLHttpRequest();
            let dataStr = JSON.stringify(param);
            // Object.keys(param).forEach(key => {
            //     dataStr += key + '=' + encodeURIComponent(param[key]) + '&';
            // })
            // if (dataStr !== '') {
            //     dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
            // }
            xhr.open("POST", nowUrl, true);
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange =  ()=> {
                if (xhr.readyState === 4) {
                    let response = xhr.responseText;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // let httpStatus = xhr.statusText;
                        // callback(true, JSON.parse(response));
                        this.dealData(response,resolve);
                    }
                    else
                    {
                        resolve(null);
                    }
                }
            };
            xhr.send(dataStr);
        });
    }
    public static async GET(api: string, params: any = {}, nowUrl: string = "") {
        return new Promise((resolve) => {
            if(!ReqUtils.reqUrl)
            ReqUtils.reqUrl = (window as any)["reqUrl"];
            if (nowUrl == "")
                nowUrl = ReqUtils.reqUrl + "/" + api;
            else
                nowUrl = nowUrl +"/"+api;

            if (params) {
                let paramsArray:any[] = [];
                //拼接参数
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))

                if (paramsArray.length > 0)
                    nowUrl += ('?' +paramsArray.join('&'));
            }

            var xhr = new XMLHttpRequest();
            xhr.open("GET", nowUrl);
            xhr.onreadystatechange =  ()=> {
                if (xhr.readyState === 4) {
                    let response = xhr.responseText;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // let httpStatus = xhr.statusText;
                        // callback(true, JSON.parse(response));
                        this.dealData(response,resolve);
                    }
                    else
                    {
                        resolve(null);
                    }
                }
            };
            xhr.send();
        });

    }
  

    private static dealData(response:any,resolve:any){
        let jsonObj: any = null;
        try {
            jsonObj = JSON.parse(response);
        } catch (error) {

        }
        if (response) {
            if (jsonObj) {
                resolve(jsonObj);
                return;
            }
            if (typeof response == 'string') {
                if (response == 'success' ) {
                    resolve(response);
                    return;
                }
                resolve(null);
                return;
            }
        }
    }

}