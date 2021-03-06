// const xhr = new XMLHttpRequest()
// const url='https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=avenger'

// xhr.open('GET',url)

// xhr.onreadystatechange = () => {
//     if(xhr.readyState==4 && xhr.status==200){
//         const response=JSON.parse(xhr.responseText)
//         console.log(response);
//         const movieDetails=document.createElement('title')
//         movieDetails.title=response[0].title
//         console.log(movieUrl)

//         const para=document.createElement('p')
//         para.className='lead'
//         para.innerText=response[0].id
//         console.log(para);

//         const box=document.getElementById('main')
//         box.appendChild(movieDetails)
//         box.appendChild(para)
//     }
// }

// xhr.send()

const textBox=document.getElementById('input-text')
// const textBox=document.getElementById('text-input')
const button=document.getElementById('search-btn')

// console.log(button);
button.addEventListener('click',(e)=>{
    const movieName = textBox.value
    const xhr = new XMLHttpRequest();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=${movieName}`
    xhr.open('GET',url)
    // check
    // console.log('success');
    e.preventDefault()
    xhr.onreadystatechange = () => {
        if(xhr.readyState==4 && xhr.status==200){
            const movieData=JSON.parse(xhr.response)
            console.log(movieData); //just to check the api parameters
            const movieImage = document.createElement('img')
            
            // const movieUrl=document.createElement('movie-url')
            movieImage.innerHTML = movieData.results[0].backdrop_path
            // movieUrl.setAttribute('src', movieData.url)
            console.log(movieImage);
            const container=document.getElementById('image-container')
            container.appendChild(movieImage)
            
            
        }
    }
    xhr.send()
})