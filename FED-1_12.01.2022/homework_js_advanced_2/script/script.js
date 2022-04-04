const posts = [
    {id: 1,title:"Велосипед",text:"Пост про велосипед"},
    {id: 2,title:"rfrf",text:"Пост не про велосипед"},
    {id: 3,title:"dfdf",text:"Пост апап про велосипед"},
    {id: 4,title:"dfsfdf",text:"Пост пвапавпро велосипед"}
]

rootElem = document.querySelector("#root")

class Post{

    constructor(title,text){
        this.title = title;
        this.text = text;
        this.like = false;
    }
    get(config){
        const {tag, classList} = config;
        const rootElem = document.createElement(tag);

        // if(config.classList){
        //     rootElem.classList.add(...classList);
        // }
        classList && rootElem.classList.add(...classList);
        const titleElem = document.createElement('h2');
        const textElem = document.createElement('p');
        rootElem.append(titleElem,textElem);
        titleElem.innerText = this.title;
        textElem.innerText = this.text;
       return rootElem;
    }

    changeLike(){
        // if(this.like){
        //     this.like = false;
        // }else{
        //     this.like = true;
        // }

        this.like = !this.like;
    }


}

const postsPost = posts.map(({title,text}) => new Post(title, text));

rootElem.append(...postsPost.map(p=>p.get({tag:"div",classList:['card']})));

// const post1 = new Post('про велосипеды','Велосипеды очень полезны и разгружают трафик на дорогах');
// const post2 = new Post('про колу','она очень вкусная но вредная');


// rootElem.append(post1.get({tag: 'div',classList: ['active','card']}),
//                 post2.get({tag: 'section'}))