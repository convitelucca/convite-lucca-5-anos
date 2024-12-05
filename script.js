const modalConfirmar = document.querySelector('.modalforms'); // Note o ponto para classes
const buttonRodape = document.querySelector('.modalrodape');

// Adicionando o evento de clique ao botão
buttonRodape.addEventListener('click', () => {
    modalConfirmar.classList.remove('modal-out')
    modalConfirmar.classList.add('modal-in')
    modalConfirmar.style.display = 'block'; // Define o modal como visível
    document.body.style.overflow = 'hidden'
    fecharButton.classList.remove('fechar-out')
    fecharButton.classList.add('fechar-in') 
});

const fecharButton = document.querySelector('.fechar')

fecharButton.addEventListener('click', () => {
    modalConfirmar.classList.remove('modal-in')
    modalConfirmar.classList.add('modal-out')
    fecharButton.classList.remove('fechar-in')
    fecharButton.classList.add('fechar-out') 
    setTimeout(() => {
        modalConfirmar.style.display = 'none'
        document.body.style.overflow = 'auto'
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
