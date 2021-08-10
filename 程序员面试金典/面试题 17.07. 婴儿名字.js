var trulyMostPopular = function (names, synonyms) {
    let id = 0;
    const nameMapId = {}, idMapName = {};
    synonyms = synonyms.map((item) => {
        const names = item.split(',');
        const name1 = names[0].slice(1), name2 = names[1].slice(0, names[1].length - 1);
        return [name1, name2].sort().reverse();
    }).sort((a, b) => a[1].localeCompare(b[1]) * -1);
    for (const [name1, name2] of synonyms) {
        if (!nameMapId.hasOwnProperty(name1)) {
            idMapName[id] = name1;
            nameMapId[name1] = id++;
        }
        if (!nameMapId.hasOwnProperty(name2)) {
            idMapName[id] = name2;
            nameMapId[name2] = id++;
        }
    }
    const uf = new UnionFind(id);
    for (const [name1, name2] of synonyms) {
        uf.union(nameMapId[name1], nameMapId[name2]);
    }
    names = names.map(item => {
        const arr = item.split('(');
        return {
            name: arr[0],
            count: Number(arr[1].replace(')', ''))
        }
    });
    const nameMapCount = {};
    for (const { name, count } of names) {
        const id1 = nameMapId[name];
        const id2 = uf.find(id1);
        const name2 = idMapName[id2] || name;
        if (!nameMapCount.hasOwnProperty(name2)) {
            nameMapCount[name2] = 0;
        }
        nameMapCount[name2] += count;
    }
    return Object.keys(nameMapCount).map((name) => `${name}(${nameMapCount[name]})`);
};
class UnionFind {
    constructor(n) {
        this.parents = Array.from(new Array(n), (_, index) => index);
        this.count = n;
    }
    find(a) {
        if (a !== this.parents[a]) {
            this.parents[a] = this.find(this.parents[a]);
        }
        return this.parents[a];
    }
    union(a, b) {
        const x = this.find(a), y = this.find(b);
        if (x === y) return false;
        this.parents[x] = y;
        this.count--;
        return true;
    }
    isConnected(a, b) {
        return this.find(a) === this.find(b);
    }
    getCount() {
        return this.count;
    }
}