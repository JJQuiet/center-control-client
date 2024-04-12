<template>
   <div class=" relative">
        <el-image class=" w-48" :src="select?'/static/home/titlebtn1.png':'/static/home/titlebtn0.png'" :fit="contain" />
        <div class=" absolute inset-0 flex items-center justify-center ">
          <input type="text" class="text-white" :value="modelValue" @input="updateValue($event.target.value)" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  select: Boolean
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value:any) => {
  emit('update:modelValue', value);
};
</script>
<style scoped lang="scss">
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
</style>
