const url = "https://vvri.pythonanywhere.com/api/courses";
async function load(){
    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    const json = await response.json();
        let ki = `<tr><th>Kurzus nev</th><th>ID</th><th colspan="40">Kurzus résztvevői</th></tr>`;
        json.forEach(courses => {
            ki += `<tr>
                <td>${courses.name}</td>
                <td>${courses.id}</td>`;
            courses.students.forEach(student => {
                ki+=`<td>${student.id}: <br>${student.name}`
             })
        });
        document.getElementById("ki").innerHTML = ki;
    }
    catch(hiba){
        alert(hiba);
    }
}

async function MakeNewStudent() {
    try{
        let feldiak = document.getElementById("beDiak").value;
        let kivdiak = document.getElementById("beKurzus").value;    
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: "POST",
            body: JSON.stringify({
                name: feldiak,
                course_id:kivdiak,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const json = await response.json();
        alert("Új diák hozzáadva", json);
        await load()
    }
    catch(hiba){
        alert('Hiba a diák létrehozásánál:', hiba);
    }
}

async function MakeNewCourse() {
    try{
        let fel = document.getElementById("be").value;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: fel
            }),
        });
        const json = await response.json();
        alert("Kurzus sikeresen létrehozva", json);
        await load()
    }
    catch(hiba){
        alert('Hiba a kurzus létrehozásánál:', hiba);
    }    
}

async function SearchCourseById() {
    try{
        let id = document.getElementById("kuid").value;
        const response = await fetch("https://vvri.pythonanywhere.com/api/courses/" + id);
        if (!response.ok) {
            throw new hiba("A megadott kurzus nem található.");
        }
        const data = await response.json();
        document.getElementById("kurzusadat").innerHTML = `
                <p>Kurzus ID-ja: ${data.id}</p>
                <p>Név: ${data.name}</p>`;
    }
    catch(hiba){
        document.getElementById("kurzusadat").innerHTML = `<p>${hiba.message}</p>`;
        
    }
}

async function searchStudentID() {
    try{
        let id = document.getElementById("diakid").value;
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students/` + id);
        if (!response.ok) {
            throw new hiba("A megadott diák nem található.");
        }
        const student = await response.json();
        document.getElementById("diakadat").innerHTML = `
            <p>Diák nevének szerkesztése(kurzus ID)</p><input type="text" id="kurzus"><p>Új név</p><input type="text" id="nev">  
            <button onclick="ujdiaknev(${diakID})">Változtatás!</button><br>
            <p></p>
            <button onclick="deleteStudent(${diakID})">Törlés!</button>
            <p>Diák ID-ja: ${diakID}</p>
            <p>Név: ${student.name}</p>`;
    }
    catch(hiba){
        document.getElementById("diakadat").innerHTML = `<p>${hiba.message}</p>`;
    }
}

async function NewName(diaID) {
    try{
        let ujnev = document.getElementById("nev").value;
        let kurzId=document.getElementById("kurzus").value;
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students/` + diaID, {
            method: "PUT",
            body: JSON.stringify({
                name: ujnev,
                course_id: kurzId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        if (!response.ok) {
            throw new hiba('Hiba');
        }
        const json = await response.json();
        alert("A név sikeresen meg lett változtatva", json);
        await load();
    }
    catch(hiba){
        alert('Hiba a diák frissítésekor:', hiba)
    }
}

async function deleteStudent(diaID) {
    try{
        await fetch(`https://vvri.pythonanywhere.com/api/students/${diaID}`, {
            method: 'DELETE'
        });
        await load();
        alert("A törlés sikeres")
    }
    catch(hiba){
        alert('Hiba történt a diák törlésekor: ' + hiba);
    }
}