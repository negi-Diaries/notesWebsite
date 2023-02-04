console.log("this is notes taking website");
let notesArray;
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    // console.log(e);
    let addtitle = document.getElementById('addtitle');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }
    let myObj = {
        title:addtitle.value,
        text:addTxt.value
    }
    notesArray.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    addTxt.value = '';
    addtitle.value = '';
    // console.log(notesArray);
    showNotes();
});
// function to show elements from local storage.
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }
    let html = '';
    notesArray.forEach(function (element, index) {
        html += `
        <div class="notecard card" style="width: 18rem; margin:10px 15px;">
        <div class="card-body">
        <h5 class="card-title">note ${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button  id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
            </div>
        `
    });
    let notesElem = document.getElementById('notes');
    if (notesArray.length != 0) {
        notesElem.innerHTML = html;
    }else{
        notesElem.innerHTML = `Nothing to show use! "Add a note section above to add notes."`;
    }

};
// function to delete a  note
function deleteNote(index){
    console.log("I am deleting." , index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }
    notesArray.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    showNotes();
    
}
// to search something
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputValue = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('notecard');

    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputValue)){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
    })
});



// let a = 2;
// let b = 6;
// let c = a ** b;
// console.log(c);

console.log(notesArray);



