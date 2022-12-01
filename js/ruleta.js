function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];

    }
    return array;
}

function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let TelevisorLG4k = shuffle([1890,2250,2610]);
    let Camera = shuffle([1850,2210,2570]);
    let mistery = shuffle([1770,2130,2490]);
    let PS = shuffle([1810,2170,2530]);
    let Headset = shuffle([1750,2110,2470]);
    let Drone = shuffle([1630,1990,2350]);
    let ROG = shuffle([1570,1930,2290]);

    let results = shuffle([
        TelevisorLG4k[0],
        Camera[0],
        mistery[0],
        PS[0],
        Headset[0],
        Drone[0],
        ROG[0],
    ]);

    if(TelevisorLG4k.includes(results[0])) SelectedItem = "Televisor LG 4k";
    if(Camera.includes(results[0])) SelectedItem = "Camara Go Pro++";
    if(mistery.includes(results[0])) SelectedItem = "???";
    if(PS.includes(results[0])) SelectedItem = "Playstation 4 Slim";
    if(Headset.includes(results[0])) SelectedItem = "Auriculares Gamer";
    if(Drone.includes(results[0])) SelectedItem = "Dron Mini";
    if(ROG.includes(results[0])) SelectedItem = "Laptop Asus ROG";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("aniamte");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        applause.play();
        Swal.fire({
            title: 'Bravo!',
            html: 'Ganaste: '+ SelectedItem + " | " + '<a href="https://duckduckgo.com" style="text-decoration:none;color:blue">Reclamar ahora</a>',
            imageUrl: '/img/mango.png',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
          })
    }, 5500);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";        
    }, 6000);
}