/**
 * 打印错误到控制台
 */

export const smartSentry = {
    /**
     * 手动抓取报错
     */
    captureError: (error) => {
        if (error.config && error.data && error && error.headers && error.request && error.status) {
            return;
        }
        //打印到控制台
        console.error(error);
    }
}