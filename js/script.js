const btn = document.querySelector("#send");

const notasArray = [];
var soma;

btn.addEventListener("click",(e)=>{

	e.preventDefault();

	const nota = document.querySelector("#notas");

	if (nota.value.trim() === "") {
      alert("Digite uma nota antes de enviar.");
      return;
}

	const value = parseFloat(nota.value); //converte valor da nota para número

	notasArray.push(value);

	const result = document.querySelector("#result_notas");

	result.innerHTML = notasArray.map((nota,index)=>{

		if(index < notasArray.length-1){

			return `${nota}<br>`;
		}
		 else{
		 	return nota;
		 }
	})

	  .join("");

	  nota.value = "";

	 
	 soma = notasArray.reduce((acc,nota)=> acc + nota,0);

	 var media = soma /notasArray.length;

	 const resultMedia = document.querySelector('#result_media');

	 resultMedia.innerHTML = `Média: ${media.toFixed(2)}`








})