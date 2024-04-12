<template>
  <div class="container-main">
    <div class="container-1">
      <img src="/static/volume/容器.png" alt="?" class="container-1-1" />
      <img
        src="/static/volume/标牌-2.png"
        alt="hh"
        class="container-1-2"
        @click="save"
      />
    </div>
    <div class="title-main">
      <img src="/static/volume/title.png" alt="无法显示" />
    </div>
    <div class="container-2">
      <img src="/static/volume/Frame 494.png" alt="woo" class="subtitle-1" />
      <img src="/static/volume/Frame 10190.png" alt="mm" class="subtitle-2" />
      <img src="/static/volume/Frame 10191.png" alt="bbb" class="subtitle-3" />
      <div class="container-2-1">
        <!-- 功放无线mic 内容区域-->
        <div class="container-2-1-1">
          <div class="power-amplifier">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10135.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="wireless-mic">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
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
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10103.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="video-input-2">
            
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10104.png"
              alt="gg"
              class="img-item"
            />
          </div>
          <div class="video-input-3">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10105.png"
              alt="gg"
              class="img-item"
            />

          </div>
          <div class="video-input-4">
            
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
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
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10107.png"
              alt="gg"
              class="img-item"
            /></div>
          <div class="channel-2">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10108.png"
              alt="gg"
              class="img-item"
            /></div>
          <div class="channel-3">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10109.png"
              alt="gg"
              class="img-item"
            /></div>
          <div class="channel-4">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10110.png"
              alt="gg"
              class="img-item"
            /></div>
          <div class="channel-5">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10111.png"
              alt="gg"
              class="img-item"
            /></div>
          <div class="channel-6">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10112.png"
              alt="gg"
              class="img-item"
            /></div>
          <div class="channel-7">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10113.png"
              alt="gg"
              class="img-item"
            /></div>
          <div class="channel-8">
            <div class="volume-value">
              <input type="text" placeholder="0.0" />
            </div>
            <div class="custom-name">
              <img
                src="/static/volume/17.png"
                alt="aa"
                class="img-custom-name"
              />
              <input type="text" placeholder="请输入自定义名称" />
            </div>
            <img
              src="/static/volume/Frame 10114.png"
              alt="gg"
              class="img-item"
            /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const save = () => {
  console.log("保存");
};
</script>
<style lang="scss" scoped>
@mixin item($v1) {
          position: absolute;
          left: $v1;
          top: 0px;
          width: 200px;
          height: 133px;
          opacity: 1;
          z-index: 0;
          .volume-value {
            position: absolute;
            left: 10px;
            top: 90px;
            width: 126px;
            height: 36px;
            border-radius: 8px;
            opacity: 1;
            box-sizing: border-box;
            border: 1px solid #31cc93;
            input {
              position: absolute;
              opacity: 1;
              left: 10px;
              font-family: 思源黑体;
              font-size: 24px;
              font-weight: normal;
              line-height: 20px;
              letter-spacing: 0px;
              font-feature-settings: "kern" on;
              color: #ffffff;
              z-index: 1;
            }
          }
          .custom-name {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 200px;
            height: 45px;
            border-radius: 4px;
            opacity: 1;
            background: linear-gradient(180deg, #323647 -3%, #222631 100%);
            box-sizing: border-box;
            border: 1px solid #18fefe;
            box-shadow: 0px 0px 4px 0px rgba(24, 254, 254, 0.5);
            .img-custom-name {
              position: absolute;
              left: 14px;
              top: 16.5px;
              width: 12px;
              height: 12px;
              transform: rotate(0deg);
              opacity: 1;
            }
          }
          input {
            position: absolute;
            left: 36px;
            top: 12.5px;
            opacity: 1;
            font-family: 思源黑体;
            font-size: 14px;
            font-weight: normal;
            line-height: 20px;
            letter-spacing: 0px;
            color: #ffffff;
          }
          .img-item {
            position: absolute;
            left: 0px;
            top: 53px;
            width: 200px;
            height: 80px;
            opacity: 1;
            background: #213957;
          }

}
@mixin subtitle($v1) {
  position: absolute;
  left: 156px;
  top: $v1;
  width: 439px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
  align-self: stretch;
}
@mixin container-2-1-item{
  position: relative;
  left: 0px;
  top: 0px;
  height: 133px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 94px;
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
.container-main {
  position: relative;
  width: 2506px;
  height: 1327px;
  opacity: 1;
  .container-1 {
    position: absolute;
    left: 296px;
    top: 48px;
    width: 233px;
    height: 90px;
    opacity: 1;
    .container-1-1 {
      position: absolute;
      left: 30px;
      top: 14px;
      width: 64px;
      height: 64px;
      opacity: 1;
      z-index: 2;
    }
    .container-1-2 {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 233px;
      height: 90px;
      border-radius: 4px;
      opacity: 1;
      background: #080e1e;
      box-sizing: border-box;
      border: 2px solid #23c8ff;
      z-index: 1;
    }
  }
  .title-main {
    /* title */
    position: absolute;
    left: 14px;
    top: 7px;
    width: 2453px;
    height: 170px;
    opacity: 1;
  }
  .container-2 {
    position: absolute;
    left: 0px;
    top: 0px;
    // width: 2506px;
    height: 1327px;
    opacity: 1;
    .subtitle-1 {
      @include subtitle(294px);
    }
    .subtitle-2 {
      @include subtitle(563px);
    }
    .subtitle-3 {
      @include subtitle(832px);
    }
    .container-2-1 {
      position: absolute;
      left: 156px;
      top: 379px;
      // width: 2257px;
      height: 683px;
      opacity: 1;
      /* 自动布局 */
      display: flex;
      flex-direction: column;
      padding: 0px;
      gap: 142px;
      .container-2-1-1 {
        @include container-2-1-item;
        .power-amplifier {
          @include item(0px);
        }
        .wireless-mic {
          @include item(294px);
        }
      }
      .container-2-1-2 {
        @include container-2-1-item;
        .video-input-1 {
          @include item(0px);
        }
        .video-input-2 {
          @include item(294px);
        }
        .video-input-3 {
          @include item(588px);
        }
        .video-input-4 {
          @include item(882px);
        }
      }
      .container-2-1-3 {
        @include container-2-1-item;
        .channel-1 {
          @include item(0px);
        }
        .channel-2 {
          @include item(294px);
        }
        .channel-3 {
          @include item(588px);
        }
        .channel-4 {
          @include item(882px);
        }
        .channel-5 {
          @include item(1176px);
        }
        .channel-6 {
          @include item(1470px);
        }
        .channel-7 {
          @include item(1764px);
        }
        .channel-8 {
          @include item(2058px);
        }
      }
    }
  }
}
</style>
