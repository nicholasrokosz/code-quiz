const leaderboardEl = document.querySelector('#leaderboard');
const resetBtn = document.querySelector('#reset');
let storedUser = JSON.parse(localStorage.getItem('myScores')) || [];

getList();

resetBtn.addEventListener('click', e => {
    localStorage.clear();
    leaderboardEl.innerHTML = '';

})

function getList() {
    for (let i = 0; i < storedUser.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${storedUser[i]['initials']} — ${storedUser[i]['score']}`;
        leaderboardEl.appendChild(li);
    }
    return;
}