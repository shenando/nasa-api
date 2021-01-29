//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const btn = document.querySelector('.btn').addEventListener('click', searchNASA)

function searchNASA() {
    let input = document.querySelector('.input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=CcOn8NAiLOzrSNcRcRwEXpyVUsSgJvS4ibtVGtaE&date=`+input 
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        let name = data.title
        let pic = data.url
        let description = data.explanation

        document.querySelector('h2').innerText = name
        document.querySelector('img').src = pic
        document.querySelector('h3').innerText = description
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}