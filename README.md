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