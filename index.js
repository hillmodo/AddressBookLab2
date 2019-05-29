let contactList = document.querySelector(".contact-list");

class AddressBook {
    constructor() {
        this.contacts = [
            { name: "Sadie", phone: "313-555-1234", email: "sadiep@gmail.com", relation: "Family" },
            { name: "Kaleb", phone: "313-555-5678", email: "kalebp@gmail.com", relation: "Family" },
            { name: "Jacob", phone: "313-555-1313", email: "jacobp@gmail.com", relation: "Family" }
        ];
    }

    display() {
        contactList.innerHTML = "";
        this.contacts.forEach((contacts, index) => {
            let contactCard = document.createElement("ul");
            contactCard.innerHTML = `
            <li class="card" id="new-name"> Name: ${contacts.name}</li><br />
            <li class="card" id="new-phone"> Phone: ${contacts.phone}</li>
            <li class="card" id="new-email"> Email: ${contacts.email}</li>
            <li class="card" id="new-relation"> Relation: ${contacts.relation}</li>
            <li id="trash"><i id="${index}" class="material-icons">delete</i></li>
            `;
            contactList.appendChild(contactCard);
        })
    }

    add() {
        document.getElementById("add-new").onclick = (e) => {
            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let relation = document.getElementById("relation").value;
            let contact = { name, phone, email, relation };
            this.contacts.push(contact);
            this.display();
            this.deleteAt();
            console.log(this.contacts);
        }

    }

    deleteAt() {
        let trash = document.querySelectorAll(".material-icons");
        trash.forEach((t) => {
            t.addEventListener("click", (e) => {
                let target = e.target.id;
                this.contacts.splice(target, 1);
                t.parentNode.parentNode.remove();
            })
        })
        console.log(this.contacts);
    }
}

let addressBook = new AddressBook();
addressBook.display();
addressBook.add();
addressBook.deleteAt();