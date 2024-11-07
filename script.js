window.onload = function(){
    // When the window is loaded, get the date that the website need to track down.
    const finalDate = new Date("Dec 23, 2024 23:59:59")

    // Actual counting down function for the time counting down.
    // Taking two parameters,first is the anonimous function, second is the time duration of the function.
    const countDown = setInterval(() => {

        // Get the current time
        const currentTime = new Date()

        // Calculate the difference between the current time and the Final time.
        const totalCountDown = finalDate - currentTime

        //Calculate the actual days,hours,mins,secs from now to the final day.
        const day = Math.floor(totalCountDown/(1000*60*60*24))
        const hours = Math.floor((totalCountDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((totalCountDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((totalCountDown % (1000 * 60)) / 1000);


        //Navigating and save the elements of day, hours, minutes, seconds to the variables
        const DayEle = document.getElementById("days") 
        const HourEle = document.getElementById("hours") 
        const MinEle = document.getElementById("minutes") 
        const SecEle = document.getElementById("seconds")

        // Change their innerHTML values to the updated value
        DayEle.innerHTML = day +  " <p id='inner_days'>Days</p><br>"
        HourEle.innerHTML = hours + " <span>Hours</span>"
        MinEle.innerHTML = minutes + " <span>Min</span>"
        SecEle.innerHTML = seconds + " <span>S</span>"
        const title = document.getElementById("webTilte")
        const className = document.getElementById("ClassName")

        // addAnimation(DayEle);
        // addAnimation(HourEle);
        // addAnimation(MinEle);

        // Applied the animation to the elements
        addAnimation(SecEle);
        addAnimation(title)
        addAnimation(className)

    },1000);

    
    // This is the add animation function, the main task for this function is to add the animaiton class to the element from the parameter, then remove is after 
    // 300 miliseconds.
    function addAnimation(element){
        element.classList.add("changeAnimation");
        setTimeout(()=>{
            element.classList.remove("changeAnimation");
        },300)
    }
}