<template>
  <div class="flex flex-col h-screen">
    <div class="flex text-white">
      <div
        class="relative w-40 h-16 flex justify-around items-center text-white"
      >
        <div class="w-2"></div>
        <el-image
          class="w-10 h-fit"
          src="/static/vice/homebtn.png"
          :fit="contain"
        />
        <div class="relative lineGp grow">
          <div class="absolute inset-0 flex items-center justify-end">
            <div class="line1"></div>
          </div>
          <div class="w-full h-full flex flex-col justify-between text-white">
            <span class=" ">输入</span>
            <span class="-ml-10 mb-2">输出</span>
            <div class="absolute right-0 bottom-0">
              <el-image
                class="w-12"
                src="/static/home/edit.png"
                :fit="contain"
                @click="tapEdit"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex" v-for="(item, index) in topArr" :key="index">
        <div class="w-4"></div>
        <centerinfo src="/static/vice/topbtn.png" imaClass=" w-20">
          <!-- <h4>{{ item.aliasname }}</h4> -->
          <input type="text" v-model=item.aliasname />
        </centerinfo>
      </div>
    </div>
    <div class="flex grow items-start">
      <div class="flex-none flex h-full flex-col text-white w-40">
        <div
          class="flex flex-col w-full items-center"
          v-for="(item, index) in leftArr"
          :key="index"
        >
          <div class="h-2"></div>
          <centerinfo src="/static/vice/leftbtn.png" imaClass=" w-32">
            <!-- <h4>{{ item.aliasname }}</h4> -->
            <input type="text" v-model=item.aliasname />
          </centerinfo>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex mt-2" v-for="(item_left, index_left) in leftArr" :key="index_left">
          <div class="flex" v-for="(item_top, index_top) in topArr" :key="index_top">
            <div class="w-4"></div>
            <centerinfo :src="data[index_left][index_top] ? '/static/vice/select1_1.png' : '/static/vice/select0.png'" imaClass=" w-20 hei40" @click="switchVoice(item_left,index_left,item_top,index_top)">
            </centerinfo>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer">
      
      <div class="w-full flex justify-center">
          <el-image
            class="w-24 h-fit"
            src="/static/video-unselect.png"
            :fit="contain"
            @click="tapVideoBtn"
          />
          <div class="w-6"></div>
          <el-image
            class="w-24 h-fit"
            src="/static/voice-selected.png"
            :fit="contain"
            @click="tapVoiceBtn"
          />
          <div class="w-6"></div>
          <el-image
            class="w-24 h-fit"
            src="/static/home/volumebtn1.png"
            :fit="contain"
            @click="tapVolumeBtn"
          />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import centerinfo from "@/components/centerinfo.vue"; // @ is an alias to /src
