<template>
   <div class=" relative flex items-center">
        <el-image class=" w-64" src="/static/home/centertitle.png" :fit="contain" />
        <div class=" absolute inset-0 flex items-center justify-start">
            <div class=" w-10"></div>
            <h4 class=" text-white ">{{text}}</h4>
        </div>
        <el-image class=" w-12" src="/static/home/edit.png" :fit="contain" @click="tapEditInput" />

    </div>
</template>


<script setup lang="ts">
    import { ref,defineProps,defineEmits } from "vue";
    const props = defineProps({
	  text: {
        type: String,
        default: ''
      }
    })
    const tapEditInput = ()=>{
      debugger;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
