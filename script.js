const jokeEl=document.getElementById('joke');
const jokeBtn=document.getElementById('joke-btn');

const genereteJoke=()=>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange=function(){
        if(this.readyState === 4){
            if(this.status===200){
                jokeEl.innerHTML=JSON.parse(this.responseText).value;
                // console.log(this.responseText);
            }else{
                jokeEl.innerHTML='Something Went Wrong (Not Funny)'
            }
        }
    };
    xhr.send();
};

jokeBtn.addEventListener('click',genereteJoke);
document.addEventListener('DOMContentLoaded',genereteJoke);