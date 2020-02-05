let request = new XMLHttpRequest();
request.open("GET", "https://api.imgflip.com/get_memes");
request.send();
request.onload = () => {
    console.log(request);
    if(request.status == 200){
        console.log(JSON.parse(request.response));
    } else[
        console.log(`error ${request.status} ${request.statusText}`)
    ]
}

let app = document.getElementById('meme-display')
