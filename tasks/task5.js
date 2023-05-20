var motivationalQuotes = ["Afrad Ke Hathon Mein Hai Aqwam Ki Taqdeer Har Fard Hai Millat Ke Muqaddar Ka Sitara <br> -- ALLMA IQBAL", " By action life may become both paradise and hell; This creature of dust in its nature is neither of light nor of fire. <br>-- ALLMA IQBAL","“I do business with my heart as much as I do with my head, both personally and professionally.” – <br>-- Ursula Burns","“Do every job you’re in like you’re going to do it for the rest of your life, and demonstrate that ownership of it.” –<br>-- Mary Barra"]

var changebtn = document.getElementById("btn");

changebtn.addEventListener("click", changeQuote);

function changeQuote(){
    var randomNumber = Math.floor(Math.random()*motivationalQuotes.length);

    document.getElementById("quote").innerHTML = motivationalQuotes[randomNumber]; 
}
