async function GetUser(username) {
    let user = null;
    try {
        const request = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
        if(!request.ok)
            throw new Error('REQUEST ERROR');
        const response = await request.json();
        if(response.success) {
            if(response.success === "false")
                return { "error": "A felhasználó nem található" };
        }
        user = response;
    }
    catch(err) { console.error(err); }
    return user;
}

async function ShowAll() {
    const uName = document.getElementById('seachedname').value;
    const user = await GetUser(uName);
    document.querySelector('#cards').innerHTML += `
        <div id="showallcard">
            <p>Felhasználónév: ${user.username}</p>
            <p>Teljes név: ${user.name}</p>
            <p>Klán: ${user.clan}</p>
            <p>Rank: ${user.ranks.overall.rank}</p>
            <p>Pontszám: ${user.ranks.overall.score}</p>
        </div>`;
}

function getValueOfObject(obj, k) {
    for(let [key, value] of Object.entries(obj)) {
        if(key === k)
            return value.languages;
    }
}

async function ShowByLanguages() {
    const uName = document.getElementById('seachedname').value;
    let languages = getValueOfObject(await GetUser(uName), 'ranks'), output = `<div id="languagescard">
        <p>Felhasználónév: ${uName}</p>`;
            
    for(let [key, value] of Object.entries(languages)) {
       output += `
       <p>Nyelv: ${key}</p>
       <p>Rank: ${value.rank}</p>
       <p>Pontszám: ${value.score}</p>`;
    }
    output += `</div>`;
    document.querySelector('#cards').innerHTML += output;
}

function SetBackSite() {
    document.querySelector('#cards').innerHTML = ``;
}