/**
 * @description watch when properties changes in wordData
 */
const helper = {
  watchPropChange: (obj, propName) => {
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
      get: () => value,
      set: newValue => {
        const oldValue = value;
        value = newValue;
        this.watchChangeFunc(newValue);
      },
      configurable: true
    });
  },
  watchChangeFunc: (newValue) => {
    console.log(newValue);
  }
}

export default helper;