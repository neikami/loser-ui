### 节流函数
```javascript
export function throttle(fn, delay = 300) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        clearTimeout(timer);
      }, delay);
    }
  };
}
```