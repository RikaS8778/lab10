// Initial contacts data 
let contacts = [ 
    {
        name: "Maxwell Wright", 
        phone: "019171916495", 
        email: "contact1@cctb.com" }, 
    { 
        name: "Raja Villarreal", 
        phone: "0863982895", 
        email: "contact2@cctb.com" 
    }, 
    { 
        name: "Helen Richards", 
        phone: "080031111", 
        email: "contact3@cctb.edu" 
    }
];

function serchName(){
    let serchN = false;
    do{
        serchN = prompt('Type [name] from the list.  *If you type [stop], close stop function.')
    }while(!serchN)
    if(serchN == 'stop'){
            return; 
    }
    let showLog = []
    let leng = contacts.length
    for(i=0;i<leng;i++){
        if(serchN == contacts[i].name){
            showLog.push(contacts[i]);
        }

    }
    console.log('Search contact info:' , showLog);
}


window.document.getElementById('serch').addEventListener('click', serchName)


window.document.getElementById('add').addEventListener('click', function(){
    let name = false;
    do{ 
        name = prompt('Type new contact : [Name]  *If you type [stop], close stop function.');
    }while(!name);
    if(name == 'stop'){
        return;
    }
    let phone = false;
    do{ 
        phone = prompt('Type new contact : [phone]  *If you type [stop], close stop function.');
    }while(!phone);
    if(phone == 'stop'){
        return;
    }
    let email = false;
    do{ 
        email = prompt('Type new contact : [email]  *If you type [stop], close stop function.');
        if(email != 'stop' && !email.includes('@')){
            email = false;
        }
    }while(!email);
    if(email == 'stop'){
        return;
    }
    contacts.push({
        name: name,
        phone: phone,
        email: email
    });
})

function updateContacts() {
    setTimeout(() => {
        const ul = document.getElementById('li-container');
        ul.innerHTML = ''; // Clear the existing list items
        let contactsLen = contacts.length;
        for (let i = 0; i < contactsLen; i++) {
            let li = document.createElement('li');
            let new_text = contacts[i].name + ' , ' + contacts[i].phone + ' , ' + contacts[i].email;
            li.innerHTML = new_text;
            ul.appendChild(li);
        }
    }, 3000);
}

document.getElementById('update').addEventListener('click', updateContacts);

const showList = () => console.log(contacts);
setInterval(()=> {
    showList()
}, 5000)


setInterval(() => {
    document.body.style.backgroundColor = getRandomColor()
}, 5000)


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

