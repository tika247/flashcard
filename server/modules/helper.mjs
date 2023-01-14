const helper = {
  /**
   * @description watch when properties changes in wordData
   */
  watchPropChange: (obj, propName) => {
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
      get: () => value,
      set: newValue => {
        const oldValue = value;
        value = newValue;
        this.watchChangeFunc(newValue);
      },
      watchChangeFunc: (newValue) => {
        console.log(newValue);
      },
      configurable: true
    });
  },
}

export default helper;