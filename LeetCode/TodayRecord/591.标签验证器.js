// @algorithm @lc id=591 lang=javascript 
// @title tag-validator
// @test("<DIV>This is the first line <![CDATA[<div>]]></DIV>")=true
// @test("<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>")=true
// @test("<A>  <B> </A>   </B>")=false
/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
    function judge(tagname) {
        if(tagname.length > 9 || tagname.length < 1) return false
        for(let i = 0; i < tagname.length; i++) {
            if(tagname[i] >= 'A' && tagname[i] <= 'Z') continue
            return false
        }
        return true
    }
    let len = code.length
    let tags = []
    for(let i = 0; i < len; ++i) {
        let c = code[i]
        if(c === '<') {
            ++i;
            if(i >= len) return false
            c = code[i]     // <下一个字符
            if(c === '/') { // 结束符号
                const next = code.indexOf('>', i)
                if(next === -1) return false
                let tag = code.slice(i + 1, next)
                if(tags.length === 0) return false
                let last = tags.pop()
                if(last !== tag) return false
                i = next
                if(tags.length === 0 && i+1 != len) return false       // 如果最后一个标签是结束符号，则不能有其他字符
            } else if(c === '!') {  // cdata
                if(tags.length === 0 || i+8 > len) return false
                if(code.slice(i+1, i+8) !== '[CDATA[') return false
                const next = code.indexOf("]]>", i);
                if(next === -1) return false
                i = next
            } else {   // 开始标签
                const next = code.indexOf('>', i)
                if(next === -1) return false
                const tag = code.slice(i, next)
                if(!judge(tag)) return false
                tags.push(tag)
                i = next
            }
        } else {    // 必须有一个未闭合标签
            if(tags.length === 0) return false
        }
    }
    return tags.length === 0
};