export const registerRootComponent = () => {};
export const Link = () => null;
export const NativeModules = {};
export const DeviceEventEmitter = {
  addListener: () => ({ remove: () => {} }),
  emit: () => {},
  removeAllListeners: () => {},
};

export default {
  registerRootComponent,
  DeviceEventEmitter,
  Link,
  NativeModules,
};
