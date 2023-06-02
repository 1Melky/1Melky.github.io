function Start(){
    window.location.href="kamer1.html";
    if(Start == onclick){
        alert(`Hello`)
    }
    else{
        alert(`Spelregels:
        1.  Je kan op specifieke dingen klikken.
        2.  Als je verliest bent dan moet je opnieuw starten.
        3.  Als je verliest gaat de site crashen
        `)
    }
} 
numbers=2062;
function Open(){
    fill = prompt('vul de getallen in');
    if(fill == numbers){
        let audio = new Audio('Media/audio.mp3');
        audio.play();
    setTimeout(function () { 
        window.location.href='kamer2.html';
    }, 3000);}
    else{
        alert('Nee, je bent nog steeds ontvoerd')
    }
}


