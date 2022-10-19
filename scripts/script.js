const fetchAdvice = async() =>{
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()

    document.getElementById('title').innerHTML = data.slip.id
    document.getElementById('text').innerHTML = data.slip.advice

    console.log(data)
}



const generateAdvice = document.getElementById('generateAdvice');
generateAdvice.addEventListener('click',fetchAdvice);