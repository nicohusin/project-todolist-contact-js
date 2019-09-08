// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("button-frame");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0]

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

 
let todoItems = [];
let list = document.getElementById('variety-list')

function addTodo() {
  todoItems.push({name: document.getElementById("input-bar").value, phone : document.getElementById("input-number").value})
  mapList()
}

function mapList () {
  for (i = 0; i < todoItems.length; i++) {
    if (i === todoItems.length - 1) {
      let itemList = document.createElement('li')
      list.innerHTML = list.innerHTML + "<li class=''>" + "<label>Name :</label>"  
      + todoItems[i].name + "<br/>" + "<label>Phone : </label>" + todoItems[i].phone + "</li>"
    }
  }
}

function tooglecheck(onclickvalue){
  console.log(onclickvalue)
  let checkbox = document.getElementById(`checkBox${onclickvalue}`)
  let list = document.getElementById(`list${onclickvalue}`)
  if(checkbox.checked === true ){
    list.classList.add("checked")
  } else {
    list.classList.remove("checked")
  }
}

function buttonDelete(onclickvalue){
  let list = document.getElementById(`list${onclickvalue}`)
  list.style.display = "none"
}


// function mapList2 () {
//   console.log('todo', todoItems)
//   todoItems.map((item, index) => {
//     if (index === todoItems.length - 1) {
//       let itemList = document.createElement('li')
//       list.innerHTML = list.innerHTML + "<li>" + todoItems[todoItems.length - 1]  + "</li>"
//     }
//   })
// }
//

