window.onload = function(){
    const finalDate = new Date("Dec 23, 2024 23:59:59")

    const countDown = setInterval(() => {

        const currentTime = new Date()

        const totalCountDown = finalDate - currentTime

        //Calculate the actual days,hours,mins,secs from now to the final day.
        const day = Math.floor(totalCountDown/(1000*60*60*24))
        const hours = Math.floor((totalCountDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((totalCountDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((totalCountDown % (1000 * 60)) / 1000);


        //update the inner HTML
        document.getElementById("days").innerHTML = day +  " <p id='inner_days'>Days</p><br>"
        document.getElementById("hours").innerHTML = hours + " <span>Hours</span>"
        document.getElementById("minutes").innerHTML = minutes + " <span>Min</span>"
        document.getElementById("seconds").innerHTML = seconds + " <span>S</span>"

    },1000);
}