# What is react 
-> react is libraray implemented by facebook, to create UI components 

Please check React questions in reactQuestions.md



Saas -> software as as service -> we don't need to install any application to use some services like gmail, netflix, slack , teams, jira etc

flipkart and amazon are not saas because they are e-commerce application , we are using them to buy products

1. If are using websites to purchase or buy a products are not saas thery e-commerce application

2. If we are using website as software to perform task usually require login / subscription are called Saas


# useEffect vs useEffectLayout

1. Runs after broweser paints 
2. Does not block ui rendering
3. used for data fetching , logging, subscriptions


1. Run synchronousely after DOM updates but before browser paints
2. Blocking delay paint until it finishes
3. Best for measuring dom, animations and layout calculations


# fetch vs axios

1. json -> manual in fetch and autometic in axios
2. Error handling  -> fetch((res)=> if(!res.ok) throw new Error("error"))  axios(path).cacth(err=>console.log(err))
3. timeout support ->  support in axios, fetch not
4. interceptor -> support in axios, fetch not


# react router

1. Library used to route between pages without refreshing page because react is SPA 

# browser route vs hash router 

1. /about vs #/about
2. seo friendly -> yes vs no
3. clean url -> yes vs no


# Model, view and controller

1. Model -> Data 

  const user = {
    name:"nizam",
    role:"Admin"
  }

2. view -> UI 

  <div>{user.name}</div>

3. Controller -> functions

  function updateUser(user,role){
    user.role = role;
  }

4. User -> UI -> controller -> updates Model -> view (UI)


# HTML5

1. Sematic elements

  1. <header>
  2. <footer>
  3. <nav>
  4. <article>
  5. <aside>
  6. <section>

2. multimedia support

  1. <video src="path.mp4" controls="true"></video>
  2. <audio src="path.mp3" controls="true"></audio>

3. Canvas

  1. <canvas id="myCanvas"></canvas>
  2. charts 
  3. signature
  4. animations

4. geolocation

5. webstorage

  1. localstorage
  2. session storage

6. better seo
7. mobile friendly


# CSS3

1. Advance selectors

  div > p { color: red; }  // direct child

2. color gradient

  background: linear-gradient(to right, red, blue);

3. Flexbox

4. Grid

5. Transitions -> smooth changes

6. media queries

@media (max-width:768px){
  body {
     background: lightgray;
  }
}

7. shadow effects


# data binding

1. one way data binding

let name = "nizam";

<div>{user.name}</div>

2. two way

const [name,setName] = useState("");

<input type="text" value={name} onChange={e=> setName(e.target.value)}/>

3. one time

const name = "Nizam";

# latest react version 19.2

1. server components rendering

2. handle promises directly (use) => fetch.then(res).catch() , new use(fetchuser()) => error will be handled by nearest error boundry

3. React compliler (optimize performnce)

# SAP Spectacles (SAP fiori) -> Design principles

1. Role based

  1. Apps are dsigned for specific users
  2. Dashboard and report for Admin
  3. Task screen for employee

2. Adaptive 

  1. works for all devices (mobile, tablet , desktop)
  2. Responsive ui

3. Simple

  1. Only necessary information shown
  2. fever clicks

4. coherent

  1. Same design across all apps
  2. consistent experience

5. Delightful

  1. smooth animation and faster performence


# SAP fiori (UI layer)

1. Built using SAP 5 or OpenUI5
2. Javascript
3. HTML5
4. CSS3

# OPENUI5 

1. It works on MVC architecture

2. Model, view and controller
3. Model  -> Data
4. View -> UI (Xml)
5. controller -> js functions
6. User -> view -> controller -> update model -> view
7. OData service which connects FE and BE (GET, POST, PUT, PATCH, DELETE)


# Accessbility (aria -> Accessible rich internet application)

1. Screen readers will read website
2. If we don't provide or used proper elements it will not read properly
3. blind persons will interact application by pressing keys like (tab, enter, arrowkeys)
4. We have to use sematic elements
5. define proper tab index order
6. if we are using div tags instead button for click add aria-label, role
7. create input with labels
8. show dark text in plain background
9. High contrast text
10. Use alt text for images

# SEO 

1. web crawls read out html page
  1. Read
  2. understand
  3. Index

2. start with HTML page
3. CSS and JS
4. Execute js
5. store content in search DB (index)
6. Important tags

  1. h1 - h6
  2. title
  3. meta tag
  4. img alt

7. links
8. metadata