import { useRouter } from "vue-router";
const router = useRouter();
import { ElMessage } from "element-plus";
import { onMounted, ref,watch } from "vue";
import ReqUtils from "@/unit/http/ReqUtils";
import ViceInpVo from "@/unit/model/vo/ViceInpVo";
import { it } from "element-plus/es/locale";
//下面的元素的id依次为5，6，7，8，，9，10，11，12，13，1，2，3，4，元素转化成{id:5,aliasname: "无线MIC"}的形式
let topArr = ref([
  {id:5,aliasname: "无线MIC"},
  {id:6,aliasname: "CH1"},
  {id:7,aliasname: "CH2"},
  {id:8,aliasname: "CH3"},
  {id:9,aliasname: "CH4"},
  {id:10,aliasname: "CH5"},
  {id:11,aliasname: "CH6"},
  {id:12,aliasname: "CH7"},
  {id:13,aliasname: "CH8"},
  {id:1,aliasname: "视频1"},
  {id:2,aliasname: "视频2"},
  {id:3,aliasname: "视频3"},
  {id:4,aliasname: "视频4"},
]);
//下面元素的id依次为5，1，2，3，4，6，7，8，9，10，11，12，13
let leftArr = ref([
  {id:5,aliasname: "功放"},
  {id:1,aliasname: "视频1"},
  {id:2,aliasname: "视频2"},
  {id:3,aliasname: "视频3"},
  {id:4,aliasname: "视频4"},
  {id:6,aliasname: "CH1"},
  {id:7,aliasname: "CH2"},
  {id:8,aliasname: "CH3"},
  {id:9,aliasname: "CH4"},
  {id:10,aliasname: "CH5"},
  {id:11,aliasname: "CH6"},
  {id:12,aliasname: "CH7"},
  {id:13,aliasname: "CH8"},
]);
let snapshot_input = topArr.value.map((item) => ({ ...item }));;
let snapshot_output = leftArr.value.map((item) => ({ ...item }));
let resdata = ref([] as any[]);
let data  = ref(Array.from({ length: 13 }, () => Array.from({ length: 13 }, () => false)));
const getVoiceInputList = async () => {
  resdata.value = await ReqUtils.getViceInpList() as any[];
  resdata.value.forEach((item,index) => {
    let inputIndex = parseInt(item.inputtype);
    if(inputIndex >=1 && inputIndex <= 4){
      inputIndex += 8;
    }else if(inputIndex === 9){
      inputIndex = 0;
    }else if(inputIndex >= 11){
      inputIndex -= 10;
    }
    if(item.cmddata) {
      //cmddata的形式如 `11A6,5.` 需要将输出源转成数组，变成[5,6]
      let outputArr = item.cmddata.split("A")[1].split(".")[0].split(",");
      outputArr.forEach((output:any) => {
        let outputIndex = parseInt(output);
        if(outputIndex === 5 ){
          outputIndex = 0;
        }else if(outputIndex >= 6){
          outputIndex -= 1;
        }
        data.value[outputIndex][inputIndex] = true;
      });
    };
  });
};
const switchVoice = async (item_left:string,index_left:number,item_top:string,index_top:number) => {
  let isSelect = data.value[index_left][index_top];
  data.value[index_left][index_top] = !isSelect;
  let item,cancelcmd,cmddata,outputStr,outputNum = 0;
  if(index_top === 0){
    item = resdata.value[4]
  }else if(index_top >= 1 && index_top <= 8){
    item = resdata.value[index_top + 4];
  }else if(index_top >=9){
    item = resdata.value[index_top - 9];
  }
  if(index_left === 0){
    outputNum = 5;
  }else if(index_left >= 5){
    outputNum = index_left + 1;
  }else{
    outputNum = index_left;
  }
  let aliasname = item.aliasname;
  let outputArr = item.cmddata.split("A")[1].split(".")[0].split(",");
  if(isSelect){
    cancelcmd =  outputNum + "$A" + item.inputtype + ".";
    //从数组中删除outputNum
    outputArr = outputArr.filter((output:any) => output !== outputNum.toString());
    if(outputArr.length != 0){
      outputStr = outputArr.join(",");
      cmddata = item.inputtype + "A" + outputStr + ".";
    }else{
      cmddata = "";
    }
  }else{
    cancelcmd = "";
    outputArr.push(outputNum.toString());
    cmddata = item.inputtype + "A" + outputArr.join(",") + ".";
  }
  await ReqUtils.voiceChangeSave(item.id,aliasname,cmddata,cancelcmd);
};
const tapVideoBtn = () => {
  router.push("/video");
};
const tapVoiceBtn = () => {
  router.push("/voice");
};
const tapVolumeBtn = () => {
  router.push("/volume");
};
const initAliasname = ()=> {
  ReqUtils.getViceInpList().then((res) => {
    res.forEach((item1:any) => {
      topArr.value.forEach((item2) => {
        if(item1.id === item2.id){
          item2.aliasname = item1.aliasname;
        }
      });
    })
  });
  snapshot_input = topArr.value.map((item) => ({ ...item }));
  ReqUtils.getViceOutList().then((res) => {
    res.forEach((item1:any) => {
      leftArr.value.forEach((item2) => {
        if(item1.id === item2.id){
          item2.aliasname = item1.aliasname;
        }
      });
    })
  });
  snapshot_output = leftArr.value.map((item) => ({ ...item }));
};
watch(topArr,newVal => {
  newVal.forEach((item,index) => {
    const oldVal = snapshot_input[index];
    if(item.aliasname != oldVal.aliasname){
      ReqUtils.changeVoiceInAliasname(item.id,item.aliasname);
    }
  });
},{deep:true});
watch(leftArr,newVal => {
  newVal.forEach((item,index) => {
    const oldVal = snapshot_output[index];
    if(item.aliasname != oldVal.aliasname){
      ReqUtils.changeVoiceOutAliasname(item.id,item.aliasname);
    }
  });
},{deep:true});
onMounted(async () => {
  await getVoiceInputList();
  initAliasname();
});
</script>

<style scoped>
input {
  /* // 去除未选中状态边框 */
  border: 0; 
/* // 去除选中状态边框 */
  outline: none; 
/* // 透明背景 */
  background-color: rgba(0, 0, 0, 0);
  color: #f4eeee;
  font-size: 15px;
  font-weight: bold;
  /* padding-left: 15px; */
  margin-left: 145px;
}
.lineGp {
  width: 150px;
  height: 100%;
}
.line1 {
  width: 150px;
  height: 2px;
  transform: rotate(-152.99deg);
  opacity: 1;
  background: #374eaa;
}
</style>
