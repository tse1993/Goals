const goalInput = document.querySelector('#goalInput');
const btn = document.querySelector('#btn');
const goalList = document.querySelector('#myList');

function addGoal() {
    const goalText = goalInput.value.trim();

    if (goalText !== "") {
        const li = document.createElement('li');
        
        const goalSpan = document.createElement('span');
        goalSpan.textContent = goalText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖️';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', function() {
            goalList.removeChild(li);
        });
        
        li.appendChild(goalSpan);
        li.appendChild(deleteBtn);
        
        goalList.appendChild(li);
        goalInput.value = "";
    } else {
        alert("Please enter a goal!");
    }
}

btn.addEventListener('click', addGoal);
goalInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addGoal();
    }
});