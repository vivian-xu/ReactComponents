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
