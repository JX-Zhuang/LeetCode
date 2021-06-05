/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    var map = {};
    for (var employee of employees) {
        map[employee.id] = employee;
    }
    var visited = {};
    var total = map[id].importance;
    var helper = function (employee) {
        var employees = employee.subordinates;
        if (!employees) return;
        for (var id of employees) {
            const item = map[id];
            if (visited[id]) continue;
            total += item.importance;
            visited[id] = true;
            helper(item);
        }
    }
    helper(map[id]);
    return total;
};