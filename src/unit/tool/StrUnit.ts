export default class StrUnit {
    public static getNumber(str:string):string{
        str = str+"";
        if(!str)
        return "";
        var numArr = str.match(/\d+/g);
        if(!numArr)
        return "";
        return numArr.join("");
    }
}