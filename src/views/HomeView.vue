<template>
  <div class="flex flex-col h-screen">
    <div class="relative">
      <el-image src="/static/home/titlebg.png" :fit="contain" />
      <div class="absolute inset-0 flex items-center">
        <div class="w-4"></div>
        <h2 class="text-blue-500">视频输出列表</h2>
        <div class="w-8"></div>
        <el-image class="w-8" src="/static/home/jiantou.png" :fit="contain" />
        <div
          v-for="(item, index) in outPutArr"
          :key="index"
          class="flex"
          @click="tapOutPut(item)"
        >
          <div class="w-8"></div>
          <titlebtn :select="item.select" v-model="item.aliasname"></titlebtn>
        </div>
        <div class="w-8"></div>
        <el-image
          class="w-12"
          src="/static/home/edit.png"
          :fit="contain"
          @click="tapEditOutput"
        />
      </div>
    </div>
    <el-image src="/static/home/titlebgbottom.png" :fit="contain" />
    <div class="grow flex">
      <div class="flex flex-col items-center">
        <div class="h-10"></div>
        <inforender text="视频输入列表"></inforender>
        <div class="h-4"></div>
        <draggable
          class="h-full"
          :group="{ name: 'inputdrag', pull: 'clone', put: true }"
          @end="onDragEnd"
          v-model="inPutArr"
          item-key="inputtype"
          >
          <!--  -->
          <template #item="{ element }">
            <div class="flex flex-col w-fit" @dblclick="tapLeftBtn(element)">
              <div class="relative w-fit">
                <el-image
                  class="w-32"
                  :src="
                    element.select
                      ? '/static/home/leftbtn1.png'
                      : '/static/home/leftbtn0.png'
                  "
                  :fit="contain"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center text-white"
                >
                  <input
                    :key="element.id"
                    @touchend="focusInput"
                    type="text"
                    v-model="element.aliasname"
                  />
                </div>
              </div>
              <div class="h-6"></div>
            </div>
          </template>
          <!-- </centerinfo> -->
        </draggable>
      </div>
      <div class="grow flex flex-col px-10">
        <div class="flex items-center">
          <centerinfo src="/static/home/centerrinfo.png" imaClass=" w-40">
            <h4 class="text-cyan-300">布局列表</h4>
          </centerinfo>
          <div class="w-8"></div>
          <el-image
            class="w-8 h-fit"
            src="/static/home/jiantou.png"
            :fit="contain"
          />
          <div class="w-8"></div>
          <centerinfo
            :src="
              screenType == 'full'
                ? '/static/home/layoutbg1.png'
                : '/static/home/layoutbg2.png'
            "
            imaClass=" w-24"
            @click="tapScreenBtn('full')"
          >
            <el-image
              class="w-10 h-fit"
              src="/static/home/full.png"
              :fit="contain"
            />
          </centerinfo>
          <div class="w-8"></div>
          <centerinfo
            :src="
              screenType == 'four'
                ? '/static/home/layoutbg1.png'
                : '/static/home/layoutbg2.png'
            "
            imaClass=" w-24"
            @click="tapScreenBtn('four')"
          >
            <el-image
              class="w-10 h-fit"
              src="/static/home/four.png"
              :fit="contain"
            />
          </centerinfo>
        </div>
        <div class="h-10"></div>
        <centerinfo src="/static/home/centerbig.png" imaClass=" w-full">
          <div v-if="screenType == 'four'" class="w-full h-full flex flex-col">
            <div
              class="grow w-full flex border-b-emerald-300 border-0 border-b-2 border-solid"
            >
              <div
                class="w-full h-full relative border-r-emerald-300 border-0 border-r-2 border-solid"
              >
                <dragkuang
                  ref="kuangRef1"
                  cmdstr="V5"
                  @dragEnd="onDragKuangEnd"
                  @delSelf="onDelSelfKuang"
                ></dragkuang>
              </div>
              <div
                class="w-full h-full relative border-l-emerald-300 border-0 border-l-2 border-solid"
              >
                <dragkuang
                  ref="kuangRef2"
                  cmdstr="V6"
                  @dragEnd="onDragKuangEnd"
                  @delSelf="onDelSelfKuang"
                ></dragkuang>
              </div>
            </div>
            <div
              class="grow w-full flex border-t-emerald-300 border-0 border-t-2 border-solid"
            >
              <div
                class="w-full h-full relative border-r-emerald-300 border-0 border-r-2 border-solid"
              >
                <dragkuang
                  ref="kuangRef3"
                  cmdstr="V7"
                  @dragEnd="onDragKuangEnd"
                  @delSelf="onDelSelfKuang"
                ></dragkuang>
              </div>
              <div
                class="w-full h-full relative border-l-emerald-300 border-0 border-l-2 border-solid"
              >
                <dragkuang
                  ref="kuangRef4"
                  cmdstr="V8"
                  @dragEnd="onDragKuangEnd"
                  @delSelf="onDelSelfKuang"
                ></dragkuang>
              </div>
            </div>
          </div>
          <div v-if="screenType == 'full'" class="w-full h-full relative">
            <dragkuang
              ref="kuangRef5"
              cmdstr=""
              @dragEnd="onDragKuangEnd"
              @delSelf="onDelSelfKuang"
            ></dragkuang>
          </div>
        </centerinfo>
        <div class="h-4"></div>
        <div class="w-full flex justify-center">
          <el-image
            class="w-24 h-fit"
            src="/static/video-selected.png"
            :fit="contain"
            @click="tapVideoBtn"
          />
          <div class="w-6"></div>
          <el-image
            class="w-24 h-fit"
            src="/static/home/vicebtn1.png"
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
      <div class="w-64">
        <el-image
          class="w-24 h-fit"
          src="/static/home/save.png"
          :fit="contain"
          @click="tapSaveBtn"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";
