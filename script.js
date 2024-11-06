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
        const DayEle = document.getElementById("days") 
        const HourEle = document.getElementById("hours") 
        const MinEle = document.getElementById("minutes") 
        const SecEle = document.getElementById("seconds")

        DayEle.innerHTML = day +  " <p id='inner_days'>Days</p><br>"
        HourEle.innerHTML = hours + " <span>Hours</span>"
        MinEle.innerHTML = minutes + " <span>Min</span>"
        SecEle.innerHTML = seconds + " <span>S</span>"
        const title = document.getElementById("webTilte")
        const className = document.getElementById("ClassName")

        // addAnimation(DayEle);
        // addAnimation(HourEle);
        // addAnimation(MinEle);
        addAnimation(SecEle);
        addAnimation(title)
        addAnimation(className)

    },1000);

    

    function addAnimation(element){
        element.classList.add("changeAnimation");
        setTimeout(()=>{
            element.classList.remove("changeAnimation");
        },300)
    }
}