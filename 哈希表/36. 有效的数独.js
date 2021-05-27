/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(var i = 0;i<9;i++){
        var o = {};
        for(var j = 0;j<9;j++){
            var item = board[i][j];
            if(o[item]) return false;
        }
    }
    for(var i = 0;i<9;i++){
        var o = {};
        for(var j = 0;j<9;j++){
            var item = board[j][i];
            if(o[item]) return false;
        }
    }
    for(var i = 0;i<9;i+=3){
        for(var j = 0;j<9;j+=3){
            var o = {};
            for(var h = 0;h<3;h++){
                var item = board[i+h][j];
                if(o[item]) return false;
            }
            for(var h = 0;h<3;h++){
                var item = board[i][j+h];
                if(o[item]) return false;
            }
        }
    }
    return true;
};