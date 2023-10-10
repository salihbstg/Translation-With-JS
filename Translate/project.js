const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const button=document.querySelector("#submit");
const target=document.querySelector("#target")
const text=document.querySelector("#source");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '063c7fe787msh12f6742116fa08dp13308bjsndbb3169afdf4',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: text,
		target: 'tr',
		source: 'en'
	})
};
class Request {
    async get(url, options) {
        let response = await fetch(url, options);
        let result = await response.json();
        return result;
    }
}
button.addEventListener("click",()=>{
    const requ = new Request();
    requ.get(url, options).then(text=>target.value=text.translates[0].translateText);
})
