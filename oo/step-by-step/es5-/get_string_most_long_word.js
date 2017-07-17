/**
 * Created by yunfeiyang on 17-7-17.
 */
"use strict"
function get_string_most_long_word(string) {
    var words=string.split(' ');
    var len=0;
    var most_long_word;
    for (let word of words){
        if (len<word.length){
            len=word.length;
            most_long_word=word;
        }
    }
    return most_long_word;
}
let string='I hava a pencil hhhhhhhhh';
let most_long_word=get_string_most_long_word(string);
console.log(most_long_word);