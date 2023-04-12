function clock() {
    //var img = document.getElementById('imagem').style = ('')
    const areaDoRelogio = document.querySelector(".relogio"); //selecionar o relógio
    const horaAgora = new Date() //Função que ja existe no js. Essa função tem diversas informações relacionadas a tempo. Ex: segundos, minutos, meses, anos. Ela agrupa informações referentes ao tempo
    const horas = horaAgora.getHours(); //pegar as horas na função new date.
    const minutos = horaAgora.getMinutes(); //pegar minutos da função.
    const segundos = horaAgora.getSeconds(); //pegar os segundos na função new date. constante com cor apagada, é por que não esta sendo usada.
    const formatoHoras = horas.toString().padStart (2,"0"); //Para transformar o numero referente a hora em um string. Pad para definir o inicio da cadeia de caracteres, o limite de caracteres, e quando perceber que tem um caracter só, começara com zero. Ex: 01, 02.
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`; //text content para colocar texto no navegador, crase serve para usar placeholder, apenas com ela consigo construir frases concatenadas com variantes de maneira mais direta, coloco variaveis ou constantes dentro das placeholder, não funciona com aspas.

    const frase = document.querySelector('.frase'); //computador sempre reconhecerá as datas como numeros, ex: mês 1, mês 2, dia 1, dia 2.

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'); // Array é uma variavel onde a gente guarda um dado, ou uma informação que mantém varias informações. Ex: Dia, que guarda segunda, terça, quarta... Array não é variavel, é a tradução de arranjo.

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

    hoje = new Date() //infos relacionadas a tempo.

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`; // [] para puxar array (esperará eu definir qual eu quero puxar, 0 é o primeiro. Trocar o dado de forma manual.). getDay para ele me dar que dia é hoje. getDate para ele me dar o numero de dia que é hoje. 

    if (formatoHoras >= 6 && formatoHoras < 12) {

        document.body.style.backgroundImage = "url('https://img.elo7.com.br/product/zoom/357D125/tela-para-quadro-140x70-paisagem-anime-pier-garota-sol-oceano.jpg')"
        document.body.style.backgroundSize = "1400px 700px"
        document.body.style.color = "white"
        document.getElementById("tudo").style.backgroundColor = "#ec5f4f88"
        //img.src = ''

    }

    else if (formatoHoras >= 12 && formatoHoras < 18) {

        document.body.style.backgroundImage = "url('https://static.vecteezy.com/ti/vetor-gratis/p3/10823943-fundo-de-noite-de-cidade-de-anime-gratis-vetor.jpg')"
        document.body.style.backgroundSize = "1400px 700px"
        document.body.style.color = "white"
        document.getElementById("tudo").style.backgroundColor = "#252a62a3"

    }

    if (formatoHoras >= 18 && formatoHoras < 24) {

        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/41/fe/e4/41fee4e0786351afdf7db34e28af4966.gif')"
        document.body.style.backgroundSize = "1400px 700px"
        document.body.style.color = "white"
        document.getElementById("tudo").style.backgroundColor = "#6b9eb1a1"

    }



}




setInterval(clock, 1000) //para começar o relogio, 1000 milisegundos.
