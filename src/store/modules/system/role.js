/**
 * 用户角色状态管理器
 */

import _ from 'lodash';
import { defineStore } from 'pinia';

export const useRoleStore = defineStore({
    id:'role', //唯一标识
    state: () => ({
        checkedData: [], //存储已选中的数据
        treeMap: new Map(), //存储树形结构数据的映射,用于快速查找
    }),
    actions: {
        // 初始化权限树选中数据
        initCheckedData(data) {
            this.checkedData = [...new Set(data)];
        },
        addCheckedData(data) {
            if (this.checkedData.some((e) => e === data)) {
              return;
            }
            this.checkedData.push(data);
          },
          // 选中本级以及子级
        addCheckedDataAndChildren(data) {
            let findIndex = this.checkedData.findIndex((val) => val === data.menuId);
            if (data.menuId && findIndex === -1) {
                this.addCheckedData(data.menuId);
            }
            if (data.children) {
                data.children.forEach((item) => {
                    this.addCheckedDataAndChildren(item);
                });
            }
        },
        deleteCheckedDataAndChildren(data) {
            let findIndex = this.checkedData.findIndex((val) => val === data.menuId);
            if (findIndex !== -1) {
              this.deleteCheckedData(findIndex);
            }
            if (data.children) {
              data.children.forEach((item) => {
                this.deleteCheckedDataAndChildren(item);
              });
            }
          },
          // 初始化权限树对象
        initTreeMap(tree) {
            for (let treeElement of tree) {
              if (!treeElement.menuId) {
                continue;
              }
              this.treeMap.set(treeElement.menuId, treeElement);
              if (treeElement.children && !_.isEmpty(treeElement.children)) {
                this.initTreeMap(treeElement.children);
              }
            }
          },
          // 选中上一级
        selectUpperLevel(module) {
            // 拿到上级key
            let parentId = module.parentId;
            if (!parentId) {
              return;
            }
            // 从权限树对象 获取该父级对象
            let parentModule = this.treeMap.get(parentId);
            if (!parentModule) {
              return;
            }
            // 选中父级
            let parentIndex = this.checkedData.findIndex((e) => parentModule.menuId === e);
            if (parentModule.menuId && parentIndex === -1) {
              this.addCheckedData(parentModule.menuId);
            }
            // 如果上级还有上级 则进行递归
            if (parentModule.parentId) {
              this.selectUpperLevel(parentModule);
            }
          },
    }
})