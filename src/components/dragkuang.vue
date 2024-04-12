<template>
  <draggable
    :group="{ name: 'inputdrag', pull: false, put: true }"
    v-model="dragLastArr"
    @end="onDragKuangEnd"
    item-key="outputtype"
    class="absolute inset-0 flex items-center justify-center"
  >
    <template #item="{ element }">
      <div class="relative w-fit">
        <el-image class="w-32" src="/static/home/leftbtn1.png" :fit="contain" />
        <div
          class="absolute inset-0 flex items-center justify-center text-white"
        >
          <h4 :class="element">{{ element.aliasname }}</h4>
        </div>
        <div class="absolute inset-0 -right-8 flex justify-end items-center">
          <el-image
            class="w-8"
            src="/static/home/del.png"
            :fit="contain"
            @click="tapDel"
            @touchend="tapDel"
          />
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, defineProps, defineEmits } from "vue";
import VideoInpVo from "@/unit/model/vo/VideoInpVo";
import VideoOutVo from "@/unit/model/vo/VideoOutVo";
import StrUnit from "@/unit/tool/StrUnit";
import VideoModel from "@/unit/model/VIdeoModel";
const props = defineProps({
  cmdstr: {
    type: String,
    default: "",
  },
});
let dragLastArr = ref<VideoInpVo[]>([]);
const onDragKuangEnd = (e1: any, e2: any, e3: any) => {
  emits("dragEnd", dragLastArr, -1);
};
const leftDragEnd = (nowIndex: number) => {
  console.log("leftDragEnd = " + nowIndex);
  emits("dragEnd", dragLastArr, nowIndex);
};
const tapDel = () => {
  emits("delSelf", dragLastArr);
};
const setCurrentDis = (vo: VideoOutVo) => {
  dragLastArr.value.splice(0, dragLastArr.value.length);
  if (!vo.cmddata) return;
  //1$.
  if (vo.cmddata.indexOf(StrUnit.getNumber(props.cmdstr) + "$") != -1) return;
  if (vo.cmddata.indexOf("8V") != -1) {
    //四分屏
    let arr = vo.cmddata.split("&");
    for (const str of arr) {
      if (str.indexOf("8V") != -1) {
        continue;
      }
      if (str && str.indexOf(props.cmdstr) != -1) {
        let cmdArr = str.split("V");
        let input = StrUnit.getNumber(cmdArr[0]);
        if (input) {
          let inputVo = VideoModel.getByInputType(input);
          if (inputVo) {
            dragLastArr.value.push(inputVo);
          }
        }
        break;
      }
    }
    return;
  }
  //全屏
  let cmdArr = vo.cmddata.split("V");
  let input = StrUnit.getNumber(cmdArr[0]);
  if (input) {
    let inputVo = VideoModel.getByInputType(input);
    if (inputVo) {
      dragLastArr.value.push(inputVo);
    }
  }
};
const getCmd = () => {
  if (dragLastArr.value.length <= 0)
    return StrUnit.getNumber(props.cmdstr) + "$";
  return dragLastArr.value[0].inputtype + props.cmdstr;
};
const emits = defineEmits(["dragEnd", "delSelf"]);
defineExpose({
  leftDragEnd,
  getCmd,
  setCurrentDis,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
