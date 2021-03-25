#### 动态规划
#### 回溯算法
#### BFS
```

```
#### 双指针
#### 二分搜索
#### 滑动窗口
``` javascript
function foo(s,t){
    var need = {},window = {};
    for(var item of s){
        if(!need.hasOwnProperty(item)){
            need[item] = 0;
        }
        need[item]++;
    }
    var left = 0, right = 0;
    while(right<s.length){
        var c = s[right++];
        if(need.hasOwnProperty(c)){
            if(!window.hasOwnProperty(c)){
                window[c] = 0;
            }
            window[c]++;
            if(need[c] === window[c]){
                xxxx
            }
        }
        window[c]++;
        while(xxx){
            var d = s[left++];
            xxx
            if(need.hasOwnPropertye(c)){
                if(need[d] === window[d]){
                    xxxx
                }                   
                window[d]--;
            }
        }
    }
}
```