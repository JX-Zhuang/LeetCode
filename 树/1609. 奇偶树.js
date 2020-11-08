var isEvenOddTree = function(root) {
    var arr = [];
    var dfs = function(node,level){
        if(!node) return;
        if(!arr[level]) arr[level] = [];
        arr[level].push(node.val);
        dfs(node.left,level+1);
        dfs(node.right,level+1);
    };
    dfs(root,0);
    for(var i = 0;i<arr.length;i++){
        var item = arr[i];
        if(item.length === 1){
            if(i%2===0){
                 if(item[0]%2===0) return false;
            }else{
                 if(item[0]%2===1) return false;
            }
            continue;
        }
        for(var j = 1;j<item.length;j++){
            if(i%2 === 0){
                if(item[j]%2===0 || item[j-1] >=item[j]) return false;
            }else{
                if(item[j]%2===1 || item[j-1] <=item[j]) return false;
            }
        }
    }
    return true;
};