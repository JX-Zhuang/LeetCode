/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    var obj = {};
    for (var i = 0; i < accounts.length; i++) {
        var item = accounts[i];
        var name = item[0] + '_' + i;
        var mails = item.splice(1);
        var sameName = {};
        for (var key in obj) {
            if (key.includes(item[0])) {
                sameName[key] = obj[key];
            }
        }
        if (Object.keys(sameName).length === 0) {
            obj[name] = new Set(mails);
            continue;
        }
        let findNames = [];
        for (var key in sameName) {
            for (var mail of mails) {
                if (sameName[key].has(mail)) {
                    findNames.push(key);
                    break;
                }
            }
        }
        if (findNames.length === 0) {
            obj[name] = new Set(mails);
        } else {
            const findName = findNames[0];
            let set = new Set([...mails]);
            for (let i = 1; i < findNames.length; i++) {
                const name = findNames[i];
                set = new Set([...set, ...sameName[name]]);
                delete obj[name];
            }
            obj[findName] = new Set([...obj[findName], ...set]);
        }
    }
    var ans = [];
    for (var name in obj) {
        var arr = [name.substring(0, name.indexOf('_'))].concat([...obj[name]].sort());
        ans.push(arr);
    }
    return ans;
};