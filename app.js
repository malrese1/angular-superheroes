
{ name: "Ironman", phone: "1-111-111-1111", affiliation: "Marvel", image_url: "https://s-media-cache-ak0.pinimg.com/736x/1c/6d/ba/1c6dbaada936cdd005fefafc98af3d9a.jpg" },
   { name: "Thor", phone: "1-222-222-2222", affiliation: "Marvel", image_url: "http://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/6/6e/Thor_preview.png/revision/latest?cb=20150830080027" },
   { name: "Hawkeye", phone: "1-333-333-3333", affiliation: "Marvel", image_url: "http://vignette1.wikia.nocookie.net/marveldatabase/images/f/f6/Hawkeye_Vol_4_1_Granov_Variant_Textless.jpg/revision/latest?cb=20120814211436" },
   { name: "Spider-Man", phone: "1-444-444-4444", affiliation: "Marvel", image_url: "http://vignette1.wikia.nocookie.net/marveldatabase/images/a/ad/Spider-Man_Vol_2_1_Textless.jpg/revision/latest?cb=20150621072552" },
   { name: "Hulk", phone: "1-555-555-5555", affiliation: "Marvel", image_url: "http://www.demiurgestudios.com/uploads/general/blog/FULL_HulkCho.png" },
   { name: "vision", phone: "1-666-666-6666", affiliation: "Marvel", image_url: "http://esq.h-cdn.co/assets/15/18/1430500341-age-of-ultron-vision-hd.jpg" }
 ]

 angular
   .module("superApp", [])
   .controller("superCtrl", [ superController ])

     function superController () {
       this.heroes = superSeeds;
       this.addHero = function() {
         let hero = { }
         this.marvel.push(marvel);
       }
     }
