let users = []
let usercount = 0
let userid = 0 


//     const userForm = getElementById("userForm")
//     userForm.addEventListener("submit",(event)=>{
//         event.preventDefault();
//         const username = document.getElementById("newuser").value
//         const useremail = document.getElementById("userEmail").value
//         const userage = document.getElementById("userAge").value
//         const userid = document.getElementById("userid").value
//         const newuser = {
//         name : username,
//         email : useremail,
//         age : userage,
//         id : userid
//     }
// console.log(newuser)
// users.push(newuser)})



function addnewusers() {
    const addform = document.getElementById("userForm");
    const addbtn = document.getElementById("")
    addform.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("userName").value;
        const email = document.getElementById("userEmail").value;
        const userage = document.getElementById("userAge").value
        const newuser = {
            name: name,
            email: email,
            age: userage,
            id : userid++
        }
        usercount++;
        users.push(newuser);
        console.log(usercount);
    })
    renderuserprofiles()
}

addnewusers()


function renderuserprofiles() {
    const userTableBody = document.getElementById("userTableBody")
    if( users == 0 ){
        userTableBody.innerHTML=`
        No user Found`
    }
    else{
    
    userTableBody.innerHTML = "";
    users.forEach(user => {
        const cardyy = document.createElement("div");
        cardyy.innerHTML = `
        <tr>
                            <td>
                                <span class="user-name" data-bs-toggle="modal" data-bs-target="#userDetailModal">
                                    ${user.name}
                                </span>
                            </td>
                            <td>${user.email}</td>
                            <td>${user.age}</td>
                            <td>
                                <button class="btn btn-sm btn-danger w-100">Supprimer</button>
                            </td>
                        </tr>
    `
        userTableBody.appendChild(cardyy)
    })}
};

























