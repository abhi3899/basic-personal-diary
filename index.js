const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
var count=1


function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
    
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);
    count++;

    displayEntryButton.addEventListener("click",function(){
        
        var allEntries=document.querySelectorAll(".single-entry")
        for(var i=0;i<allEntries.length;i++)
        {
            allEntries[i].style.display="none"
        }
        entryDiv.style.display="block"

    })
}

entryForm.addEventListener('submit', addEntryToDom)