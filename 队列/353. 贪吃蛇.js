/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function (width, height, food) {
    this.width = width;
    this.height = height;
    this.food = [...food];
    this.sanke = [[0, 0]];
};

/**
 * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function (direction) {
    var head = this.sanke[0];
    var newHead;
    switch (direction) {
        case 'L':
            newHead = [head[0], head[1] - 1];
            break;
        case 'R':
            newHead = [head[0], head[1] + 1];
            break;
        case 'U':
            newHead = [head[0] - 1, head[1]];
            break;
        default:
            newHead = [head[0] + 1, head[1]];
    }
    //撞墙
    if (newHead[0] < 0 || newHead[0] >= this.height || newHead[1] < 0 || newHead[1] >= this.width) return -1;
    if (this.food[0] && (newHead[0] === this.food[0][0] && newHead[1] === this.food[0][1])) {
        this.food.shift();
        this.sanke.unshift(newHead);
        return this.sanke.length - 1;
    }
    //撞自己
    if (this.sanke.length > 4) {
        for (var i = 0; i < this.sanke.length - 1; i++) {
            var item = this.sanke[i];
            if (item[0] === newHead[0] && item[1] === newHead[1]) {
                return -1;
            }
        }
    }
    this.sanke.pop();
    this.sanke.unshift(newHead);
    return this.sanke.length - 1;
};

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */