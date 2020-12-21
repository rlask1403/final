let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let i =0;

window.onload=function(){
    setInterval(function(){
        h1.innerHTML = h1.innerHTML + '-'
        h2.innerHTML = h2.innerHTML + '-'
        i++;
        if(i == 80){
            h1.innerHTML = ''
            h2.innerHTML = ''
            i=0;
        }
    },50)
}

