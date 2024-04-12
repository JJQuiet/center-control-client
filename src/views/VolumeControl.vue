<template>
  <div class="container-main">
    <img class="title-main" src="/static/volume/title.png" alt="无法显示" />
    <!-- </div> -->
    <div class="container-2">
      <img src="/static/volume/Frame 494.png" alt="woo" class="subtitle-1" />
      <img src="/static/volume/Frame 10190.png" alt="mm" class="subtitle-2" />
      <img src="/static/volume/Frame 10191.png" alt="bbb" class="subtitle-3" />
      <div class="container-2-1">
        <!-- 功放无线mic 内容区域-->
        <div class="container-2-1-1">
          <div class="power-amplifier">
            <div class="volume-value">
              <input v-model="volume[0].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[0].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10135.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="wireless-mic">
            <div class="volume-value">
              <input v-model="volume[1].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[1].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10136.png"
              alt="gg"
              class="img-item"
            />
          </div>
        </div>
        <!-- 视频输入1-4 内容区域 -->
        <div class="container-2-1-2">
          <div class="video-input-1">
            <div class="volume-value">
              <input v-model="volume[2].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[2].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10103.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="video-input-2">
            <div class="volume-value">
              <input v-model="volume[3].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[3].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10104.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="video-input-3">
            <div class="volume-value">
              <input v-model="volume[4].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[4].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10105.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="video-input-4">
            <div class="volume-value">
              <input v-model="volume[5].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[5].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10106.png"
              alt="gg"
              class="img-item"
            />
          </div>
        </div>
        <!-- CH输入1-8 内容区域 -->
        <div class="container-2-1-3">
          <div class="channel-1">
            <div class="volume-value">
              <input v-model="volume[6].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[6].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10107.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="channel-2">
            <div class="volume-value">
              <input v-model="volume[7].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[7].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10108.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="channel-3">
            <div class="volume-value">
              <input v-model="volume[8].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[8].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10109.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="channel-4">
            <div class="volume-value">
              <input v-model="volume[9].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[9].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10110.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="channel-5">
            <div class="volume-value">
              <input v-model="volume[10].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[10].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10111.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="channel-6">
            <div class="volume-value">
              <input v-model="volume[11].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[11].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10112.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="channel-7">
            <div class="volume-value">
              <input v-model="volume[12].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[12].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10113.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="channel-8">
            <div class="volume-value">
              <input v-model="volume[13].value" type="number" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input v-model="volume[13].aliasname" type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10114.png"
              alt="gg"
              class="img-item"
            />
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
            src="/static/home/vicebtn1.png"
            :fit="contain"
            @click="tapVoiceBtn"
          />
          <div class="w-6"></div>
          <el-image
            class="w-24 h-fit"
            src="/static/volume-selected.png"
            :fit="contain"
            @click="tapVolumeBtn"
          />
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import ReqUtils from "@/unit/http/ReqUtils";
import { useRouter } from "vue-router";
const router = useRouter();
const volume = ref([
  {"id":6,value: 0,type: 5, aliasname: "功放"},
  {"id":5,value: 0,type: 9,  aliasname: "无线mic"},
  {"id":1,value: 0,type: 1,  aliasname: "视频输入1"},
  {"id":2,value: 0,type: 2,  aliasname: "视频输入2"},
  {"id":3,value: 0,type: 3,  aliasname: "视频输入3"},
  {"id":4,value: 0,type: 4,  aliasname: "视频输入4"},
  {"id":7,value: 0,type: 11,  aliasname: "CH输入1"},
  {"id":8,value: 0,type: 12,  aliasname: "CH输入2"},
  {"id":9,value: 0, type: 13, aliasname: "CH输入3"},
  {"id":10,value: 0, type: 14, aliasname: "CH输入4"},
  {"id":11,value: 0, type: 15, aliasname: "CH输入5"},
  {"id":12,value: 0, type: 16, aliasname: "CH输入6"},
  {"id":13,value: 0, type: 17, aliasname: "CH输入7"},
  {"id":14,value: 0, type: 18, aliasname: "CH输入8"}
]);
let snapshot = volume.value.map(item => ({...item}));

