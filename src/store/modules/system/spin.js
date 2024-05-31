/**
 * loading 状态
 */
import {defineStore} from 'pinia';

export const useSpinStore = defineStore({
    id: 'spin',
    state: () => ({
        loading: false,
    }),

    actions: {
        hide() {
            this.loading = false; 
            //获取加载圈DOM对象
            let spins = document.querySelector('.ant-spin-nested-loading');
            spins.style.zIndex = 999;
        },
        show() {
            this.loading = true;
            let spins = document.querySelector('.ant-spin-nested-loading');
            spins.style.zIndex = 1001;
        },
    }
})