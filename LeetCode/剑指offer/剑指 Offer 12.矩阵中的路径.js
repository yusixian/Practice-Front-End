// @algorithm @lc id=100279 lang=javascript 
// @title ju-zhen-zhong-de-lu-jing-lcof
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function dfs(i, j, idx) {
        if(idx == word.length) return true // 找到单词了
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length 
            || board[i][j] == '#' || board[i][j] != word[idx]) 
            return false // 越界或者不匹配
        board[i][j] = '#'   // 置为#，避免重复访问
        let flag = false
        if(dfs(i+1, j, idx+1) || dfs(i-1, j, idx+1) 
        || dfs(i, j+1, idx+1) || dfs(i, j-1, idx+1))    // 四个方向试探
            flag = true
        board[i][j] = word[idx] // 恢复
        return flag
    }
    for(let i = 0; i < board.length; ++i) {
        for(let j = 0; j < board[0].length; ++j) {
            if(board[i][j] === word[0])
                if(dfs(i, j, 0)) return true
        }
    }
    return false
};