// watch(volume, (newVal) => {
//   newVal.forEach((item, index) => {
//     const oldValue = snapshot[index];
//     if(item.aliasname !== oldValue.aliasname ||(item.value !== oldValue.value && item.value !== "" && item.value !== null && item.value !== undefined)){
//       let cmddata;
//       if(item.id == 6){
//         cmddata = `SetOutAudioDspGain/5:${item.value};`;
//       }else{
//         cmddata = `SetInAudioDspGain/${item.type}:${item.value};`;
//       }
//       ReqUtils.volumeChange(item.id, item.aliasname, cmddata);
//     }
//   });
//   // 更新快照
//   snapshot = newVal.map(item => ({...item}));
// }, {deep:true});
const tapVideoBtn = () => {
  router.push("/video");
};
const tapVoiceBtn = () => {
  router.push("/voice");
};
const tapVolumeBtn = () => {
  router.push("/volume");
};
const initAliasname= () => {
  ReqUtils.getViceInpList().then((res:any) => {
    res.forEach((item:any) => {
      volume.value.forEach((v) => {
        if(v.type == item.inputtype){
          console.log(v,item);
          v.aliasname = item.aliasname;
        }
      });
    })
  });
  ReqUtils.getViceOutList().then((res:any) => {
    volume.value[0].aliasname = res[4].aliasname;
  });
}
onMounted(async () => {
  await ReqUtils.getVolumeList().then((res:any) => {
    res.forEach((item:any) => {
      volume.value.forEach((v) => {
        if(v.id == item.id){
          let itemValueStr = item.cmddata.split(":")[1].split(";")[0];
          v.value = parseFloat(itemValueStr);
          // v.aliasname = item.aliasname;
        }
      });
    })
    snapshot = volume.value.map(item => ({...item}));
  });
  initAliasname();
});
</script>
<style lang="scss" scoped>
@mixin item($v1) {
  position: absolute;
  left: $v1; // 使用对应缩小后的值
  top: 0px; // 0.0
  width: 154px; // 200px -> 154.0px
  height: 102.41px; // 133px -> 102.41px
  opacity: 1;
  z-index: 0;
  .volume-value {
    position: absolute;
    left: 7.7px; // 10px -> 7.7px
    top: 69.3px; // 90px -> 69.3px
    width: 97.02px; // 126px -> 97.02px
    height: 27.72px; // 36px -> 27.72px
    border-radius: 6.16px; // 8px -> 6.16px
    opacity: 1;
    box-sizing: border-box;
    border: 0.77px solid #31cc93; // 1px -> 0.77px
    input {
      position: absolute;
      opacity: 1;
      // left: 22px; // 10px -> 7.7px
      bottom: 2px;
      font-family: 思源黑体;
      font-size: 18.48px; // 24px -> 18.48px
      font-weight: normal;
      line-height: 15.4px; // 20px -> 15.4px
      letter-spacing: 0px; // 不变
      font-feature-settings: "kern" on;
      // height: 90%;
      color: #ffffff;
      z-index: 1;
      // height: 20px;
    }
  }
  .custom-name {
    position: absolute;
    left: 0px; // 不变
    top: 0px; // 不变
    width: 154px; // 200px -> 154.0px
    height: 34.65px; // 45px -> 34.65px
    border-radius: 3.08px; // 4px -> 3.08px
    opacity: 1;
    background: linear-gradient(180deg, #323647 -3%, #222631 100%);
    box-sizing: border-box;
    border: 0.77px solid #18fefe; // 1px -> 0.77px
    box-shadow: 0px 0px 3.08px 0px rgba(24, 254, 254, 0.5); // 4px -> 3.08px
    .img-custom-name {
      position: absolute;
      left: 10.78px; // 14px -> 10.78px
      top: 12.71px; // 16.5px -> 12.71px
      width: 9.24px; // 12px -> 9.24px
      height: 9.24px; // 12px -> 9.24px
      transform: rotate(0deg);
      opacity: 1;
    }
  }
  input {
    position: absolute;
    left: 27.72px; // 36px -> 22px
    top: 9.62px; // 12.5px -> 9.62px
    opacity: 1;
    font-family: 思源黑体;
    font-size: 10.78px; // 14px -> 10.78px
    font-weight: normal;
    line-height: 15.4px; // 20px -> 15.4px
    letter-spacing: 0px; // 不变
    color: #ffffff;
  }
  .img-item {
    position: absolute;
    left: 0px; // 不变
    top: 40.81px; // 53px -> 40.81px
    width: 154px; // 200px -> 154.0px
    height: 61.6px; // 80px -> 61.6px
    opacity: 1;
    background: #213957;
  }
}

@mixin subtitle($v1) {
  position: absolute;
  left: 70px; // 156px -> 120.12px
  top: $v1; // 使用对应缩小后的值
  width: 338.15px; // 439px -> 338.15px
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 12.32px; // 16px -> 12.32px
  align-self: stretch;
}
@mixin container-2-1-item {
  position: relative;
  left: 0px; // 不变
  top: 0px; // 不变
  height: 102.41px; // 133px -> 102.41px
  opacity: 1;
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 72.38px; // 94px -> 72.38px
  z-index: 1;
}
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
}
.custom-name input {
  font-size: 15px !important;
  pointer-events: none;
}
.container-main {
  position: relative;
  width: 100%; // 2506px -> 1929.62px
  // height: 1021.79px; // 1327px -> 1021.79px
  opacity: 1;
  .container-1 {
    position: absolute;
    left: 227.92px; // 296px -> 227.92px
    top: 36.96px; // 48px -> 36.96px
    width: 179.41px; // 233px -> 179.41px
    height: 69.3px; // 90px -> 69.3px
    opacity: 1;
    .container-1-1 {
      position: absolute;
      left: 23.1px; // 30px -> 23.1px
      top: 10.78px; // 14px -> 10.78px
      width: 15%; // 64px -> 49.28px
      // height: 49.28px; // 64px -> 49.28px
      opacity: 1;
      z-index: 2;
    }
    .container-1-2 {
      position: absolute;
      left: 0px; // 不变
      top: 0px; // 不变
      // width: 179.41px; // 233px -> 179.41px
      // height: 69.3px; // 90px -> 69.3px
      width: 66%;
      border-radius: 3.08px; // 4px -> 3.08px
      opacity: 1;
      background: #080e1e;
      box-sizing: border-box;
      border: 1.54px solid #23c8ff; // 2px -> 1.54px
      z-index: 1;
    }
  }
  .title-main {
    position: absolute;
    left: 10.78px; // 14px -> 10.78px
    top: 5.39px; // 7px -> 5.39px
    width: 100%;
    // width: 1888.81px; // 2453px -> 1888.81px
    // height: 130.9px; // 170px -> 130.9px
    opacity: 1;
  }
  .container-2 {
    position: absolute;
    left: 0px; // 不变
    top: 0px; // 不变
    // height: 1021.79px; // 1327px -> 1021.79px
    opacity: 1;
    .subtitle-1 {
      @include subtitle(110px); // 294px -> 226.38px
    }
    .subtitle-2 {
      @include subtitle(280px); // 563px -> 433.51px
    }
    .subtitle-3 {
      @include subtitle(450px); // 832px -> 640.64px
    }
    .container-2-1 {
      position: absolute;
      left: 70px; // 156px -> 120.12px
      // top: 291.83px; // 379px -> 291.83px
      top: 170px;
      // height: 525.91px; // 683px -> 525.91px
      opacity: 1;
      display: flex;
      flex-direction: column;
      padding: 0px;
      gap: 70px;
      // gap: 109.34px; // 142px -> 109.34px
      .container-2-1-1 {
        @include container-2-1-item;
        .power-amplifier {
          @include item(0px); // 不变，因为是相对于父元素的起始位置
        }
        .wireless-mic {
          @include item(180px); // 294px -> 226.38px，对应第二个子项的左偏移
        }
      }
      .container-2-1-2 {
        @include container-2-1-item;
        .video-input-1 {
          @include item(0px);
        }
        .video-input-2 {
          @include item(180px); // 第二个子项
        }
        .video-input-3 {
          @include item(360px); // 第三个子项
        }
        .video-input-4 {
          @include item(540px); // 第四个子项
        }
      }
      .container-2-1-3 {
        @include container-2-1-item;
        .channel-1 {
          @include item(0px);
        }
        .channel-2 {
          @include item(180px); // 第二个子项
        }
        .channel-3 {
          @include item(360px); // 第三个子项
        }
        .channel-4 {
          @include item(540px); // 第四个子项
        }
        .channel-5 {
          @include item(720px); // 第五个子项
        }
        .channel-6 {
          @include item(900px); // 第六个子项
        }
        .channel-7 {
          @include item(1080px); // 第七个子项
        }
        .channel-8 {
          @include item(1260px); // 第八个子项
        }
      }
    }
  }
  .footer{
    position: absolute;
    top: 650px;
    left: 40%;
    z-index:3;
  }
}
</style>
