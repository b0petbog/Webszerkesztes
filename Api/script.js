function kereses(params) {
    varosnev = document.getElementById("id").value
    fetch('https://hur.webmania.cc/zips/'+ varosnev +'.json')
    .then(response => response.json())
    .then(zips => {
      console.log(zips);
      kiiras(zips)
    })
    .catch(error => {
document.getElementById("adatok").innerHTML="Nincs a keresésnek megfelelő találat"
      
    });
  
}



function kiiras(zips) {
    let ki = document.getElementById("adatok")
    ki.innerHTML = "";
    let varosok = []
    for (let i = 0; i < zips.zips.length; i++) {
        if (varosok.includes(zips.zips[i].name)) {
            continue
        }
        ki.innerHTML+=zips.zips[i].zip + ": "
        ki.innerHTML += zips.zips[i].name + "\n<br>"
        varosok.push(zips.zips[i].name)
        
    }
    document.getElementById("lab").style.display="none";
ki.style.height = "max-content"
ki.style.width = "319px"
}