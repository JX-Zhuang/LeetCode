/**
 * @param {string[]} names
 * @param {string[]} synonyms
 * @return {string[]}
 */
var trulyMostPopular = function (names, synonyms) {
    let id = 0;
    const nameMapId = {};
    synonyms = synonyms.map((item) => {
        const names = item.split(',');
        return [names[0].slice(1), names[1].slice(0, names[1].length - 1)]
    });
    for (const [name1, name2] of synonyms) {
        if (!nameMapId.hasOwnProperty(name1)) {
            nameMapId[name1] = id++;
        }
        if (!nameMapId.hasOwnProperty(name2)) {
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
    const visited = {};
    const result = [];
    for (let i = 0; i < names.length; i++) {
        const { name: name1, count: count1 } = names[i];
        const id1 = nameMapId[name1];
        let count = count1, name = name1;
        if(id1 === undefined){
            result.push(`${name}(${count})`);
            continue;
        }
        if (visited[id1]) continue;
        visited[id1] = true;
        for (let j = 0; j < names.length; j++) {
            const { name: name2, count: count2 } = names[j];
            const id2 = nameMapId[name2];
            if (visited[id2]) continue;
            if (uf.isConnected(id1, id2)) {
                count += count2;
                name = name.localeCompare(name2) === -1 ? name : name2;
                visited[id2] = true;
            }
        }
        if(name1 === 'Avmzs'){
            console.log(name)
        }
        result.push(`${name}(${count})`);
    }
    return result;
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