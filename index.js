var quote=document.getElementById("quote");
var author=document.getElementById("author");
var generate=document.getElementById("generate");
var tweet=document.getElementById("tweet");
const url="https://api.quotable.io/random";

async function quotegenerator(url){
    const response= await fetch(url);
    var data= await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;

}
quotegenerator(url);

function twitter(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"---"+author.innerHTML);
}