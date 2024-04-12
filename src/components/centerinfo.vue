<template>
    <div class=" relative flex items-center w-fit">
        <el-image :class="imaClass" :src="src" :fit="contain" />
        <div class=" absolute inset-0 flex items-center justify-center">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    text: String,
    src:String,
    imaClass:String,
  }
})
export default class titlebtn extends Vue {
  text!: string
  src!: string
  imaClass!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hei40{
  height:40px;
}
</style>
