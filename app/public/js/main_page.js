'use strict';
const log = console.log;
window.addEventListener('click', likePost);
window.addEventListener('click', savePost);
window.addEventListener('click', commentPost);
window.addEventListener('click', closeImage);
window.addEventListener('click', popImage);

let posts = [];

function makeCard(imageSource, userName, location, description, type) {

    function makeHead(usernsame, location) {
        const cardHead = document.createElement('div');
        cardHead.setAttribute('class', 'card-head');

        const DP = document.createElement('div');
        DP.setAttribute('class', 'user-pic');

        cardHead.appendChild(DP);

        const user = document.createElement('span');
        user.setAttribute('class', 'username');
        user.appendChild(document.createTextNode(userName));

        cardHead.appendChild(user);

        const loc = document.createElement('span');
        loc.setAttribute('class', 'location');
        if (location) {
            loc.appendChild(document.createTextNode(location));
        } else {
            loc.appendChild(document.createTextNode(""));
        }


        cardHead.appendChild(loc);

        return cardHead
    }

    function makeBody(imageSource, description) {
        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        let image;
        if (type === "IMAGE") {
            image = document.createElement('img');
            image.setAttribute('class', 'content');
            image.setAttribute('src', imageSource);
        } else {
            image = document.createElement('iframe');
            image.setAttribute("frameborder", '0');
            image.setAttribute('class', 'content');
            image.setAttribute('src', imageSource);
        }

        cardBody.appendChild(image);

        const caption = document.createElement('div');
        caption.setAttribute('class', 'description');
        caption.appendChild(document.createTextNode(description));

        cardBody.appendChild(caption);

        return cardBody
    }


    function makeActions() {
        const actions = document.createElement('div');
        actions.setAttribute('class', 'card-actions-buttons');

        const first = document.createElement('i');
        first.setAttribute('class', 'fas fa-comment card-action-button');
        actions.appendChild(first);

        const second = document.createElement('i');
        second.setAttribute('class', 'fas fa-bookmark card-action-button');
        actions.appendChild(second);

        const third = document.createElement('i');
        third.setAttribute('class', 'fas fa-heart card-action-button');
        actions.appendChild(third);

        return actions
    }

    const cardsContainer = document.querySelector('.cards-container');
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const head = makeHead(userName, location);
    const body = makeBody(imageSource, description);
    const actions = makeActions();

    body.appendChild(actions);
    card.appendChild(head);
    card.appendChild(body);
    cardsContainer.appendChild(card);
    posts.push(card)
}


(function getPictures() {
    // This function will get pictures from instagram later. For now we populate it from downloaded pictures.
    for (let i = 0; i < 20; i++) {
        makeCard("/../img/random/pic" + i + ".jpg", 'username', 'location', 'description is a description');
    }
})();


function likePost(e) {
    if (e.target.classList.contains('fa-heart')) {
        if (e.target.style.color == 'dimgrey') {
            e.target.style.color = 'red'
        } else {
            e.target.style.color = 'dimgrey'
        }
    }
}

function savePost(e) {
    if (e.target.classList.contains('fa-bookmark')) {
        if (e.target.style.color == 'dimgrey') {
            e.target.style.color = 'black'
        } else {
            e.target.style.color = 'dimgrey'
        }
    }
}

function commentPost(e) {
    if (e.target.classList.contains('fa-comment')) {
        startComment(e)
    }
}

function startComment(e) {
    const modal = document.querySelector('.modal, .comment-modal');
    const img = e.target.parentElement.parentElement.children[0];
    const header = e.target.parentElement.parentElement.parentElement.children[0];
    const usrpic = header.children[0];
    const username = header.children[1].innerText;
    const location = header.children[2].innerText
    //TODO: CREATE A COMMENT PORTAL
}

function popImage(e) {
    if (e.target.classList.contains('content') || e.target.classList.contains('card-head') || e.target.classList.contains('card-body')) {
        const modal = document.querySelector('.modal, .img-modal');
        let clonedCard;
        if (e.target.classList.contains('content')) {
            clonedCard = e.target.parentElement.parentElement.cloneNode(true)
        } else {
            clonedCard = e.target.parentElement.cloneNode(true)
        }

        if (modal.style.display == '') {
            clonedCard.style.height = '600px';
            clonedCard.style.width = '550px';
            clonedCard.children[1].style.height = '500px';
            clonedCard.style.left = '50%';
            clonedCard.style.top = '50%';
            clonedCard.style.transform = 'translate(-50%, -50%)';

            modal.appendChild(clonedCard);
            modal.style.display = 'block'
        }
    }
}

function closeImage(e) {
    const modal = document.querySelector('.modal');
    if (e.target.classList.contains("modal")) {
        if (modal.style.display == 'block') {
            modal.removeChild(modal.lastChild);
            modal.style.display = ''
        }
    }
}

//function getCategory(credentials) {
//    const url = '/getUserCategory';
//    fetch(url)
//        .then((res) => {
//            if (res.status == 404) {
//                log("problem")
//            } else {
//                log("object is", res);
//                return res.json()
//            }
//        }).then((json) => {
//            log("RESPONSE WAS:", json.category);
//            getHashTag(json.category, credentials)
//        }).catch((error) => {
//            log(error)
//        })
//
//}
