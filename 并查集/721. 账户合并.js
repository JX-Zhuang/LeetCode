/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const mailToIndex = new Map(), mailToName = new Map();
    let n = 0
    for (const account of accounts) {
        const name = account[0];
        for (let j = 1; j < account.length; j++) {
            const mail = account[j];
            if (!mailToIndex.has(mail)) {
                mailToIndex.set(mail, ++n);
                mailToName.set(mail, name);
            }
        }
    }
    const uf = new UnionFind(n);
    for (const account of accounts) {
        const parentIndex = mailToIndex.get(account[1]);
        for (let i = 2; i < account.length; i++) {
            const nextIndex = mailToIndex.get(account[i]);
            uf.union(parentIndex, nextIndex);
        }
    }
    const indexToMails = new Map();
    for (const [mail, index] of mailToIndex) {
        const parentIndex = uf.find(index);
        const mails = indexToMails.get(parentIndex) || [];
        mails.push(mail);
        indexToMails.set(parentIndex, mails);
    }
    const ans = [];
    for (const mails of indexToMails.values()) {
        const name = mailToName.get(mails[0]);
        mails.sort();
        ans.push([name, ...mails]);
    }
    return ans;
};
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((v, index) => index);
    }
    find(index) {
        //路径压缩
        if (index !== this.parent[index]) this.parent[index] = this.find(this.parent[index]);
        return this.parent[index];
    }
    union(index1, index2) {
        this.parent[this.find(index1)] = this.find(index2);
    }
}