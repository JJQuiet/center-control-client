import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./tailwind.css";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";

const app = createApp(App)

app.use(ElementPlus).use(store).use(router);
app.mount('#app');

const debounce = (fn: any, delay: any) => {
    let timer = null as any
    
    return function () {
    const args = [] as any
    
    clearTimeout(timer)
    
    timer = setTimeout(function () {
    fn.apply(...args)
    
    }, delay)
    
    }
    
    }
    
    const _ResizeObserver = window.ResizeObserver
    
    window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
        constructor (callback: any) {
        callback = debounce(callback, 16)
        
        super(callback)
        
        }
    
    }
