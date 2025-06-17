 const clock = document.querySelector('.clock');

function updateClock() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        const timenow = hours >= 12 ? 'PM' : 'AM';

       
        hours = hours % 12;
        hours = hours ? hours : 12; 

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        clock.textContent = `${hours} : ${minutes} : ${seconds} ${timenow}`;
    }

setInterval(updateClock, 1000);
    updateClock();