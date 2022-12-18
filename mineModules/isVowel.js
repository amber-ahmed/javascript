function isVowel(ch){
    var vowels = ['a','e','i','o','u','A','E','I','O','U']
    var flag = vowels.some((ele)=>{
        return ele == ch.charAt(0)
    })
    return flag
}
export default isVowel