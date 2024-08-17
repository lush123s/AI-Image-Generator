let accessKey = 'Ew2SOJnTo8p1a5sIrD3NFMvTt98imQE-wz34_pS0rzY';
let button = document.getElementById('submit');
let showMore = document.getElementById('show-more');
let container = document.querySelector('.results');
let input = document.getElementById('input');

let page = 1;
async function showImage(){
  let keyword = input.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  if(keyword === ''){
    alert('Write Something Here')
  }
  // else if(keyword === 'sex'){
  //   alert('Sorry But cannot Genrate Allah se daro')
  // }
  // else if(keyword === 'xxx'){
  //   alert('Sorry But cannot Genrate Allah se daro')
  // }
  // else if(keyword === 'sexy'){
  //   alert('Sorry But cannot Genrate Allah se daro')
  // }
  else{
      if(page === 1){
        container.innerHTML = '';
      }
      let response =await fetch(url);
      let data = await response.json()
      let results = data.results;
console.log(results)
      results.forEach(value => {
          let img = document.createElement('img');
          console.log(value)
          img.src = value.urls.small;
          let imgLink = document.createElement('a');
          imgLink.href = value.links.html;
          imgLink.target = '_blank'
          imgLink.appendChild(img)
          container.appendChild(imgLink)
          
        });
        showMore.style.display = 'block'
    }
    console.log(page)
}

button.addEventListener('click',function(){
    console.log('hello')
    page = 1
    showImage();
})

showMore.addEventListener('click',function(){
    page++;
    showImage()
})