const modalConfirmar = document.querySelector('.modalforms'); // Note o ponto para classes
const buttonRodape = document.querySelector('.modalrodape');
const buttonConfirmar = document.getElementById('submit')

// Adicionando o evento de clique ao botão
buttonRodape.addEventListener('click', () => {
    modalConfirmar.classList.remove('modal-out')
    modalConfirmar.classList.add('modal-in')
    modalConfirmar.style.display = 'flex'; // Define o modal como visível
});

buttonConfirmar.addEventListener('click', () => {
    modalConfirmar.classList.remove('modal-in')
    // modalConfirmar.classList.add('modal-out')
    setTimeout(() => {
        // modalConfirmar.style.display = 'none'
    }, 1000);
})


// Relogio
var target_date = new Date("2024-12-21T11:30:00").getTime();  // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
         
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
          
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );

    // format countdown string + set tag value
    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
// Relogio


const script_do_google = 'https://script.google.com/macros/s/AKfycbyjTu4swo2FHK6ebuZvTcZIglrzD1h9ppm9mha3R0n8zEBNY7L0AgWb5piO9maDlWAT/exec';
const dados_do_formulario = document.forms['formulario-participantes'];

dados_do_formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(script_do_google, { method: 'POST', body: new FormData(dados_do_formulario) })
        .then(response => {
            // Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
            alert('Dados enviados com sucesso!', response);
            dados_do_formulario.reset(); 
        })
        .catch(error => {
            // Se houver erro no envio, a menssagem abaixo será exibida
            console.error('Erro no envio dos dados!', error);
        });
});