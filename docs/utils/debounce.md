### 防抖函数（某人：我tm一直以为是防止滚动页面时候页面抖动）
```javascript
export function debounce(fn, delay) {
  delay = delay || 1000;
  let timer = null;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay);
  };
}
```