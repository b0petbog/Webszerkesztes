
// Összesített
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

        //console.log(response);

        user = response;
    }
    catch(err) { console.error(err); }

    return user;
}

async function ShowAll() {
    const uName = document.getElementById('seachedname').value;
    const user = await GetUser(uName);

    if(user.error)
        document.querySelector('#container').innerHTML += `
            <div class="result" id="hiba">
                <p>Hiba</p>
            </div>`;
    
    document.querySelector('#container').innerHTML += `
        <div class="result" id="showallcard">
            <p>Felhasználónév: ${user.username}</p>
            <p>Teljes név</p>
            <p>Klán</p>
            <p>Rank</p>
            <p>Pontszám</p>
                <td></td>
                <td>${user.name}</td>
                <td>${user.clan}</td>
                <td>${user.ranks.overall.rank}</td>
                <td>${user.ranks.overall.score}</td>
            </tr>
        </table>
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
    let languages = getValueOfObject(await GetUser(uName), 'ranks'), output = `<div class="result" id="languages">
    <table>
        <caption>${uName}</caption>
        <tr>
            <th>Nyelv</th>
            <th>Rank</th>
            <th>Pontszám</th>
        </tr>`;
    console.log(languages);
    
    for(let [key, value] of Object.entries(languages)) {
       output += `
            <tr>
                <td>${key}</td>
                <td>${value.rank}</td>
                <td>${value.score}</td>
            </tr>`;
    }
    
    output += `</table></div>`;
    document.querySelector('#container').innerHTML += output;
}