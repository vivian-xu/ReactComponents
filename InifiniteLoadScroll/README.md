说明：
1. 必须要 iscroll 的 iscroll-probe

我用的是这个版本 "iscroll": "^5.2.0",

如下，引入

import Iscroll from 'iscroll/build/iscroll-probe';

2. 需要自定义滚动的最外边的高度要设置两个参数

needHeight // 是否需要自己定义高

height // 定义的高度

needHeight 为 true 才能使用 height 参数

3. gapTime 必须大于 1000, 否则 按  1000 算

4. 有的情况，前一个页面的 btn 是需要滚动一下页面才能看到的，到了iscroll 的页面的时候，由于页面没有在最顶端，iscroll 的计算会导致，忽略视屏上方隐藏的部分，__所以需要在这个页面的 component WillMount 的时候，加上 document.body.scrollTop = document.documentElement.scrollTop = 0 手动触发页面滚动到最上方 __
