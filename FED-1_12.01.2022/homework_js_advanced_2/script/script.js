const wordElement = document.querySelector('#word-form');

let cardValues = [];

rootElem = document.querySelector("#cards")

class Post{

    constructor(word,text){
        this.word = word;
        this.text = text;
        this.like = false;
    }
    get(config){
        const {tag, classList} = config;
        const rootElem = document.createElement(tag);
        classList && rootElem.classList.add(...classList);
        const wordElem = document.createElement('div');
        const textElem = document.createElement('div');
        const closeElem = document.createElement('div');
        const agreeElem = document.createElement('div');
        wordElem.innerText = this.word;
        wordElem.classList.add('text');
        textElem.innerText = this.text;
        textElem.classList.add('text');
        closeElem.innerHTML = '<i class="fa fa-times"></i>';
        closeElem.classList.add('close');
        agreeElem.innerHTML = '<i class="fa fa-check"></i>';
        agreeElem.classList.add('agree');
        rootElem.append(wordElem,textElem,closeElem,agreeElem);
       return rootElem;
    }

    changeLike(){
        this.like = !this.like;
    }


}
wordElement.addEventListener('submit', function (event) {
	event.preventDefault();
	const postsPost = new Post(this.word.value,this.text.value);
    const postPostPost = postsPost.get({tag:"div",classList:['card']});
    rootElem.append(postPostPost);
});
