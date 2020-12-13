self.addEventListener("install", event =>{
    console.log("SW instalado");
  })
  
  self.addEventListener("activate", event =>{
    console.log("Activado");
  })
  
  self.addEventListener('fetch', function (event) {
      console.log("fetch");
  });