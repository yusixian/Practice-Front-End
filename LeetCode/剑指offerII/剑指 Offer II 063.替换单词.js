// @algorithm @lc id=1000327 lang=javascript 
// @title UhWRSj
/**
 * @param {string[]} dictionary
 * @param {string} s                entence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const createTree = (dict) => {
        let rt = {}
        for(const word of dict) {
            let p = rt
            for(const ch of word) {
                if(!p[ch])
                    p[ch] = {}
                p = p[ch]
            }
            p.end = true
        }
        return rt
    }
    
    const replace = (rt, s) => {
        let p = rt
        let rs = ''
        for(const ch of s) {
            rs += ch
            if(p[ch] && p[ch].end) return rs
            else if(p[ch]) p = p[ch]
            else return s   // !p[ch]
        }
        return s
    }
    // 用词根初始化字典树
    const tree = createTree(dictionary)
    let res = sentence.split(' ')
    for(let i = 0; i < res.length; ++i) {
        res[i] = replace(tree, res[i])
    } 
    return res.join(' ')
};