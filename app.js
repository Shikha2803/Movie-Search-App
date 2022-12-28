const BASE_URL= 'http://api.tvmaze.com/search/shows?q=';
const form= document.querySelector('form');
const resultsection=document.querySelector('#result');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchText=form.children[0].value;
    removeImages(resultsection);
    getShows(searchText) ;
    form.children[0].value="";
})


//addinng searched shows with api
 const getShows=(searchText)=>{
    axios.get(`${BASE_URL}${searchText}`)
    .then((res)=>{
        const movies=res.data;
        // creating a image section for each show 
        for(let movie of movies){
            if(movie.show.image.medium!=null){
                const image=document.createElement('img');
                image.setAttribute('src',movie.show.image.medium);
                resultsection.append(image);
            
        }
    }
    })
    .catch((err)=>{
        console.log("Error: ", err);
    })
}

// removing the images of a existing show when search for a new show
const removeImages=(parent)=>{
    while(parent.firstChild){
        parent.firstChild.remove();
    }
}


// "hello" + name


