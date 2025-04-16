////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 用于测试的包装函数，触发 `global-object.js` 中的回退机制
 * 这个函数会在没有 globalThis 的环境中运行，模拟回退机制
 * 注意：此文件仅用于测试，不应在生产代码中导入
 */
export function getGlobalObjectWithFallback(obj) {
  // 直接复制 global-object.js 中的回退逻辑，但不进行 globalThis 检查
  Object.defineProperty(obj, 'typeDetectGlobalObject', {
    get() {
      return this;
    },
    configurable: true,
  });
  const global = obj.typeDetectGlobalObject; // eslint-disable-line
  delete obj.typeDetectGlobalObject;
  return global;
}

/**
 * 完整模拟 global-object.js 中的逻辑，包括 globalThis 检查
 * 用于测试两种代码路径：
 * 1. 当 globalThis 存在时
 * 2. 当需要使用回退机制时
 */
export function getGlobalObjectComplete(obj, mockGlobalThis = null) {
  // 保存原始的 globalThis
  const originalGlobalThis = global.globalThis;
  
  try {
    // 如果提供了模拟的 globalThis，就使用它
    if (mockGlobalThis !== null) {
      global.globalThis = mockGlobalThis;
    }
    
    // 完全复制 global-object.js 中的逻辑
    if (typeof globalThis === 'object') {
      return globalThis; // eslint-disable-line
    }
    
    Object.defineProperty(obj, 'typeDetectGlobalObject', {
      get() {
        return this;
      },
      configurable: true,
    });
    let result;
    try {
      // 注意：在这里我们不能使用变量名 typeDetectGlobalObject
      // 因为 Jest 会转换代码，所以我们使用 obj['typeDetectGlobalObject']
      result = obj['typeDetectGlobalObject']; // eslint-disable-line
    } catch (e) {
      // 处理可能的异常
      console.error('Error accessing typeDetectGlobalObject:', e);
      result = typeof window !== 'undefined' ? window : 
               typeof global !== 'undefined' ? global : obj;
    }
    delete obj.typeDetectGlobalObject;
    return result;
  } finally {
    // 恢复原始的 globalThis
    if (originalGlobalThis === undefined) {
      delete global.globalThis;
    } else {
      global.globalThis = originalGlobalThis;
    }
  }
} 