document.addEventListener("DOMContentLoaded", start)


let forside
let genereltIndhold

let url1 = "https://adam.duedrengen.dk/wp-json/wp/v2/forside/792";
let url2 = "https://adam.duedrengen.dk/wp-json/wp/v2/generelt/751";

async function start() {
  let response1 = await fetch(url1);
  let response2 = await fetch(url2);

  forside = await response1.json();
  genereltIndhold = await response2.json();

  visForside();
  visGenereltIndhold();
}


function visForside() {
  console.log("Henter forside indhold...")
  document.querySelector(".bg_img").src = forside.baggrundsbillede.guid;
  document.querySelector(".bg_video").src = forside.video.guid;
  document.querySelector(".overskrift").textContent = forside.overskrift;
  document.querySelector(".broedtekst").innerHTML = forside.tekst;

}



function visGenereltIndhold() {
  console.log("Henter generelt indhold...")
  document.querySelector(".logo_img").src = genereltIndhold.logo_forside.guid;
  document.querySelector(".btm_logo_img").src = genereltIndhold.logo.guid;
  document.querySelector(".adresse").textContent = genereltIndhold.adresse;
  document.querySelector(".email").textContent = genereltIndhold.email;
  document.querySelector(".telefon").textContent = genereltIndhold.tlf;
  document.querySelector(".navn").textContent = genereltIndhold.navn;
  document.querySelector(".facebook_ikon").src = genereltIndhold.facebook.guid;
  document.querySelector(".instagram_ikon").src = genereltIndhold.instagram.guid;
  document.querySelector(".pynt1").src = genereltIndhold.pyntforside1.guid;
  document.querySelector(".scroll-indikator").src = genereltIndhold.scroll.guid;
}