import { useRouter } from "vue-router";
const router = useRouter();
import { ElMessage } from "element-plus";
import { onMounted, ref, watch } from "vue";
import titlebtn from "@/components/titlebtn.vue"; // @ is an alias to /src
import dragkuang from "@/components/dragkuang.vue"; // @ is an alias to /src
import inforender from "@/components/inforender.vue"; // @ is an alias to /src
import centerinfo from "@/components/centerinfo.vue"; // @ is an alias to /src
import { fa, id } from "element-plus/es/locale";
import ReqUtils from "@/unit/http/ReqUtils";
import VideoOutVo from "@/unit/model/vo/VideoOutVo";
import VideoInpVo from "@/unit/model/vo/VideoInpVo";
import VideoModel from "@/unit/model/VIdeoModel";
const screenType = ref("full");
const kuangRef1 = ref();
const kuangRef2 = ref();
const kuangRef3 = ref();
const kuangRef4 = ref();
const kuangRef5 = ref();
let outPutArr = ref<VideoOutVo[]>([]);
let inPutArr = ref<VideoInpVo[]>([]);
let snapshot_input = ref<VideoInpVo[]>([]);
let snapshot_output = ref<VideoOutVo[]>([]);
const inputAliasnames = ref<string[]>([]);
const outputAliasnames = ref<string[]>([]);
const tapOutPut = (e1: any) => {
  for (const data of outPutArr.value) {
    if (data == e1) {
      data.select = true;
      screenType.value = data.cmdname;
      setTimeout(() => {
        if (screenType.value == "full") {
          kuangRef5.value.setCurrentDis(data.clone());
        } else {
          kuangRef1.value.setCurrentDis(data.clone());
          kuangRef2.value.setCurrentDis(data.clone());
          kuangRef3.value.setCurrentDis(data.clone());
          kuangRef4.value.setCurrentDis(data.clone());
        }
      }, 100);
    } else data.select = false;
  }
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
const onDragEnd = (e1: any, e2: any, e3: any) => {
  if (screenType.value == "full")
    kuangRef5.value.leftDragEnd(e1.newDraggableIndex);
  else {
    kuangRef1.value.leftDragEnd(e1.newDraggableIndex);
    kuangRef2.value.leftDragEnd(e1.newDraggableIndex);
    kuangRef3.value.leftDragEnd(e1.newDraggableIndex);
    kuangRef4.value.leftDragEnd(e1.newDraggableIndex);
  }
};
const tapScreenBtn = (type: string) => {
  screenType.value = type;
};
const tapLeftBtn = (e1: any) => {
  for (const data of inPutArr.value) {
    if (data == e1) data.select = true;
    else data.select = false;
  }
};
const tapEditOutput = () => {
  debugger;
};
const onDelSelfKuang = (e1: any) => {
  while (e1.value.length > 0) {
    let data: any = e1.value.splice(0, 1);
  }

};
const onDragKuangEnd = (e1: any, index: number) => {
  let i = 0;
  while (e1.value.length > 1) {
    if (index != -1) {
      if (index != i) {
        let data: any = e1.value.splice(i, 1);
      }
    } else {
      let data: any = e1.value.splice(0, 1);
    }
    i++;
  }
};
const tapSaveBtn = async () => {
  let outVideoVo: VideoOutVo | null = null;
  for (const outVideo of outPutArr.value) {
    if (outVideo.select) {
      outVideoVo = outVideo;
      break;
    }
  }
  if (!outVideoVo) return;
  if (screenType.value == "full") {
    let cmd = kuangRef5.value.getCmd();
    if (cmd.indexOf("$") == -1) cmd = cmd + "V" + outVideoVo.outputtype + ".";
    else cmd = cmd + ".";

    let res = await ReqUtils.videoOutSave(
      outVideoVo.id,
      outVideoVo.aliasname,
      "full",
      cmd
    );
    if (!res) {
      ElMessage.error("保存失败");
      return;
    }
    ElMessage.success("保存成功");
    outVideoVo.cmddata = cmd;
    outVideoVo.cmdname = "full";
    debugger;
    return;
  }
  let cmd = "8V" + outVideoVo.outputtype + ".&";
  cmd += kuangRef1.value.getCmd() + ".&";
  cmd += kuangRef2.value.getCmd() + ".&";
  cmd += kuangRef3.value.getCmd() + ".&";
  cmd += kuangRef4.value.getCmd() + ".&";
  cmd = cmd.substring(0, cmd.length - 1);
  let res = await ReqUtils.videoOutSave(
    outVideoVo.id,
    outVideoVo.aliasname,
    "four",
    cmd
  );
  if (!res) {
    ElMessage.error("保存失败");
    return;
  }
  VideoModel.updateOutVideoVo2Four(new VideoOutVo(res), outPutArr);
  ElMessage.success("保存成功");
};
const focusInput = (el:any) => {
  el.target.focus();
}
watch(inPutArr, (newVal) => {
  newVal.forEach((item,index) => {
    const oldVal = snapshot_input.value[index];
    if(item.aliasname != oldVal.aliasname) {
      ReqUtils.changeVideoInAliasName(parseInt(item.id), item.aliasname);
    }
  })
}, { deep: true });
watch(outPutArr, (newVal) => {
  newVal.forEach((item,index) => {
    const oldVal = snapshot_output.value[index];
    if(item.aliasname != oldVal.aliasname) {
      ReqUtils.changeVideoOutAliasName(parseInt(item.id), item.aliasname);
    }
  })
}, { deep: true });
onMounted(async () => {
  let videoOutList: any = await ReqUtils.getVideoOutList();
  let videoInpList: any = await ReqUtils.getVideoInpList();
  let j = 0;
  let videoInArr = [];
  for (const data of videoInpList) {
    if (j == videoInpList.length - 1) {
      continue;
    }
    let vo = new VideoInpVo(data);
    videoInArr.push(vo);
    inPutArr.value.push(vo.clone());

    j++;
  }
  snapshot_input.value = inPutArr.value.map((item) => ({ ...item }));
  console.log('%c [ inPutArr.value ]-391', 'font-size:13px; background:pink; color:#bf2c9f;', inPutArr.value)
  VideoModel.videoInpArr = videoInArr;
  let videoOutArr = [];
  let i = 0;
  for (const data of videoOutList) {
    let vo = new VideoOutVo(data);
    if (i == 0) {
      vo.select = true;
      screenType.value = vo.cmdname;
      setTimeout(() => {
        if (screenType.value == "full") {
          kuangRef5.value.setCurrentDis(vo.clone());
        } else {
          kuangRef1.value.setCurrentDis(vo.clone());
          kuangRef2.value.setCurrentDis(vo.clone());
          kuangRef3.value.setCurrentDis(vo.clone());
          kuangRef4.value.setCurrentDis(vo.clone());
        }
      }, 100);
    }
    videoOutArr.push(vo);
    outPutArr.value.push(vo.clone());
    i++;
  }
  snapshot_output.value = outPutArr.value.map((item) => ({ ...item }));
  VideoModel.videoOutArr = videoOutArr;
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
  font-size: large;
  /* padding-left: 15px; */
  margin-left: 115px;
}
.header-col,
.header-row-col {
  text-align: center;
  align-self: center;
  font-weight: bold;
}
.grid-container {
  margin-top: 20px;
}
.header-col {
  width: 70px;
  text-align: end;
  padding-right: 15px;
  background-color: #f0f0f0;
}
.data-col-btn {
  width: 40px;
}
.header-row {
  height: 50px;
  background-color: #f0f0f0;
}
.header-row-col {
  width: 50px;
}
.label-container {
  position: relative; /* 设置相对定位作为后代绝对定位的参照 */
  /* 示例高度，根据需要调整 */
  height: 44px;
  /* width: 70px; */
  background-color: #f0f0f0;
}

.label-input {
  position: absolute; /* 绝对定位 */
  top: 0; /* 置于顶部 */
  right: 0; /* 置于右侧 */
  /* 一些内边距 */
  /* padding: 5px; */
  /* background-color: #dff0d8; */
}

.label-output {
  position: absolute; /* 绝对定位 */
  bottom: 0; /* 置于底部 */
  left: 0; /* 置于左侧 */
  /* 一些内边距 */
  /* padding: 5px; */
  /* background-color: #d9edf7;  */
}
.data-col-btn {
  margin: 5px;
}
</style>
