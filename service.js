//skill variables
let description = document.getElementById('text-descriptif');
let telephone = document.getElementById('telephone');
let facebook = document.getElementById('facebook');
let firstRowOfSkills = document.getElementById("first-row-of-skills");
let secondRowOfSkills = document.getElementById("second-row-of-skills");
//project variables
let projectContainer = document.getElementById("projects-container");

function createSkill(parent, skillTechnology, skillImage){
    let skillContainer = document.createElement('div');
    let firstBloc = document.createElement('div');
    let secondBloc = document.createElement('div');
    let skillTech = document.createElement('img');    
    let skillName = document.createElement('p');

    skillContainer.classList.add("col", "s4");    
    firstBloc.classList.add('skill__element');
    secondBloc.classList.add('skill__name');
    skillTech.setAttribute('src', skillImage);
    skillTech.setAttribute('alt', skillTechnology);
    skillName.textContent = skillTechnology;

    firstBloc.appendChild(skillTech);
    skillContainer.append(firstBloc, secondBloc, skillName);
    parent.appendChild(skillContainer);
}
function createProject(parent, projectImage, technoList, siteWeb, gitHub){
    let element = document.createElement('div');
    let techno = document.createElement('div');    
    let titre = document.createElement('h3');   
    let listOfTechnologies = document.createElement('div');
    let list = document.createElement('p');   
    let technoLink = document.createElement('div');
    let webSiteLink = document.createElement('a');    
    let gitHubLink = document.createElement('a');
    
    element.classList.add('first-element');
    element.style.backgroundImage = `url(${projectImage})`;
    techno.classList.add('technos');
    titre.textContent = "Technologies utilisées";
    listOfTechnologies.classList.add('technos-list');
    list.textContent = "";
    technoList.forEach(item => {
        list.textContent += item; 
    });
    technoLink.classList.add('technos-link');
    webSiteLink.setAttribute('href', siteWeb);
    webSiteLink.textContent = "Visiter le site";
    gitHubLink.setAttribute('href', gitHubLink);
    gitHubLink.textContent = "Aller au git"
    
    technoLink.append(webSiteLink, gitHubLink);
    listOfTechnologies.appendChild(list);
    techno.append(titre, listOfTechnologies, technoLink);
    element.appendChild(techno);
    element.setAttribute('data-aos', 'zoom-in');
    //parent.appendChild(element);
    
}

//getting identity
//fetch("https://my-json-server.typicode.com/jordanmosongo/portfolio/identity")
fetch("http://localhost:3000/identity")  
.then(response => {
        return response.json();
    })
    .then(data => {
        //description.textContent = data.textDescriptif;
        telephone.textContent = data.telephone;
        facebook.setAttribute('href', data.facebook);
        
    })
    .catch(err => console.log(err));
//getting skills
//fetch("https://my-json-server.typicode.com/jordanmosongo/portfolio/skills")
fetch("http://localhost:3000/skills")     
    .then(response => {
            return response.json();
    })
    .then(arrayOfSkills => {
        for(let index in arrayOfSkills){
            if(index <= 2) {
                createSkill(firstRowOfSkills, arrayOfSkills[index].technology, 
                            arrayOfSkills[index].logo);
            } else if (index >2 && index <= 5) {
                createSkill(secondRowOfSkills, arrayOfSkills[index].technology, 
                    arrayOfSkills[index].logo);
            }else{
                setTimeout(()=>{
                    alert("L'algorithme n'est pas encore près!!!");
                }, 3000);
            }
        }

    })
    .catch(err => console.log(err));
//getting projects
fetch("http://localhost:3000/projects")
    .then(response => {
        return response.json();
    })
    .then(data => {
        //console.log(data);
        for(let index in data){
            if(index <= 2){
                createProject(projectContainer, data[index].image, 
                    data[index].technologies, data[index].lienSite, data[index].lienGitHub);
            }else{
                setTimeout(()=>{
                    alert("L'algo n'est pas prêt");
                }, 5000);
            }
            
        }
    })
    .catch(err => console.log(err));

    //Sending mails
    let submitButton = document.getElementById("bouton-submit");
    let email = document.getElementById("email");
    let objet = document.getElementById("sujet");
    let message = document.getElementById("message");
    let nom = document.getElementById("nom");
    let phone = document.getElementById("phone");
    submitButton.addEventListener('click', event => {
        event.preventDefault();
        Email.send({
            Host : "smtp.mailtrap.io",
            Username: "4b96413af87a4f",
            Password: "d2dc011c0cabbd",
            To : "jordan@gmail.com",
            From : email.value,
            Subject : objet.value,
            Body : message.value + '<br>' + nom.value + '<br>' + phone.value
 
        })
        .then(msg => {
            alert("Votre message est envoyé avec succès");
            let form = document.getElementById('form');
            form.reset();
        })
    })


