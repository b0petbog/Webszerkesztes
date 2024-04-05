let idx = parseInt(document.getElementById('id').value);
console.log(idx);
document.querySelector('button').onclick = () => {
    console.log("fetch");
    fetch(`https://jsonplaceholder.org/users/?id=${idx}`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        console.log(response);
        return response.json();
    })
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
};