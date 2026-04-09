const products = [
  {id:1, name:"Ventre Plat Pro", price:10900, type:"physique"},
  {id:2, name:"Ceinture Amincissante", price:8000, type:"physique"},
  {id:3, name:"Formation Fitness Premium", price:5000, type:"digital", file:"https://drive.google.com/uc?export=download&id=TON_ID_VIDEO"},
  {id:4, name:"Ebook Nutrition Expert", price:3000, type:"digital", file:"https://drive.google.com/uc?export=download&id=TON_ID_EBOOK"}
];

let orders = [];
let reviews = [
  {name:"Client", text:"Incroyable 🔥"},
  {name:"Marie", text:"Résultats rapides 😍"},
  {name:"Paul", text:"Je recommande à 100% 💪"}
];

const container = document.getElementById("products");

products.forEach(p=>{
  const div = document.createElement("div");
  div.className="product-card";
  div.innerHTML=`
    <h3>${p.name}</h3>
    <p>${p.price} FCFA</p>
    <button onclick="buy(${p.id})">Acheter</button>
  `;
  container.appendChild(div);
});

// 🔥 ACHAT PRO AVEC WHATSAPP
function buy(id){
  const p = products.find(x=>x.id===id);

  let link="https://pay.awoopay.com/TON_LIEN";
  window.open(link,"_blank");

  orders.unshift(`${p.name} acheté (${p.price} FCFA)`);

  if(p.type==="digital"){
    let unique = p.file + "&token=" + Math.random().toString(36).substring(2,8);
    alert("Après paiement, envoie la preuve sur WhatsApp pour recevoir ton fichier");
  }

  reviews.unshift({name:"Client", text:`J’ai acheté ${p.name} 🔥`});

  render();
  wow();

  // 🔥 REDIRECTION WHATSAPP
  setTimeout(()=>{
    window.open("https://wa.me/237TONNUMERO?text=Bonjour%20j'ai%20payé%20pour%20"+p.name);
  },3000);
}

// VIP
function subscribeVIP(){
  window.open("https://pay.awoopay.com/TON_LIEN_VIP","_blank");

  setTimeout(()=>{
    window.open("https://wa.me/237657556756?text=Bonjour%20j'ai%20pris%20l'abonnement%20VIP");
  },3000);

  alert("Bienvenue VIP 🔥");
}

// Dashboard + avis
function render(){
  const dash = document.getElementById("dashboard");
  dash.innerHTML = orders.map(o=>`<div>${o}</div>`).join("");

  const rev = document.getElementById("reviews");
  rev.innerHTML = reviews.map(r=>`<div>${r.name} : ${r.text}</div>`).join("");
}

// Effet WOW
function wow(){
  let el = document.createElement("div");
  el.innerText="✨ Bravo ! ✨";
  el.style.position="fixed";
  el.style.top="50%";
  el.style.left="50%";
  el.style.transform="translate(-50%,-50%)";
  el.style.background="gold";
  el.style.color="black";
  el.style.padding="20px";
  el.style.borderRadius="10px";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),1500);
}

render();
