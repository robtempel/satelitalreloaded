const countDownGeneral = [1];
const horaUTC = [];
const colector = [];
const dbCentral = [];
const objref = [0];
const objref2 = [0];
const objref3 = [0];
const objref4 = [9];
const objref5 = [0];
const secuencia = [0, 0.01, 0.03, 0.06, 0.105, 0.163, 0.234, 0.315, 0.411, 0.5, 0.589, 0.685, 0.766, 0.837, 0.895, 0.94, 0.97, 0.99 , 1, 1, 1]
const regresoalaotrafuncion = []
const datosuniversales = []

var contador = 0; // Contador para llevar la cuenta de las veces que se ha ejecutado la función

var intervalo = setInterval(function() {
  jugueteo();
  contador++;

  if (contador === 20) {
    clearInterval(intervalo);
    clockRoll();
  }
}, 20);


function horarandom(){
  let horarandom = Math.floor(Math.random() * 100 / 4)
  if(horarandom < 10){
    horarandom = "0" + horarandom
  }
  return horarandom
}
function minutosrandom(){
  let minutosrandom = Math.floor(Math.random() * 100 * 0.6)
  if(minutosrandom < 10){
    minutosrandom = "0" + minutosrandom
  }
  return minutosrandom
}
function segundosrandom(){
  let segundosrandom = Math.floor(Math.random() * 100 * 0.6)
  if(segundosrandom < 10){
    segundosrandom = "0" + segundosrandom
  }
  return segundosrandom
}
function jugueteo() {

  let timeConcat = `<text class="showtime">${horarandom()}</text>
  <text class="showtime">:</text>
  <text class="showtime">${minutosrandom()}</text>
  <text class="showtime">:</text>
  <text class="showtime">${segundosrandom()}</text>`

  let windowClock = document.getElementById("windowClock")
  windowClock.innerHTML = timeConcat

  let timeConcat2 = `<text class="showtime">${horarandom()}</text>
  <text class="showtime">:</text>
  <text class="showtime">${minutosrandom()}</text>
  <text class="showtime">:</text>
  <text class="showtime">${segundosrandom()}</text>`

  let windowClock2 = document.getElementById("windowClock2")
  windowClock2.innerHTML = timeConcat2

  let timeConcat3 = `<text class="showtime">${horarandom()}</text>
  <text class="showtime">:</text>
  <text class="showtime">${minutosrandom()}</text>
  <text class="showtime">:</text>
  <text class="showtime">${segundosrandom()}</text>`

  let windowClock3 = document.getElementById("windowClock3")
  windowClock3.innerHTML = timeConcat3

}

function clockRoll(){

  const segundero = [" "]
  
  var actualizar = function(){
    
    let date = new Date();
    let horashow = date.getUTCHours()
    let minutoshow = date.getUTCMinutes()
    let segundosshow = date.getUTCSeconds()
    if(horashow < 10){
      horashow = `0${horashow}`
    }
    if(minutoshow < 10){
      minutoshow = `0${minutoshow}`
    }
    if(segundosshow < 10){
      segundosshow = `0${segundosshow}`
    }

    const bristolDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false });
    const buenosAiresDate = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false });
    let horaBTL = bristolDate.substring(bristolDate.length - 8, bristolDate.length - 6)
    let minutosBTL = bristolDate.substring(bristolDate.length - 5, bristolDate.length - 3)
    let segundosBTL = bristolDate.substring(bristolDate.length - 2)
    let horaBSAS = buenosAiresDate.substring(buenosAiresDate.length - 8, buenosAiresDate.length - 6)
    let minutosBSAS = buenosAiresDate.substring(buenosAiresDate.length - 5, buenosAiresDate.length - 3)
    let segundosBSAS = buenosAiresDate.substring(buenosAiresDate.length - 2)

    if(horaBTL === "24"){
      horaBTL = "00"
    }

    if(horaBSAS === "24"){
      horaBSAS = "00"
    }

    timeConcat = `<text class="showtime">${horashow}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutoshow}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosshow} GMT</text>`

    timeAR = `<text class="showtime">${horaBSAS}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosBSAS}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosBSAS} AR</text>`

    timeBTL = `<text class="showtime">${horaBTL}</text>
    <text class="showtime">:</text>
    <text class="showtime">${minutosBTL}</text>
    <text class="showtime">:</text>
    <text class="showtime">${segundosBTL} BTL</text>`

    windowClock = document.getElementById("windowClock")
    windowClock.innerHTML = timeConcat

    windowClock2 = document.getElementById("windowClock2")
    windowClock2.innerHTML = timeAR

    windowClock3 = document.getElementById("windowClock3")
    windowClock3.innerHTML = timeBTL
    
    
  }

  setInterval(actualizar,1000)
  
};

var modo1 = document.getElementById("ctrl3");
modo1.addEventListener("click", () => {

  let areaparaagregarcosas = document.getElementById("partidos");

  areaparaagregarcosas.innerHTML += `
  <div class="centralsat" id="centralSat">
    
  </div>

  <div class="contenedor2">
    <canvas id="lienzo" width="640px" height="480px" class="canvas"></canvas>
    <p class="div" id="cota"></p>
  </div>



<div class="configuracion">

</div>



  `


  let central = document.getElementById("centralSat")
  central.innerHTML = `



  <div class="formularioespn">
    <textarea id="txt1" class="cajatextoespn" placeholder="Introducir parámetros aqui y luego presionar la tecla Resumir parámetros"></textarea>
    <div class="contdivbot">
      <div class="divbotoncitos">
        <input type="button" value="Limpiar caja de texto" class="paraclick1" id="bt2">
        <input type="button" value="Resumir parámetros" class="paraclick2" id="bt1">
        <input type="button" value="Cerrar" class="cancelarSat" id="satcancel">
      </div>
    </div>
  </div>

      <div class="windowResultado">
      <article id="resultado" class="salida1">
        <h6 hidden>Parámetros detallados</h6>
        <span id="print_satpc">Parámetros Limpios</span>
        <span id="print_frec"></span>
        <span id="print_sr"></span>
        <span id="print_mod"></span>
        <span id="print_srv"></span>
        <span id="print_ca"></span>
        <span class="rojo" id="print_std5960"></span>
        <span class="verde" id="print_std50"></span>
      </article>
      
      <article id="resultador" class="salida2">
        <h6 hidden>Parámetros elementales</h6>
        <span id="print_satpcr">Parámetros elementales</span>
        <span id="print_frecr"></span>
        <span id="print_srr"></span>
        <span id="print_modr"></span>
        <span id="print_srvr"></span>
        <span id="print_car"></span>
      </article>
    </div>
      `
      
      document.getElementById("bt2").addEventListener("click", () => {
        txt1.value = ("");
      });

      document.getElementById("bt1").addEventListener("click", () => {
        var parametrosbrutoHT = document.getElementById("txt1").value;
        var parametrosSplSL = parametrosbrutoHT.split("");
        const reconstruccionSS = []
        for(let name of parametrosSplSL){
          reconstruccionSS.push(outSaltosDL(name));
        }
        
        function outSaltosDL(a){
          if(a.includes("\n")||a.includes("\t")){
            return " "
          }else{return a}
        }
        var parametrosbruto = reconstruccionSS.join("");
        procesamiento(parametrosbruto)
        
        let contador = 0;
        
        const miFuncion = () => {
          
          let objetivo = 130
          datosuniversales[0].mhz = regresoalaotrafuncion[2]
          datosuniversales[0].power = objetivo * secuencia[contador]
          datosuniversales[0].mhz2 = datosuniversales[0].mhz - (datosuniversales[0].mhz / 100 * datosuniversales[0].mod);
          datosuniversales[0].cielo = 0;
          datosuniversales[0].center = datosuniversales[0].ancho/2;
          datosuniversales[0].der = datosuniversales[0].ancho;
          datosuniversales[0].izq = 0;
          datosuniversales[0].suelo = datosuniversales[0].alto;
          datosuniversales[0].factorRO = datosuniversales[0].rolloff / 100 + 1
          datosuniversales[0].sr = datosuniversales[0].mhz / datosuniversales[0].factorRO;
          datosuniversales[0].bw = datosuniversales[0].mhz * 10;
          datosuniversales[0].hBW = datosuniversales[0].bw / 2;
          datosuniversales[0].srprint = datosuniversales[0].sr * 10;
          datosuniversales[0].prom1 = (datosuniversales[0].bw + datosuniversales[0].srprint) / 2;
          datosuniversales[0].area1 = datosuniversales[0].prom1 * datosuniversales[0].power;
          datosuniversales[0].factorAjuste = datosuniversales[0].mod /100 +1
          datosuniversales[0].sr2 = datosuniversales[0].sr / datosuniversales[0].factorAjuste
          datosuniversales[0].srprint2 = datosuniversales[0].sr2 * 10;
          datosuniversales[0].bw2 = datosuniversales[0].mhz2 * 10;
          datosuniversales[0].hBW2 = datosuniversales[0].bw2 / 2;
          datosuniversales[0].prom2 = (datosuniversales[0].bw2 + datosuniversales[0].srprint2) / 2;
          datosuniversales[0].power2 = datosuniversales[0].area1 / datosuniversales[0].prom2
          datosuniversales[0].area2 = datosuniversales[0].prom2 * datosuniversales[0].power2

          contador++;
        
          if (contador === secuencia.length) {
            clearInterval(intervalId);
          }
        };

        const intervalId = setInterval(miFuncion, 100);


        /// seguir aca. modificar datos universales con regresoalaotrafuncion


        

        
      });//Fin de la orden "PROCESAR"

      document.getElementById("satcancel").addEventListener("click", () => {
        areaparaagregarcosas.innerHTML = ``
      })

      class Datos{
        constructor (ancho, alto, piso, mhzdiv, divh){
            this.ancho = ancho
            this.alto = alto
            this.piso = piso
            this.mhzdiv = mhzdiv
            this.divh = divh
        }
    }
    
    var mhz = 1;
    var ancho = 640; 
    var alto = 480;
    var piso = 323;
    var mhzdiv = 10
    var divh = 50
    let db1 = new Datos (ancho, alto, piso, mhzdiv, divh);
    
    var power = 0;
    var rolloff = 25;
    var mod = 0;
    var factorDiv = 1
    var factorAmp = 9
    var nBase = 1
    
    let ruidoBase = genRuidobase()

    
    function genRuidobase(){
        const ruidoBase = []
        for(i = 0; i < ancho; i++){
            refSigno = Math.floor(Math.random()*10)
            if(refSigno %2 == 1){
                ruidoBase.push(Math.random() * 50)
            }else{
                ruidoBase.push(Math.random() * -50)
            
            }
        }
        return ruidoBase
    }
    
    
    
    db1.mhz = mhz
    db1.power = power
    db1.rolloff = rolloff
    db1.mod = mod
    db1.n1 = factorDiv
    db1.n2 = factorAmp
    db1.ruidoBase = ruidoBase
    db1.nBase = nBase
    
    const objref3 = [149]
    const objref4 = [9]

    
    db1.mhz2 = db1.mhz - (db1.mhz / 100 * db1.mod);
    db1.cielo = 0;
    db1.center = db1.ancho/2;
    db1.der = db1.ancho;
    db1.izq = 0;
    db1.suelo = db1.alto;
    db1.factorRO = db1.rolloff / 100 + 1
    db1.sr = db1.mhz / db1.factorRO;
    db1.bw = db1.mhz * 10;
    db1.hBW = db1.bw / 2;
    db1.srprint = db1.sr * 10;
    db1.prom1 = (db1.bw + db1.srprint) / 2;
    db1.area1 = db1.prom1 * db1.power;
    db1.factorAjuste = db1.mod /100 +1
    db1.sr2 = db1.sr / db1.factorAjuste
    db1.srprint2 = db1.sr2 * 10;
    db1.bw2 = db1.mhz2 * 10;
    db1.hBW2 = db1.bw2 / 2;
    db1.prom2 = (db1.bw2 + db1.srprint2) / 2;
    db1.power2 = db1.area1 / db1.prom2
    db1.area2 = db1.prom2 * db1.power2

    datosuniversales.splice(0, datosuniversales.length)
    datosuniversales.push(db1)

    
    var canvas = document.querySelector("#lienzo");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(10,10,10,1)";
    ctx.fillRect(0,0,datosuniversales[0].ancho,datosuniversales[0].alto);
    
    function vidaWFM(){
      console.log(datosuniversales[0])
      ctx.fillStyle = "rgba(10,10,10,1)";
      ctx.fillRect(0,0,datosuniversales[0].ancho,datosuniversales[0].alto);
      genSecEmulador(datosuniversales[0])
      grid(datosuniversales[0])
    }

    var intervalo = setInterval(vidaWFM, 100);



    function genSecEmulador(a){
      
      //////////   medidas H (PIXELES)
      avancelinea1H = (a.center - (a.hBW2)) - (a.izq)
      avancelinea2H = (a.center - a.srprint2 /2) - (a.center - (a.hBW2))
      avancelinea3H = (a.center + a.srprint2/2) - (a.center - a.srprint2 /2)
      avancelinea4H = (a.center + (a.hBW2)) - (a.center + a.srprint2/2)
      avancelinea5H = (a.der) - (a.center + (a.hBW2))
    
      //////////// medidas V (PIXELES)
      avancelinea1V = (a.piso) - (a.piso)
      avancelinea2V = (a.piso - a.power2) - (a.piso)
      avancelinea3V = (a.piso - a.power2) - (a.piso - a.power2)
      avancelinea4V = (a.piso) - (a.piso - a.power2)
      avancelinea5V = (a.piso) - (a.piso)
      
      const secuenciaH = [] ////////////// marcas positiones H segun n1
      for(i = 0; i < a.der/a.n1; i ++){
          secuenciaH.push(i * a.n1)
      }
      
      const secL1 = []
      const secL2 = []
      const secL3 = []
      const secL4 = []
      const secL5 = []
      
      cantidadPuntosSegmento1 = avancelinea1H / a.n1
      cantidadPuntosSegmento2 = avancelinea2H / a.n1
      cantidadPuntosSegmento3 = avancelinea3H / a.n1
      cantidadPuntosSegmento4 = avancelinea4H / a.n1
      cantidadPuntosSegmento5 = avancelinea5H / a.n1
    
      pixelesAvanceL1 = avancelinea1V / cantidadPuntosSegmento1
      pixelesAvanceL2 = avancelinea2V / cantidadPuntosSegmento2
      pixelesAvanceL3 = avancelinea3V / cantidadPuntosSegmento3
      pixelesAvanceL4 = avancelinea4V / cantidadPuntosSegmento4
      pixelesAvanceL5 = avancelinea5V / cantidadPuntosSegmento5
      
      for(i = 0 ; i < cantidadPuntosSegmento1 ; i++){
          secL1.push(a.piso + (i * pixelesAvanceL1))
      }
      for(i = 0 ; i < cantidadPuntosSegmento2 ; i++){
          secL2.push(a.piso + (i * pixelesAvanceL2))
      }
      for(i = 0 ; i < cantidadPuntosSegmento3 ; i++){
          secL3.push(a.piso - a.power2 + (i * pixelesAvanceL3))
      }
      for(i = 0 ; i < cantidadPuntosSegmento4 ; i++){
          secL4.push(a.piso - a.power2 + (i * pixelesAvanceL4))
      }
      for(i = 0 ; i < cantidadPuntosSegmento5 ; i++){
          secL5.push(a.piso + (i * pixelesAvanceL5))
      }
      
      secuenciaV = secL1.concat(secL2, secL3, secL4, secL5)
  
      for(let index in db1.ruidoBase){
          secuenciaV[index] = secuenciaV[index] + (db1.ruidoBase[index] + db1.nBase)
      }
  
  
      const secuenciaProm = []
      const secuenciaProm2 = []
      
      for(let index in secuenciaV){
          index = parseInt(index)
          
          secuenciaProm.push(promedio20(secuenciaV, index))
      }
      
      for(let index in secuenciaProm){
          if(Math.floor(Math.random() * 10) %2 == 1){
              secuenciaProm[index] = secuenciaProm[index] + (Math.random() * a.n2)
          }else{
              secuenciaProm[index] = secuenciaProm[index] - (Math.random() * a.n2)
          }
      }
      
      for(let index in secuenciaProm){
          index = parseInt(index)
          
          secuenciaProm2.push(promedio20(secuenciaProm, index))
      }
      
      function promedio20(a,b){
          if(b < 11 || b > 629){
              return a[b]
          }else{
              resultado2 = ((a[b-10])+(a[b-9])+(a[b-8])+(a[b-7])+(a[b-6])+(a[b-5]) + (a[b-4]) + (a[b-3]) + (a[b-2]) + (a[b-1]) + (a[b+1]) + (a[b+2]) + (a[b+3]) + (a[b+4]) + (a[b+5])+ (a[b+6])+ (a[b+7])+ (a[b+8])+ (a[b+9])+ (a[b+10])) / 20
              return resultado2
          }
      }
      
      for(let index in secuenciaH){
          index = parseInt(index)
          ctx.beginPath();
          ctx.moveTo(secuenciaH[index],secuenciaProm2[index]);
          ctx.lineTo(secuenciaH[index +1],secuenciaProm2[index + 1]);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "rgba(0,255,0,1)";
          ctx.stroke();
      
        }
    }
        
    

    

    
    function grid(a){
        
      ctx.beginPath();
      ctx.moveTo(a.center,a.cielo);
      ctx.lineTo(a.center, a.suelo);
      ctx.strokeStyle = "rgba(40,40,255,1)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
      
      for(i = 1; i < a.ancho/db1.mhzdiv * 10; i ++){
        ctx.beginPath();
        ctx.moveTo(a.center + i*db1.mhzdiv * 10,a.cielo);
        ctx.lineTo(a.center + i*db1.mhzdiv * 10,a.suelo);
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      
      for(i = 1; i < a.ancho/db1.mhzdiv * 10; i ++){
        ctx.beginPath();
        ctx.moveTo(a.center - i*db1.mhzdiv * 10,a.cielo);
        ctx.lineTo(a.center - i*db1.mhzdiv * 10,a.suelo);
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      
      for(i = 1; i < a.alto/db1.mhzdiv * a.divh; i ++){
        ctx.beginPath();
        ctx.moveTo(a.izq,a.cielo +i *a.divh);
        ctx.lineTo(a.der,a.cielo +i *a.divh);
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      
      for(i = 1; i < a.alto/10; i ++){
        ctx.beginPath();
        ctx.moveTo(a.center - 5,a.cielo +i *10);
        ctx.lineTo(a.center + 5,a.cielo +i *10);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
});

    
function procesamiento(a){

      //--------------------- Generar variables de uso frecuente ---------------------//
      var parametrosM = a.toUpperCase()         // Transformar string principal en mayuscula
      var paramSplitPal = parametrosM.split(" ");             // Separar todo en parabras (array)
      //////////////////////////////////////////////////////////////////////////////////
      
  //--------------------- Busqueda de Satelite ------------------------------------//
  //------------- INTELSAT 21 / 34 / 707 / 11 / 14 / 1R --------------------------//
  var busINT = parametrosM.indexOf("INT");
  var subsINT = parametrosM.substring(busINT, busINT + 11);
  var busIS = parametrosM.indexOf("IS");
  var subsIS = parametrosM.substring(busIS, busIS + 5);
  
  var intelsat = "";

  if(subsINT.includes("INT") && subsINT.includes("21")){
    var intelsat = "IS21";
  };
  
  if (subsINT.includes("INT") && subsINT.includes("34")){
    var intelsat = "IS34";
  };

  if (subsINT.includes("INT") && subsINT.includes("707")){
    var intelsat = "IS707";
  };
  
  if (subsINT.includes("INT") && subsINT.includes("11")){
    var intelsat = "IS11";
  };
  
  if(subsINT.includes("INT") && subsINT.includes("14")){
    var intelsat = "IS14";
  };
  
  if (subsINT.includes("INT") && subsINT.includes("1R")){
    var intelsat = "IS1R";
  };
  
  if (subsIS.includes("IS") && subsIS.includes("21")){
    var intelsat = "IS21";
  };
  
  if (subsIS.includes("IS") && subsIS.includes("34")){
    var intelsat = "IS34";
  };
  
  if (subsIS.includes("IS") && subsIS.includes("707")){
    var intelsat = "IS707";
  };
  
  if (subsIS.includes("IS") && subsIS.includes("11")){
    var intelsat = "IS11";
  };
  
  if (subsIS.includes("IS") && subsIS.includes("14")){
    var intelsat = "IS14";
  };
  
  if (subsIS.includes("IS") && subsIS.includes("1R")){
    var intelsat = "IS1R";
  };
  
  //------------- TELSTAR 12 / 14 --------------------------------------------------//
  var busTELSTAR = parametrosM.indexOf("TELSTAR");
  var subsTELSTAR = parametrosM.substring(busTELSTAR, busTELSTAR + 10);
  var busTELS = parametrosM.indexOf("TELS");
  var subsTELS = parametrosM.substring(busTELS, busTELS + 7);
  var busTS = parametrosM.indexOf("TS");
  var subsTS = parametrosM.substring(busTS, busTS + 5);
  var busSTAR = parametrosM.indexOf("STAR");
  var subsSTAR = parametrosM.substring(busSTAR, busSTAR + 7);
  
  var tssat = ("");

  if (subsTELSTAR.includes("TELSTAR") && subsTELSTAR.includes("12")){
    var tssat = "TelStar12";
  };

  if (subsTELSTAR.includes("TELSTAR") && subsTELSTAR.includes("14")){
    var tssat = "TelStar14";
  };
  
  if (subsTELS.includes("TELST") && subsTELS.includes("12")){
    var tssat = "TelStar12";
  };
  
  if (subsTELS.includes("TELST") && subsTELS.includes("14")){
    var tssat = "TelStar14";
  };
  
  if (subsTS.includes("TS") && subsTS.includes("12")){
    var tssat = "TelStar12";
  };
  
  if (subsTS.includes("TS") && subsTS.includes("14")){
    var tssat = "TelStar14";
  };
  
  if (subsSTAR.includes("STAR") && subsSTAR.includes("12")){
    var tssat = "TelStar12";
  };
  
  if (subsSTAR.includes("STAR") && subsSTAR.includes("14")){
    var tssat = "TelStar14";
  };


  //------------- SES 6 / 10 / 14 ------------------------------------------------//
  var busSES = parametrosM.indexOf("SES");
  var subsSES = parametrosM.substring(busSES, busSES + 7);
  
  var ses = ("");

  if (subsSES.includes("SES") && subsSES.includes("14")){
    var ses = "SES14";
  };

  if (subsSES.includes("SES") && subsSES.includes("6")){
    var ses = "SES6";
  };
  
  if(subsSES.includes("SES") && subsSES.includes("10")){
    var ses = "SES10";
  };


  //------------- ARSAT 1 / 2 -----------------------------------------------------//
  var busAR = parametrosM.indexOf("AR");
  var subsAR = parametrosM.substring(busAR, busAR + 9);
  
  var arsat = ("")

  if (subsAR.includes("AR1")||subsAR.includes("ARSAT1")||subsAR.includes("ARSAT 1")||subsAR.includes("ARS 1")||subsAR.includes("ARS1")||subsAR.includes("ARS-1")||subsAR.includes("ARSAT-1")){
    var arsat = "AR1";
  };

  if (subsAR.includes("AR2")||subsAR.includes("ARSAT2")||subsAR.includes("ARSAT 2")||subsAR.includes("ARS 2")||subsAR.includes("ARS2")||subsAR.includes("ARS-2")||subsAR.includes("ARSAT-2")){
    var arsat = "AR2";
  };

  //------------- EUTELSAT 8 / 113 / 117 -----------------------------------------//
  var busEU = parametrosM.indexOf("EU");
  var subsEU = parametrosM.substring(busEU, busEU + 13);
  
  var eu = ("");

  if (subsEU.includes("EU") && subsEU.includes("8")){
    var eu = "EU8";
  };

  if (subsEU.includes("EU") && subsEU.includes("113")){
    var eu = "EU113";
  };

  if (subsEU.includes("EU") && subsEU.includes("117")){
    var eu = "EU117";
  };
  
  //------------- NSS 4 / 7 / 806 -------------------------------------------------//
  var busNSS = parametrosM.indexOf("NSS");
  var subsNSS = parametrosM.substring(busNSS, busNSS + 9);
  
  var nss = ("");

  if (subsNSS.includes("NSS") && subsNSS.includes("7")){
    var nss = "NSS7";
  };

  if (subsNSS.includes("NSS") && subsNSS.includes("4")){
    var nss = "NSS4";
  };

  if (subsNSS.includes("NSS") && subsNSS.includes("806")){
    var nss = "NSS806";
  };

  //------------- AMAZONAS 1 / 2 / 4 ---------------------------------------------//
  var busAMA = parametrosM.indexOf("AMA");
  var subsAMA = parametrosM.substring(busAMA, busAMA + 12);
  
  var ama = ("");

  if ((subsAMA.includes("AMA") || subsAMA.includes("AMAMZONAS")) && subsAMA.includes("2")){
    var ama = "Amzn2";
  };

  if((subsAMA.includes("AMA") || subsAMA.includes("AMAMZONAS")) && subsAMA.includes("3")){
    var ama = "Amzn4";
  };
  
  if(subsAMA.includes("AMA") || subsAMA.includes("AMAMZONAS")){
    var ama = "Amzn";
  };

  //------------- BRASILSAT 1 / 34 / 707 / 11 / 14 / 1R --------------------------//
  var busBR = parametrosM.indexOf("BR");
  var subsBR = parametrosM.substring(busBR, busBR + 7);
  var busBRASIL = parametrosM.indexOf("BRASIL");
  var subsBRASIL = parametrosM.substring(busBRASIL, busBRASIL + 12);
  
  var brasilsat = ("");

  if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("4")){
    var brasilsat = "BRSat4";
  };

  if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("3")){
    var brasilsat = "BRSat3";
  };

  if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("2")){
    var brasilsat = "BRSat2";
  };
  
  if (subsBRASIL.includes("BRASIL") && subsBRASIL.includes("1")){
    var brasilsat = "BRSat1";
  };

  if (subsBRASIL.includes("BRASIL")){
    var brasilsat = "BRSat1";
  };
  
  if (subsBR.includes("BRA") && subsBR.includes("4")){
    var brasilsat = "BRSat4";
  };
  
  if (subsBR.includes("BRA") && subsBR.includes("3")){
    var brasilsat = "BRSat3";
  };
  
  if (subsBR.includes("BRA") && subsBR.includes("2")){
    var brasilsat = "BRSat2";
  };
  
  if (subsBR.includes("BRA") && subsBR.includes("1")){
    var brasilsat = "BRSat1";
  };
  
  if (subsBR.includes("BRA")){
    var brasilsat = "BRSat1";
  };
  
  
  
  //------------- HISPASAT 1C / 1D / 1E / 6 --------------------------------------//
  var busHISP = parametrosM.indexOf("HISP");
  var subsHISP = parametrosM.substring(busHISP, busHISP + 15);
  
  var hispasat = "";

  if (subsHISP.includes("HISP") && subsHISP.includes("1C")){
    var hispasat = "Hisp1C";
  };

  if (subsHISP.includes("HISP") && subsHISP.includes("1D")){
    var hispasat = "Hisp1D";
  };
  
  if (subsHISP.includes("HISP") && subsHISP.includes("1E")){
    var hispasat = "Hisp1E";
  };
  
  if (subsHISP.includes("HISP") && subsHISP.includes("1")){
    var hispasat = "Hisp1";
  };
  
  if (subsHISP.includes("HISP") && subsHISP.includes("6")){
    var hispasat = "Hisp6";
  };

  //-------------------- Galaxy 28 ------------------------//
  var busGAL = parametrosM.indexOf("GAL");
  var subsGAL = parametrosM.substring(busGAL, busGAL + 15);
  
  var galsat = "";

  if (subsGAL.includes("GALAX") && subsGAL.includes("28")){
    var galsat = "G28";
  };

  if (parametrosM.includes("G-28")){
    var galsat = "G28";
  };
  
  if (parametrosM.includes("G28 ")){
    var galsat = "G28";
  };
  
  if (subsGAL.includes("GAL") && subsGAL.includes("28")){
    var galsat = "G28";
  };
  
  if (subsGAL.includes("GALAXY") && subsGAL.includes("28")){
    var galsat = "G28";
  };

  var condLNB3 = ` ${intelsat} ${ses} ${tssat} ${arsat} ${eu} ${nss} ${ama} ${brasilsat} ${hispasat} ${galsat} `;
  var condLNB2 = condLNB3.trim();
  var condLNB1 = condLNB2.split(" ");
  var condLNB = condLNB1[0];
      
  const lnbC = 5150;
  var lnbKu = 10750;
  if(condLNB.includes("AR1")){
    lnbKu = 10500;
  };
  
  if(condLNB.includes("EU8")){
    lnbKu = 10600;
  };
  
  if(condLNB.includes("EU117")){
    lnbKu = 10745;
  };
  
  if(condLNB.includes("TelStar14")){
    lnbKu = 10000;
  };
  
  // --------------Frecuencia CB --------------- //
  const arrayFBC1 = [];
  for(let name of paramSplitPal){
    arrayFBC1.push(rangoFCB(name));  
  };
  
  function rangoFCB(a){
    b = parseInt(a);
      if(b>3699 && b<4200){
      return a;
      }else{ 
        return "";
      };
  };
  
  var frecCB = arrayFBC1.join("");
  
  var frecCBcomp1 = arrayFBC1.join("");
  var frecCBcomp1 = frecCBcomp1.substring(0,4);
  
  var frecCB = frecCB.substring(0, 4);
  
  frecCB = parseInt(frecCB);
  if ((frecCB>3699) && (frecCB<4200)){
    }else{
      frecCB = 0;
  };
  
  // --------------Frecuencia CB 3,7 4,1 --------------- //
  const arrayFBC2 = [];
  for(let name of paramSplitPal){
    arrayFBC2.push(rangoFCB3741(name));  
  };
  
  function rangoFCB3741(a){
    b = parseInt(a);
      if ((b == 4 || b == 3) && (a.includes(".")||a.includes(","))){
        c = a.split("");
        if (c[1] == "."||c[1] == ","){
          d = c[0] + c[2] + c[3] + c[4];
          e = parseInt(d);
          f = c[0] + c[1] + c[2] + c[3] + c[4];
          if (e > 3699 && e < 4200){
            return f;
          }else{
            return "";
          };
        };
      }else{
        return "";
      };
                  
  };
  
  var frecCB2 = arrayFBC2.join("");
  var frecCB2 = frecCB2.substring(0, 5);
  var frecCB2comp = frecCB2.substring(0, 5);
  var arrayFrecCB2 = frecCB2.split("");
  
  const arrayfrec3_4 = [];
  for(let name of arrayFrecCB2){
    arrayfrec3_4.push(fuerapyc(name));  
  };
  
  function fuerapyc(a){
    if(a.includes(".")){
      return "";
    }else{
      if(a.includes(",")){
        return "";
      }else{
        return a;
      };
    };
  };
  
  var frec3_4 = arrayfrec3_4.join("");
  if(frec3_4 == ""){
    frec3_4 = 0;
  };
  
  var frec3_4 = parseInt(frec3_4);
  if (frec3_4>3699 && frec3_4<4200){
  }else{
    frec3_4 = 0;
  };
  
  var posFCB1 = parametrosM.indexOf(frecCBcomp1);
  var posFCB2 = parametrosM.indexOf(frecCB2comp);
  
  // --------------Frecuencia KuB --------------- //
  const arrayFBKumiles = [];
  for(let name of paramSplitPal){
    arrayFBKumiles.push(rangoFKu1112k(name));  
  };
  
  function rangoFKu1112k(a){
    b = parseInt(a);
    if(b>11699 && b<12700){
      return a;
    }
    else return "";
  };
  
  const arrayFBKu1112 = [];
  for(let name of paramSplitPal){
    arrayFBKu1112.push(rangoFKu1112(name));  
  };
  
  function rangoFKu1112(a){
    b = parseInt(a);
      if ((b == 11 || b == 12) && (a.includes(".")||a.includes(","))){
        c = a.split("");
        if (c[2] == "."||c[2] == ","){
          d = c[0] + c[1] + c[3] + c[4] + c[5];
          e = parseInt(d);
          f = c[0] + c[1] + c[2] + c[3] + c[4] + c[5];
          if (e > 11699 && e < 12701){
            return f;
          }else{
            return "";
          };
        };
      }else{
        return "";
      }  ;            
  };
  
  var frecKuB = arrayFBKumiles.join("");
  var frecKucomp1 = frecKuB.substring(0,5);
  var frecKuB = frecKuB.substring(0,5);
  
  ///////////////valor numerico 11700 12700
  var fKU11700 = parseInt(frecKuB);
  /////////////////////////////
  //------------------------------------//
  var frecKucomp2 = arrayFBKu1112.join("");
  var frecKucomp2 = frecKucomp2.substring(0,6);
  
  var arrayFKu1112ab = frecKucomp2.split("");
  const frecKu1112sp = [];
  for(let name of arrayFKu1112ab){
    frecKu1112sp.push(sacarpuntosaKu(name));  
  };
  
  var fKuConsSp = frecKu1112sp.join("");
  var fKuConsSp = fKuConsSp.substring(0, 5);
  ///////////////valor numerico 11,700 12,700
  fKU11 = parseInt(fKuConsSp);
  /////////////////////////////
  if(fKU11700 < 12700 && fKU11700 > 11699){
    }else{
      fKU11700 = 0;
  };
  
  if(fKU11 < 12700 && fKU11 > 11699){
    }else{
      fKU11 = 0;
  };
  
  // -- funcion quitar puntos o comas -- //
  function sacarpuntosaKu(a){
    if(a.includes(".")){
      return "";
    }else{
      if(a.includes(",")){
        return "";
      }else{
        return a;
      };
    };
  };
  
  ///// //////////////////
  if(condLNB.includes("SES10")||condLNB.includes("HISP")||condLNB.includes("AR1")){
    frec3_4 = 0;
    frecCB = 0;
  };
  
  ///////////////////////////////////////////////////////////////
  var posFKuB1 = parametrosM.indexOf(frecKucomp1);
  var posFKuB2 = parametrosM.indexOf(frecKucomp2);
  
  const posiblesLocF = [posFKuB1,posFKuB2,posFCB1,posFCB2];
  const posiblesLocFsort = (posiblesLocF.sort((a,b) => a-b));
  
  const posicionF = [];
  for(let number of posiblesLocFsort){
    if(number > 0){
      posicionF.push(number);
    };
  };
  
  var posicionFrecConfirm = posicionF[0];
  
  const posiblesLocFKu = [posFKuB1,posFKuB2];
  const posiblesLocFKusort = (posiblesLocFKu.sort((a,b) => a-b));
  
  const posicionFKu = [];
  for(let number of posiblesLocFKusort){
    if(number > 0){
      posicionFKu.push(number);
    };
  };
  
  var posicionFrecKuConfirm = posicionF[0];
  
  if (posicionFrecKuConfirm == posFKuB1){
    fKU11 = 0;
  };
  if (posicionFrecKuConfirm == posFKuB2){
    fKU11700 = 0;
  };
  if(posFKuB1 == 0 && posFKuB2 == 0){
    fKU11 = 0;
    fKU11700 = 0;
  };
  if (posicionFrecKuConfirm == posFCB1){
    frec3_4 = 0;
  };
  
  if (posicionFrecKuConfirm == posFCB2){
    frecCB = 0;
  };
  
  if(posFCB1 == 0 && posFCB2 == 0){
    frecCB = 0;
    frec3_4 = 0;
  };
  
  var subsSRLH = parametrosM.substring(posicionFrecConfirm);
  var arrParaSrLH = subsSRLH.split(" ");
  arrParaSrLH = arrParaSrLH.splice(1);
  var subsParaBusSrLH = arrParaSrLH.join(" ");

  ///////////////////////////////////////////////////////////////
  // ///////////////////// banda Ku a Banda C ////////////////////////// //
  var frecKuUnif = fKU11700 + fKU11;
  fKuC = (frecKuUnif - lnbKu - lnbC) * - 1;
  // ////////////////////////////////////////////////////////////////// //

  // condicionar los valores finales de frecKu segun satelite //
  if(condLNB.includes("IS34")||condLNB.includes("SES14")||condLNB.includes("SES6")||condLNB.includes("707")||condLNB.includes("BRS")||condLNB.includes("IS21")||condLNB.includes("IS11")){
    fKuC = 0;
    }else{
  };

  // ----- Sufijo Sat ----- //
  if(frecCB>3699||frecCB<4200){
    var fcbt = parseInt(frecCB);
     }else{
      fcbt = 0;
  };

  if (((parseInt(frecKuUnif)+fcbt)>11699) && ((parseInt(frecKuUnif)+fcbt)<12700)){
    var sufSatKu = "Ku";
    }else{
      var sufSatKu = "";
  };

  var sumacku = parseInt(frecKuUnif)+fcbt;
  if ((condLNB.includes("EU117")||condLNB.includes("AR2")||condLNB.includes("G28")||condLNB.includes("IS1R")) && ((sumacku > 11699) && (sumacku < 12700))){
    }else{
      sufSatKu = "";
  };
  
  if ((fKuC<4200) && (fKuC>3200)){
  }else{
    fKuC = 0;
  };
  
  var resultFrectemp = (frecCB + fKuC + frec3_4);

  var frecConmN = 0;
  var polcircCon = "";
  if(resultFrectemp == 0 && parametrosM.length > 0){
    frecConmebol = buscarFRConmebol();
    if(frecConmebol != ""){
      frecConmN = parseInt(frecConmebol);

      if(frecConmebol.includes("V")||frecConmebol.includes("Y")){
        polcircCon = "V";
      };
      if(frecConmebol.includes("H")||frecConmebol.includes("X")){
        polcircCon = "H";
      };
      if(frecConmebol.includes("R")||frecConmebol.includes("RHCP")){
        polcircCon = "R";
      };
      if(frecConmebol.includes("L")||frecConmebol.includes("LHCP")){
        polcircCon = "L";
      };
      }else{
        frecConmebol = 0;
        polcircCon = "";
    };
  };

  function buscarFRConmebol(){
    arrayexperimento = parametrosM.split("/");
    arrayexperimento2 = arrayexperimento.join(" ");
    arrayexperimento3 = arrayexperimento2.split(" ");
    for(let palabras of arrayexperimento3){
      if((parseInt(palabras) > 3699 && parseInt(palabras) < 4200 )||(parseInt(palabras) > 11699 && parseInt(palabras) < 12700)){
        return palabras;
        }else{
      };
    };
  };

  // ------------- Busqueda Roll Off ---------- ///////////
  
  var roEXP = "";

  if(parametrosM.includes("ROLLOFF")){
    var rollOff = busRollOff(parametrosM, "ROLLOFF");
    rolloffpublico = analisisRO(rollOff);
    var roEXP = rolloffpublico;
  };

  if(parametrosM.includes("ROLL OFF")){
    var roll_Off = busRollOff(parametrosM, "ROLL OFF");
    rolloffpublico = analisisRO(roll_Off);
    var roEXP = rolloffpublico;
  };

  var splitsplash = parametrosM.split("/");
  for(let palabra of splitsplash){
    if(palabra.includes("RO")&&palabra.includes("%")&&palabra.length<11){
      rolloffpublico = analisisRO(palabra);
      var roEXP = rolloffpublico;
      break;
    };
  };

  function analisisRO(a){

    if(a.includes("30%")||a.includes("0.30")||a.includes("0,30")||a.includes("0.3")){
      rolloffOK = 30;
    };
    
    if(a.includes("35%")||a.includes("0.35")||a.includes("0,35")||a.includes("0.35")){
      rolloffOK = 35;
    };

    if(a.includes("20%")||a.includes("0.20")||a.includes("0,20")||a.includes("0,2")||a.includes("0.2")){
      rolloffOK = 20;
    };

    if(a.includes("5%")||a.includes("0.05")||a.includes("0.05")){
      rolloffOK = 5;
    };

    if(a.includes("25%")||a.includes("0.25")||a.includes("0,25")){
      rolloffOK = 25;
    };

    if(a.includes("1%")||a.includes("0.01")||a.includes("0.01")){
      rolloffOK = 1;
    };

    if(a.includes("10%")||a.includes("0.10")||a.includes("0,10")||a.includes("0,1")||a.includes("0.1")){
      rolloffOK = 10;
    };

    if(a.includes("2%")||a.includes("0.02")||a.includes("0.02")){
      rolloffOK = 2;
    };

    return rolloffOK;
  };

  function busRollOff(a,b){
    busqueda = a.indexOf(b);
    subsRO = a.substring(busqueda + b.length, busqueda + b.length + 7);
    return subsRO;
  };

  ///////////////// ----- Busqueda BW --------////////////

  const indicesIni = [];
  const posiblesBW = [];
  const posiblesBW2 = [];

  for(let index in paramSplitPal){
    if(paramSplitPal[index].includes("MHZ")){
      indicesIni.push(parseInt(index)-1);
      indicesIni.push(parseInt(index));
      indicesIni.push(parseInt(index)+1);
    };
  };
  
  for(let index of indicesIni){
    if(parseInt(paramSplitPal[index])>2 && parseInt(paramSplitPal[index]) < 73){
      posiblesBW.push(paramSplitPal[index]);
    };
  };

  for(let posible of posiblesBW){
    if(posible.includes("A")||posible.includes("B")||posible.includes("C")||posible.includes("D")||posible.includes("E")||posible.includes("F")||posible.includes("G")||posible.includes("I")||posible.includes("J")||posible.includes("K")||posible.includes("L")||posible.includes("N")||posible.includes("O")||posible.includes("P")||posible.includes("Q")||posible.includes("R")||posible.includes("S")||posible.includes("T")||posible.includes("U")||posible.includes("V")||posible.includes("W")||posible.includes("X")||posible.includes("Y")||posible.includes(".1")||posible.includes(".2")||posible.includes(".3")||posible.includes(".4")||posible.includes(".5")||posible.includes(".6")||posible.includes(".7")||posible.includes(".8")||posible.includes(".9")||posible.includes(",1")||posible.includes(",2")||posible.includes(",3")||posible.includes(",4")||posible.includes(",5")||posible.includes(",6")||posible.includes(",7")||posible.includes(",8")||posible.includes(",9")){
    }else{
      posiblesBW2.push(posible);
    };
  };

  if(parametrosM.includes("MHZ")){
    bwEXP = parseInt(posiblesBW2[0]);
  }else{
    bwEXP = "";
  };

  // ----------- Busqueda FEC ----------- //

  var fecEXP = "";

  if(parametrosM.includes(" 1/2 ")){
    fecEXP = "1/2";
  };

  if(parametrosM.includes(" 2/3 ")){
    fecEXP = "2/3";
  };
  if(parametrosM.includes(" 3/4 ")){
    fecEXP = "3/4";
  };
  if(parametrosM.includes(" 4/5 ")){
    fecEXP = "4/5";
  };
  if(parametrosM.includes(" 5/6 ")){
    fecEXP = "5/6";
  };
  if(parametrosM.includes(" 6/7 ")){
    fecEXP = "6/7";
  };
  if(parametrosM.includes(" 7/8 ")){
    fecEXP = "7/8";
  };
  if(parametrosM.includes(" 32/45 ")){
    fecEXP = "32/45";
  };

  if(parametrosM.includes("FEC RATE")){
    var busFR = parametrosM.indexOf("FEC RATE");
    var subsFR = parametrosM.substring(busFR+8);
    var subsFRSpl = subsFR.split(" ");
    for(let index in subsFRSpl){
      if(subsFRSpl[index].includes("/")){
        fecMuestra = subsFRSpl[index];
        fecEXP = analisisFEC(fecMuestra);
        break;
      };
    };
  };

  if(parametrosM.includes("FEC")){
    for(let index in paramSplitPal){
      if(paramSplitPal[index].includes("FEC")){
        fecMuestra = paramSplitPal[parseInt(index) + 1];
        fecEXP = analisisFEC(fecMuestra);
        break;
      };
    };
  };
 
  function analisisFEC(a){

    equiv = "";

    if(a.includes("1/2")){
      equiv = "1/2";
    };
    if(a.includes("2/3")){
      equiv = "2/3";
    };
    if(a.includes("3/4")){
      equiv = "3/4";
    };
    if(a.includes("4/5")){
      equiv = "4/5";
    };
    if(a.includes("5/6")){
      equiv = "5/6";
    };
    if(a.includes("6/7")){
      equiv = "6/7";
    };
    if(a.includes("7/8")){
      equiv = "7/8";
    };
    if(a.includes("32/45")){
      equiv = "32/45";
    };
    if(a.includes("¾")){
      equiv = "3/4";
    };
    return equiv;
  };

  // ----------- Busqueda de Modulacion DVB / DVBS2 / NS3 / NS4 ----------- //
  var busDVB = parametrosM.indexOf("DVB");
  var subsDVB = parametrosM.substring(busDVB, busDVB + 9);
  
  var mod = "";

  if (subsDVB.includes("DVB")){
    mod = "DVB";
  };
  
  if((subsDVB.includes("DVB") && subsDVB.includes("S2"))||(subsDVB.includes("DVB") && subsDVB.includes("S-2"))){
    mod = "DVB-S2";
  };

  if(parametrosM. includes("NS3") || parametrosM.includes("NS 3") || parametrosM.includes("NS-3")){
    mod = "NS3";
  };

  if(parametrosM. includes("NS4") || parametrosM.includes("NS 4") || parametrosM.includes("NS-4")){
    mod = "NS4";
  };

  // ---------- Busqueda de SYMBOL RATE / Premier / SR / SR: / MS S/R / L Rate / ---------- //
  // -------------------------------- SR -------------------------------//
  var busSR = subsSRLH.indexOf("SR ");
  var subsSR = subsSRLH.substring(busSR + 3);
  var subsSR = subsSR.trim();
  var busFinSRNum = subsSR.indexOf(" ");
  var srPSR = subsSR.substring(0, busFinSRNum);
  
  if(parametrosM.includes("SR ")){
  }else{
    srPSR = ("");
  };
  
  // -------------------------------- SR: ------------------------------//
  var busSRdp = subsSRLH.indexOf("SR: ");
  var subsSRdp = subsSRLH.substring(busSRdp + 4);
  var subsSRdp = subsSRdp.trim();
  var busFinSRdpNum = subsSRdp.indexOf(" ");
  var srPSRdp = subsSRdp.substring(0, busFinSRdpNum);
  
  if(parametrosM.includes("SR: ")){
  }else{
    srPSRdp = "";
  }
  
  // -------------------------------- Ms -------------------------------//
  var parMsplit = subsSRLH.split("");
  var parMsplitinv = parMsplit.reverse();
  var parMinv = parMsplitinv.join("");
  var busSM = parMinv.indexOf("SM");
  var subsSM = parMinv.substring(busSM + 2);
  var subsSM = subsSM.trim();
  var busFinSMnum = subsSM.indexOf(" ");
  var subsSMnum = subsSM.substring(0, busFinSMnum);
  var megs = subsSMnum.split("");
  var megs = megs.reverse();
  var megs = megs.join("");
  
  if(parametrosM.includes("MS")){
    }else{
      megs = ("")
  }
  
  // ---------------------------------- S/R ---------------------------------//
  var busSbR = subsSRLH.indexOf("S/R");
  var subsSbR = subsSRLH.substring(busSbR + 2);
  var busEspPosteriorSbR = subsSbR.indexOf(" ");
  var subsSbR = subsSbR.substring(busEspPosteriorSbR);
  var subsSbR = subsSbR.trim();
  var busFinSbRNumconesp = subsSbR.indexOf(" ");
  var busFinSbRNumconcero = subsSbR.indexOf("0");
  
  if (busFinSbRNumconesp<busFinSbRNumconcero){
      var busFinSbRNum = busFinSbRNumconesp
    }else{
      var busFinSbRNum = busFinSbRNumconcero
  }
  
  var srPSbR = subsSbR.substring(0, busFinSbRNum);
  if(parametrosM.includes("S/R")){
    }else{
      srPSbR = ("");
  }
  
  // ------------------------------ Symbol Rate ----------------------------//
  var busLrate = subsSRLH.indexOf("L RATE");
  var subsLrate = subsSRLH.substring(busLrate + 6);
  var busEspacioPosteriorLRate = subsLrate.indexOf(" ");
  var subsLrate = subsLrate.substring(busEspacioPosteriorLRate);
  var subsLrate = subsLrate.trim();
  var busFinLrate = subsLrate.indexOf(" ");
  var srLrate = subsLrate.substring(0, busFinLrate);
  
  if(parametrosM.includes("L RATE")){
    }else{
      srLrate = ("");
  }

  // ------------------------------ S Rate ----------------------------//
  var busSrate = subsSRLH.indexOf("S RATE");
  var subsSrate = subsSRLH.substring(busSrate + 5);
  var busEspPostClave = subsSrate.indexOf(" ");
  var subsSrate = subsSrate.substring(busEspPostClave);
  var subsSrate = subsSrate.trim();
  var busEspacioPosteriorNumSRate = subsSrate.indexOf(" ");
  var srSrate = subsSrate.substring(0, busEspacioPosteriorNumSRate);
  
  if(parametrosM.includes("S RATE")){
    }else{
      srSrate = ("");
  }
    
  // -------------------------------- Premier -------------------------------//
  srEPL = ""
    
  if (subsSRLH.includes("35,294,118")||subsSRLH.includes("35,294118")){
    srEPL = "35,294,118"
  }

  if (subsSRLH.includes("25.71")){
    srEPL = "25.71"
  }

  if (subsSRLH.includes("23,529,412")||subsSRLH.includes("23,529412")){
    srEPL = "23,529,412"
  }

  if(subsSRLH.includes("17,647,059")||subsSRLH.includes("17,647059")){
    srEPL = "17,647,059"
  }

  if (subsSRLH.includes("8.571429")||subsSRLH.includes("8,571,429")){
    srEPL = "8.571429"
  }

  if (subsSRLH.includes("34.285")||subsSRLH.includes("34,285")){
    srEPL = "34.285"
  }

  if (subsSRLH.includes("8,57")||subsSRLH.includes("8.57")){
    srEPL = "8,57"
  }

  if (subsSRLH.includes("7,2")||subsSRLH.includes("7,2")){
    srEPL = "7,2"
  }

  if (subsSRLH.includes("7,5")||subsSRLH.includes("7.5")){
    srEPL = "7,5"
  }

  if (subsSRLH.includes(" 70 ")){
    srEPL = "70"
  }

  // -------------------------------- LH -------------------------------//
  // enviar palabras a la funcion "filtrar con desimales" //
  subsSRLH
  const arrFiltro1 = []
  for(let name of arrParaSrLH){
    arrFiltro1.push(fueraletras(name));// filtrando letras excepto "M" "S"
  }
  
  const arrFiltro2 = []
  for(let name of arrFiltro1){
    arrFiltro2.push(rangoSR(name));// parseInteable
  }
  
  const arrFiltro3 = []
  for(let name of arrFiltro2){
    arrFiltro3.push(fueracosasraras(name));// filtrando caracteres raros excepto "/"
  }
  
  const arrFiltro4 = []
  for(let name of arrFiltro3){
    arrFiltro4.push(filtPalConDecimales(name));// filtrando palabras con decimales
  }
  
  
  const arrFiltro5 = [];
  for(let name of arrFiltro4){
    arrFiltro5.push(ultimacomaopunto(name));// filtrando palabras con ultimo caracter coma o punto
  }
  
  const arrFiltro6 = [];
  for(let name of arrFiltro5){
    arrFiltro6.push(detectarDByBW(name));// filtrando dB y BW
  }
  
  srLH = arrFiltro6.join(" ");
  srLH = srLH.trim()+ " ";
  
  //----------------------- Funciones aplicadas para filtrar LH ------------------------//
  function rangoSR(a){
    b = parseInt(a)
      if(b>1 && b<71){
      return a}
      else return ""
  }
  
  function fueraletras(a){
    if(a.includes("A")||a.includes("B")||a.includes("C")||a.includes("D")||a.includes("E")||a.includes("F")||a.includes("G")||a.includes("H")||a.includes("I")||a.includes("J")||a.includes("K")||a.includes("L")||a.includes("N")||a.includes("O")||a.includes("P")||a.includes("Q")||a.includes("R")||a.includes("T")||a.includes("U")||a.includes("V")||a.includes("W")||a.includes("X")||a.includes("Y")||a.includes("Z")){
  return " "}
  else return a
  }
  
  function fueracosasraras(a){
    if(a.includes(":")||a.includes(";")||a.includes("_")||a.includes("-")||a.includes("(")||a.includes(")")||a.includes("=")||a.includes("+")||a.includes("!")||a.includes("#")||a.includes("$")||a.includes("&")||a.includes("*")||a.includes("%")||a.includes("59,94")||a.includes("59.94")||a.includes("4.2.0")||a.includes("4.2.2")){
  return " "}
  else return a
  }
  
  function filtPalConDecimales(a){
    if(a.includes(".")){
      return a
    }else{
      if(a.includes(",")){
        return a
      }else{return ""
      }
    }
  }
  
  function ultimacomaopunto(a){
    b = a.split("");
    if ((b[b.length-1] === ".")||(b[b.length-1] === ",")){
      return ""
    }else{return a}
  }
  
  function detectarDByBW(a){
    busA = parametrosM.indexOf(a)
    if(busA == 0){
      return ""
    }

    subsA = parametrosM.substring(busA-8, busA+18)
      subsa = a.substring(busA-8, busA+18)
    if(subsA.includes("BW")||subsa.includes("dB")||subsA.includes("FREQ")||subsA.includes("MBPS")||subsA.includes(a + " W ")||subsA.includes(a + " E ")||subsA.includes("MHZ")){
      return ""
    }else{
      return a}
  }
  
  // -------------- Consolidacion de SR -------------------- //
  var srConcatenado = ` ${srPSbR} ${srPSR} ${srPSRdp} ${megs} ${srSrate} ${srLrate} ${srLH} ${srEPL} `;
  
  var srConcatenado = srConcatenado.trim();
  var srConcatenado = (srConcatenado + " ");
  var busEspSrConcat = srConcatenado.indexOf(" ");
  var subsSrConcatAb = srConcatenado.substring(0, busEspSrConcat);
  // ---------- RAS 7 ---------- //
  var busRas = parametrosM.indexOf("ras");
  var subsRas = parametrosM.substring(busRas);
  var subRasSplit = subsRas.split(" ");
  
  const rases = [];
  for (let name of subRasSplit){
    if (name.length==7){
    rases.push(parseInt(1 + name))
    }
  }
  
  const rasesStr = [];
  for (let name of rases){
    rasesStr.push(name.toString())
  }
  
  const rasesOK = [];
  for (let name of rasesStr){
    if(name.length==8){
    rasesOK.push(name.substring(1,8))
    }
  }
  
  var rascode = rasesOK[0] + "a";
  if(rascode.length==8){
    rascode = rascode.substring(0,7);
    }else{
      rascode = ""
  }
  
  if(parametrosM.includes("RAS")){
    }else{
      rascode = ""
  }
  
  if(rascode.length==7){
    }else{
      rascode = ""
  }
  
  // --------- Ras 13 ---------- //
  const posiblesRas13 = [];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===13){ 
      posiblesRas13.push(paramSplitPal[i]);
      }
  }
  
  const temp6 = []
  for (let name of posiblesRas13){
    temp6.push(fuerapuntosRas13(name))
  }
  
  function fuerapuntosRas13(a){
    const temp7 = []
    for(let name of a){
      if (name == "."){
      }else
        {
        temp7.push(name)
        }
    }
    return temp7.join("");
  }
  
  const temp8 = [];
  for (let name of temp6){
    if (name.length==7){
      temp8.push(name);
    }else{
      temp8.push(" ")
    }
  }
  
  var temp9 = temp8.join("") + " ";
  temp9 = "1" + (temp9.trim());
  var temp9 = parseInt(temp9);
  temp9 = temp9.toString();
  
  if(temp9.length==8)
    {
    temp9 = temp9.substring(1,8)
    }else
      {
      temp9 = ""
  }
  
  var ras713 = temp9;
  
  // --------- CA Director5 ---------- //
  var caDir
  
  if (parametrosM.includes("DIRECTOR")){
    caDir = "Director5"
    }else{
      caDir = ""
  }
  
  // --------- HMCRYPT ------ //
  if(parametrosM.includes("HMCRYPT")){
    hmCrypt = "HMCRYPT"
      }else{
        hmCrypt = ""
  }
  
  // ------------------------------------ Biss ---------------------------------------- //
  // ---------- Buscar Biss AFA --------- //
  var busBissCode = parametrosM.indexOf("BISS CODE");
  var subsBissCode = parametrosM.substring(busBissCode);
  var busPuntoPostBiss = subsBissCode.indexOf(".");
  var subsBCPunto = subsBissCode.substring(0, busPuntoPostBiss);
  var arrayBCP = [];
  arrayBCP = subsBCPunto.split(" ");
  
  var arraybissAFA = [];
  for(let name of arrayBCP){
    arraybissAFA.push(validBiss(name));
  }
  
  var bissAFA = arraybissAFA.join("");
  
  if(bissAFA.length===12)
    {
    }else
    {
      bissAFA = ("")
  }
  
  // ---------- Buscar Biss AFA 2 --------- //
  const posiblesbiss45 = [];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===4||(paramSplitPal[i].length===5 && paramSplitPal[i].includes("."))){ 
      posiblesbiss45.push(paramSplitPal[i]);
      }
  }
  
  const biss45 = []
  for(let name of posiblesbiss45){
    biss45.push(validBissconpunto(name));
  }
  
  var frank3 = biss45.join("");
  var frank3spl = frank3.split("");
  var frank3splrev = frank3spl.reverse("");
  var bissAfa2rev = frank3splrev.join("");
  var busPunBissF = bissAfa2rev.indexOf(".");
  var subsBissFRev = bissAfa2rev.substring(busPunBissF + 1, busPunBissF + 13);
  var bissF3revspl = subsBissFRev.split("");
  var bissF3spl = bissF3revspl.reverse("");
  var frank4 = bissF3spl.join("");
  frank4 = validBiss(frank4);
  // filtrar palabras de 4 caracteres
  const posiblesbiss4 = [];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===4){ 
      posiblesbiss4.push(paramSplitPal[i]);
      }
  }
  
  // validar palabras de 4 caracteres + concatenar biss
  const biss4 = []
  for(let name of posiblesbiss4){
    biss4.push(validBiss(name));
  }
  
  var biss124 = biss4.join("");
  var biss124B = biss124
  // verificador longitud biss 124
  if(biss124.length===12){}else{
    biss124 = ("")
  }
  
  if(biss124B.length != 12){
    biss124 = biss124B.substring(biss124B.length - 12, biss124B.length)
  }
  
  if(biss124.length===12){
    }else{
    biss124 = ("")
  }
  
  // ----- filtrar palabras de 7 caracteres ----- //
  const posiblesbiss7 = [""];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===7){ 
      posiblesbiss7.push(paramSplitPal[i]);
      }
  }
  
  // ----- validar biss con puntos ----- //
  const biss777 = []
  for(let name of posiblesbiss7){
    biss777.push(validBissconpunto(name))
  }
  
  // ----- filtrar los puntos ----- //
  const temp2 = []
  for (let name of biss777){
    temp2.push(fuerapuntosbiss7(name))
  }
  
  function fuerapuntosbiss7(a){
    const temp3 = []
    for(let name of a){
      if (name == "."){
      }else
        {
        temp3.push(name)
        }
    }
    return temp3.join("");
  }
  // ----- medir longitudes y volver a unir ----- //
  const temp4 = [];
  for (let name of temp2){
     if (name.length==4)
      {
      temp4.push(name);
      }else
      {
        temp4.push(" ")
      }
  }
  
  var temp5 = temp4.join("");
  
  temp5 = temp5.trim();
  
  // ----- validar biss 127 ----- //
  if(temp5.length == 12||temp5.length == 16)
    {
    var biss127 = validBiss(temp5);
    }else
    {
    var biss127 = ""
  }

  // filtrar palabras de 12 caracteres
  const posiblesbiss12 = [];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===12){ 
      posiblesbiss12.push(paramSplitPal[i]);
      }
  }
  
  // validar palabras de 12 caracteres
  const biss1212 = []
  for(let name of posiblesbiss12){
    biss1212.push(validBiss(name));
  }
  
  var biss12de12 = biss1212.join("")
  // validar biss de 12 caracteres
  if(biss12de12.includes("1")||biss12de12.includes("2")||biss12de12.includes("3")||biss12de12.includes("4")||biss12de12.includes("5")||biss12de12.includes("6")||biss12de12.includes("7")||biss12de12.includes("8")||biss12de12.includes("9")||biss12de12.includes("0")||biss12de12.includes("A")||biss12de12.includes("B")||biss12de12.includes("C")||biss12de12.includes("D")||biss12de12.includes("E")||biss12de12.includes("F")){
    var biss1_OK = biss12de12
    }else{
      biss1_OK = ("")
  }
  if (biss1_OK.length==12){
    }else{
      biss1_OK = ""
  }
  
  // filtrar palabras de 16 caracteres
  const posiblesbiss16 = [];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===16){ 
      posiblesbiss16.push(paramSplitPal[i]);
      }
  }
  
  // validar palabras de 16 caracteres
  const biss16 = [""]
  for(let name of posiblesbiss16){
    biss16.push(validBiss(name));
  }
  
  var biss16de16 = ("").concat(biss16.join(""))
  // validar biss de 16 caracteres
  if(biss16de16.includes("1")||biss16de16.includes("2")||biss16de16.includes("3")||biss16de16.includes("4")||biss16de16.includes("5")||biss16de16.includes("6")||biss16de16.includes("7")||biss16de16.includes("8")||biss16de16.includes("9")||biss16de16.includes("0")||biss16de16.includes("A")||biss16de16.includes("B")||biss16de16.includes("C")||biss16de16.includes("D")||biss16de16.includes("E")||biss16de16.includes("F")){
    var bissE_OK = biss16de16
    }else{
      bissE_OK = ("")
  }
  if (bissE_OK.length==16){
    }else{
      bissE_OK = ""
  }
  
  // filtrar palabras que tengan 23 caracteres
  const posiblesbiss23 = [""];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===23){ 
      posiblesbiss23.pop();
      posiblesbiss23.push(paramSplitPal[i]);
      }
  }
  
  var biss23 = posiblesbiss23[0];
  
  if((biss23.length)===23)
    {
    biss23 = biss23
      }else{
        biss23 = ".."
  }
  
  biss1223 = biss23.split("");
  const biss1223sinpuntos = [];
  for(let name of biss23){
    biss1223sinpuntos.push(validBiss(name));
  }
  
  var biss12de23 = biss1223sinpuntos.join("");
  
  if (biss12de23.length==12){
    }else{
      biss12de23 = ""
  }
  // filtrar palabras que tengan 31 caracteres
  const posiblesbiss31 = [""];
  for (var i = 0; i < paramSplitPal.length; i++){
    if(paramSplitPal[i].length===31){ 
      posiblesbiss31.pop();
      posiblesbiss31.push(paramSplitPal[i]);
      }
  }
  
  var biss31 = posiblesbiss31[0];
  if((biss31.length)===31)
    {
    biss31 = biss31
      }else{
        biss31 = ".."
  }
  
  biss1631 = biss31.split("");
  const biss1631sinpuntos = [];
  for(let name of biss31){
    biss1631sinpuntos.push(validBiss(name));
  }
  
  var biss16de31 = biss1631sinpuntos.join("");
  
  if (biss16de31.length==16){
    }else{
      biss16de31 = ""
  }
  
  // --------------- Consolidacion de Biss -------------------- //
  if(frank4.length===12){
    }else{
      frank4 = ""
  }
  
  var caChain = ` ${hmCrypt} ${biss1_OK} ${bissE_OK} ${biss127} ${bissAFA} ${biss12de23} ${biss16de31} ${frank4} ${biss124} ${caDir} ${rascode} ${ras713} `;
  var caChain = caChain.trim();
  var caChainSpl = caChain.split(" ");
  var conditionalAccess = caChainSpl[0];

  // validar palabras que contengan caracteres hexadecimales
  function validBiss(a){

    if(a.includes("G")){
      return ("")
    }

    if(a.includes("H")){
      return ("")
    }

    if(a.includes("I")){
      return ("")
    }

    if(a.includes("J")){
      return ("")
    }
    
    if(a.includes("K")){
      return ("")
    }
    
    if(a.includes("L")){
      return ("")
    }
    
    if(a.includes("M")){
      return ("")
    }
    
    if(a.includes("N")){
      return ("")
    }
    
    if(a.includes("O")){
      return ("")
    }
    
    if(a.includes("P")){
      return ("")
    }
    
    if(a.includes("Q")){
      return ("")
    }

    if(a.includes("R")){
      return ("")
    }
    
    if(a.includes("S")){
      return ("")
    }
    
    if(a.includes("T")){
      return ("")
    }
    
    if(a.includes("U")){
      return ("")
    }
    
    if(a.includes("V")){
      return ("")
    }
    
    if(a.includes("W")){
      return ("")
    }
    
    if(a.includes("X")){
      return ("")
    }
    
    if(a.includes("Y")){
      return ("")
    }
    
    if(a.includes("Z")){
      return ("")
    }
    
    if(a.includes("(")){
      return ("")
    }
    
    if(a.includes(")")){
      return ("")
    }

    if(a.includes("/")){
      return ("")
    }

    if(a.includes("_")){
      return ("")
    }

    if(a.includes("-")){
      return ("")
    }

    if(a.includes(",")){
      return ("")
    }

    if(a.includes(".")){
      return ("")
    }

    if(a.includes(":")){
      return ("")
    }

    if(a.includes("+")){
      return ("")
    }

    return a

  }
  
  // validar palabras que contengan caracteres hexadecimales con punto
  function validBissconpunto(a){
    if(a.includes("G")){
      return ("")
    }
    
    if(a.includes("H")){
      return ("")
    }
    
    if(a.includes("I")){
      return ("")
    }
    
    if(a.includes("J")){
      return ("")
    }
    
    if(a.includes("K")){
      return ("")
    }
    
    if(a.includes("L")){
      return ("")
    }
    
    if(a.includes("M")){
      return ("")
    }
    
    if(a.includes("N")){
      return ("")
    }
    
    if(a.includes("O")){
      return ("")
    }
    
    if(a.includes("P")){
      return ("")
    }
    
    if(a.includes("Q")){
      return ("")
    }
    
    if(a.includes("R")){
      return ("")
    }
    
    if(a.includes("S")){
      return ("")
    }
    
    if(a.includes("T")){
      return ("")
    }
    
    if(a.includes("U")){
      return ("")
    }
    
    if(a.includes("V")){
      return ("")
    }
    
    if(a.includes("W")){
      return ("")
    }
    
    if(a.includes("X")){
      return ("")
    }
    
    if(a.includes("Y")){
      return ("")
    }
    
    if(a.includes("Z")){
      return ("")
    }
    
    if(a.includes("(")){
      return ("")
    }

    if(a.includes(")")){
      return ("")
    }
    
    if(a.includes("/")){
      return ("")
    }
    
    if(a.includes("_")){
      return ("")
    }
    
    if(a.includes("-")){
      return ("")
    }
    
    if(a.includes(",")){
      return ("")
    }
    
    if(a.includes("∑")){
      return ("")
    }
    
    if(a.includes(":")){
      return ("")
    }
    
    return a
  
  }
  
  // --------------------- Circulares 1 ----------------------- //
  busCircL = parametrosM.indexOf("RHC");
  subsCircL = parametrosM.substring(busCircL + 3);
  if (subsCircL.includes("LHC")){
    circL = "L"
      }
      else{
        circL = ("")
  }
  
  busCircR = parametrosM.indexOf("LHC");
  subsCircR = parametrosM.substring(busCircR + 3);
  if (subsCircR.includes("RHC")){
    circR = "R"
      }
      else{
        circR = ("")
  }
  
  var pol0 = circL + circR;
  // --------------------- Polaridad 1 V/H - H/V ------------------------ //
  if(parametrosM.includes("V/H"))
    {
      var polH = ("H")
    }else
      {
        var polH = ("")
  }
  
  if(parametrosM.includes("H/V"))
    {
      var polV = ("V")
    }else
      {
        var polV = ("")
  }
  
  var pol1 = polH + polV;
  // ------------------- Polaridad 2 Vert Hori H Hori Vert V----------------------- //
  var busHorizontal = parametrosM.indexOf("VERT");
  var subsHorizontal = parametrosM.substring(busHorizontal + 1);
  
  if (subsHorizontal.includes("HORIZ"))
    {
    polHoriz = ("H")
    }else
    {
    polHoriz = ""
  }
  
  var busVertical = parametrosM.indexOf("HORIZ");
  var subsVertical = parametrosM.substring(busVertical + 1);
  
  if (subsVertical.includes("VERT"))
    {
    polVert = ("V")
    }else
    {
    polVert = ""
  }
  
  var pol2 = (polHoriz + polVert);
  // ------------------- Polaridad 3 ----------------------- //
  var busLetraH = parametrosM.indexOf(" H ");
  var subsLetraH = parametrosM.substring(busLetraH + 2);
  
  if (subsLetraH.includes(" V "))
    {
    var polLetraV = "V"
    }else
      {
      var polLetraV = ""
  }
  var busLetraV = parametrosM.indexOf(" V ");
  var subsLetraV = parametrosM.substring(busLetraV + 2);
  if (subsLetraV.includes(" H "))
    {
    var polLetraH = "H"
    }else
      {
      var polLetraH = ""
  }
  
  if (parametrosM.includes(" H ") && parametrosM.includes(" V "))
    {
    polLetraH = polLetraH;
    polLetraV = polLetraV;
    }else
      {
      polLetraH = "";
      polLetraV = "";
  }
  var pol3 = polLetraH + polLetraV;
  // -------------- Polaridad  / Circularidad Post frecuencia ------------------ //
  var subsVerifPol = subsSRLH;

  pol4 = ""

  if(subsVerifPol.includes(" VERT")||subsVerifPol.includes(" V ")||subsVerifPol.includes(" Y ")||subsVerifPol.includes("(Y)")){
    pol4 = "V"
  }
  if (subsVerifPol.includes(" HORI")||subsVerifPol.includes(" H ")||subsVerifPol.includes(" X ")||subsVerifPol.includes("(H)")){
    pol4 = "H"
  }
  if (subsVerifPol.includes("RHCP")||subsVerifPol.includes(" R ")){
    pol4 = "R"
  }
  if (subsVerifPol.includes("LHCP")||subsVerifPol.includes(" L ")){
    pol4 = "L"
  }

  if (pol2.includes("V")||pol2.includes("H")){
    pol4 = ""
  }
  
  if (pol3.includes("V")||pol3.includes("H")){
    pol4 = ""
  }
  
  if (pol0.includes("R")||pol0.includes("L")){
    pol4 = ""
  }

  // ---------- Servicio 1 ------------ //
  function proximapalabra(a){
    var aSplitPal = a.split(" ");
    var segPal = aSplitPal[1];
    return segPal;
  }
  
  var busSvc = parametrosM.indexOf("SVC");
  var subsSvc = parametrosM.substring(busSvc);
  var svc = proximapalabra(subsSvc);
  
  if(parametrosM.includes(" SVC"))
    {
    }else
      {
      svc = ("");
  }
  
  if (svc != (""))
    {
    srv = "Srv"
    }else
      {
      srv = ""
  }
  
  if (svc > 0)
    {
    srv = "Srv"
    }else
      {
      srv = ""
      svc = ""
  }
  
  // ---------- Servicio 2 ------------ //
  var busSid = parametrosM.indexOf("SID");
  var subsSid = parametrosM.substring(busSid);
  var sid = proximapalabra(subsSid);
  var sid = parseInt(sid);
  
  if(parametrosM.includes(" SID"))
    {
    }else
      {
      sid = ("");
  }
  
  if (sid != (""))
    {
    srv2 = "Srv"
    }else
      {
      srv2 = ""
  }
  
  if (sid > 0)
    {
    srv2 = "Srv"
    }else
      {
      srv2 = ""
      sid = ""
  }
  
  // ---------- Servicio 3 ------------ //
  var busSrvc = parametrosM.indexOf("SRVC");
  var subsSrvc = parametrosM.substring(busSrvc);
  var srvc = proximapalabra(subsSrvc);
  var srvc = parseInt(srvc);
  if(parametrosM.includes(" SRVC"))
    {
    }else
      {
      srvc = ("");
  }
  
  if (srvc != (""))
    {
    srv3 = "Srv"
    }else
      {
      srv3 = ""
  }
  
  if (srvc > 0)
    {
    srv3 = "Srv"
    }else
      {
      srv3 = ""
      srvc = ""
  }
  
  // ---------- Servicio 4 ------------ //
  var busService = parametrosM.indexOf("SERVICE");
  var subsService = parametrosM.substring(busService);
  var service = proximapalabra(subsService);
  var service = parseInt(service);
  
  if(parametrosM.includes("SERVICE"))
    {
    }else
      {
        service = ("");
  }
  
  if (service != (""))
    {
    srv4 = "Srv"
    }else
      {
      srv4 = ""
  }
  
  if (service > 0)
    {
    srv4 = "Srv"
    }else
      {
      srv4 = ""
      service = ""
  }

  // ---------- Servicio 5 ------------ //
  var busID = parametrosM.indexOf("SERVICE ID");
  var subsID = parametrosM.substring(busID+9);
  var srvid = proximapalabra(subsID);
  var srvid = parseInt(srvid);
  if(parametrosM.includes("SERVICE ID")){

  }else
  {
    srvid = ("");
  }
  
  if (srvid != (""))
    {
    srv5 = "Srv"
    }else
      {
      srv5 = ""
  }
  
  if (srvid > 0)
    {
    srv5 = "Srv"
    }else
      {
      srv5 = ""
      srvid = ""
  }

  // ---------------- Standard -------------------- //
  var bus720 = parametrosM.indexOf("720");
  var subs720 = parametrosM.substring(bus720, bus720 + 10);
  
  if (parametrosM.includes("720"))
    {
    if (subs720.includes("50"))
      {
      var standard720 = "720p50Hz"
      }else
        {
        if (subs720.includes("59"))
          {
          var standard720 = "720p59,94Hz"
          }else
            {
            if (subs720.includes("60")){
              var standard720 = "720p60Hz"
              }else
                { 
                standard720 = ""
                }
              }
          }
    }else
      {
      standard720 = ""
  }
  
  if (standard720 != (""))
    {
    }else
      {
      standard720 = ""
  }
  
  var bus1080 = parametrosM.indexOf("1080");
  var subs1080 = parametrosM.substring(bus1080, bus1080 + 12);
  
  if (parametrosM.includes("1080"))
    {
    if (subs1080.includes("50"))
      {
      var standard1080 = "1080i50Hz"
      }else
        {
        if (subs1080.includes("59"))
          {
          var standard1080 = "1080i59,94Hz"
          }else
            {
            if (subs1080.includes("60"))
              {
              var standard1080 = "1080i60Hz"
              }else
                { 
                standard1080 = ""
                }
              }
          }
    }else
    {
    standard1080 = ""
  }
  
  if (standard1080 != (""))
    {
    }else{
      standard1080 = ""
  }
  
  var busHD = parametrosM.indexOf("HD");
  var subsHD = parametrosM.substring(busHD + 2, busHD + 6);
  
  if (parametrosM.includes("HD"))
    {
    if (subsHD.includes("50"))
      {
      var standardHD = "50Hz"
      }else
        {
        if (subsHD.includes("59"))
          {
          var standardHD = "59,94Hz"
          }else
            {
            if (subsHD.includes("60"))
              {
              var standardHD = "60Hz"
              }else
                { 
                standardHD = ""
                }
              }
          }
    }else
    {
    standardHD = ""
  }
  
  if (standardHD != (""))
    {
    }else{
      standardHD = ""
  }
  
  var busHz = parametrosM.indexOf("HZ");
  var subsHz = parametrosM.substring(busHz - 6, busHz);
  
  if (parametrosM.includes("HZ"))
    {
    if (subsHz.includes("50"))
      {
      var standardHz = "50Hz"
      }else
        {
        if (subsHz.includes("59")||subsHz.includes("94"))
          {
          var standardHz = "59,94Hz"
          }else
            {
            if (subsHz.includes("60"))
              {
              var standardHz = "60Hz"
              }else
                { 
                standardHz = ""
                }
              }
          }
    }else
      {
      standardHz = ""
  }

  var standardSeguidilla = ` ${standard1080} ${standard720} ${standardHz} ${standardHD} `;
  var standardSeguidilla = standardSeguidilla.trim();
  var standardSplit = standardSeguidilla.split(" ");
  var standardUnif = standardSplit[0];

  ///////// bus PSK

  compressMod = ""

  if(parametrosM.includes("8PSK") || parametrosM.includes("8 PSK")){
    compressMod = "8PSK"
  }

  if(parametrosM.includes("16APSK") || parametrosM.includes("16 APSK")){
    compressMod = "16APSK"
  }

  if(parametrosM.includes("QPSK")){
    compressMod = "QPSK"
  }

  var pskEXP = compressMod

  ////////// ------- Busqueda MegaBytes/S ---------- //////////

  var bitrateEXP = "";

  if(parametrosM.includes("MBPS")){
    for(let index in paramSplitPal){
      if(paramSplitPal[index].includes("MBPS")){
        bitrateEXP = paramSplitPal[parseInt(index) -1]
      }
    }
  }

  // ---/\---/\---/\---/\-------- CONSOLIDACION DE DATOS --------/\---/\---/\---/\--- //
  var satUnificado = condLNB;
  var sumaPolCir = ` ${pol0} ${pol1} ${pol2} ${pol3} ${pol4} ${polcircCon} `;
  var sumaPolCir = sumaPolCir.trim();
  var sumaPolCirSplit = sumaPolCir.split(" ");
  var polUnif = sumaPolCirSplit[0];
  var srUnif = subsSrConcatAb;

  var srvUnif = ` ${srv}${svc} ${srv2}${sid} ${srv3}${srvc} ${srv4}${service} ${srv5}${srvid} `;
  var srvUnif = srvUnif.trim();
  var srvUnifSpl = srvUnif.split(" ");
  var svc = srvUnifSpl[0];
  // ---/\---/\---/\---/\-------- RETORNO DE RESULTADOS --------/\---/\---/\---/\--- //
  var resultSatPolCirc = satUnificado + sufSatKu + polUnif;
  var resultFrec = (frecCB + fKuC + frec3_4 + frecConmN);
  var resultSr = srUnif;
  var resultMod = mod;
  var resultSrv = svc;
  var resultCa = conditionalAccess;
  var resultStd = standardUnif;
  // ---/\---/\---/\---/\-------- PRINT --------/\---/\---/\---/\--- //
  print_clean();
  
  function print_clean(){
    print_satpc.textContent = "";
    print_frec.textContent = "";
    print_sr.textContent = "";
    print_mod.textContent = "";
    print_srv.textContent = "";
    print_ca.textContent = "";
    print_std50.textContent = "";
    print_std5960.textContent = "";
    print_satpcr.textContent = "";
    print_frecr.textContent = "";
    print_srr.textContent = "";
    print_modr.textContent = "";
    print_srvr.textContent = "";
    print_car.textContent = "";
  }

  print_satpc.textContent = resultSatPolCirc;
  print_satpcr.textContent = resultSatPolCirc;



  var satEXP = condLNB;
  var pcEXP = polUnif;
  
  if (resultFrec == 0)
    {
    var resultFrec = "|"
    print_frec.textContent = resultFrec;
    print_frecr.textContent = resultFrec;
    }else
      {
      print_frec.textContent = "// Frec D/L: " + resultFrec;
      print_frecr.textContent = resultFrec;
  }

  var frecEXP = resultFrec;
 
  if(resultSr == "")
    {
    }else
      {
      print_sr.textContent = "// SR:" + resultSr;
  }
  
  print_srr.textContent = resultSr;

  var srEXP = resultSr;
  
  if(resultMod == "")
    {
    }else
      {
      print_mod.textContent = "// " + resultMod;
  }
  
  if (resultMod.includes("DVB"))
    {
    }else
      {
      print_modr.textContent = resultMod;
  }

  var modEXP = resultMod;
  
  if(resultSrv == "")
    {
    }else
      {
      print_srv.textContent = "// " + resultSrv;
  }
  
  if (parseInt(resultSr)>10)
  {
    print_srvr.textContent = resultSrv;
  }
  
  var srvEXP = resultSrv.substring(3);

  if(resultCa.length==12){
    print_ca.textContent = "// Biss-1: " + resultCa;
  }
  
  if (resultCa.length==16){
    print_ca.textContent = "// Biss-E: " + resultCa;
  }
  
  if (resultCa.includes("HMCRYPT")||resultCa.includes("Director")){
    print_ca.textContent = "// " + resultCa;
  }else{
    if(resultCa.length==7){
      print_ca.textContent = "// Ras: " + resultCa;
    }
  }
  
  if (resultCa.includes("Director")||resultCa.includes("HMCRYPT"))
    {
    }else
      {
      print_car.textContent = resultCa;
  }

  var caEXP = resultCa;
  
  if (resultStd.includes("50"))
    {
    print_std50.textContent = "// VideoHD " + resultStd;
  } 
  if (resultStd.includes("59")||resultStd.includes("60"))
    {
    print_std5960.textContent = "// VideoHD " + resultStd;
  }

  var stdEXP = resultStd;

  cotaCA = ""
  caimpreso = document.getElementById("print_ca").textContent
  if(caimpreso.includes("Biss-1")){
    cotaCA = "Biss-1"
  }
  if(caimpreso.includes("Biss-E")){
    cotaCA = "Biss-E"
  }
  if(caimpreso.includes("Ras")){
    cotaCA = "Ras"
  }

  class DatosDL{
    constructor (satelite, frecuencia, polcirc, sr, modulacion, fec, rolloff, servicio, cotaCA, conditionalaccess, standard, anchodebanda, psk, bitrate){
      this.satelite = satelite
      this.frecuencia = frecuencia
      this.polcirc = polcirc
      this.sr = sr
      this.modulacion = modulacion
      this.fec = fec
      this.rolloff = rolloff
      this.servicio = servicio
      this.cotaCA = cotaCA
      this.conditionalaccess = conditionalaccess
      this.standard = standard
      this.anchodebanda = anchodebanda
      this.psk = psk
      this.bitrate = bitrate
    }
  }
  
  colector.splice(0, colector.length)
  colector.push(new DatosDL(satEXP, frecEXP, pcEXP, srEXP, modEXP, fecEXP, roEXP, srvEXP, cotaCA, caEXP, stdEXP, bwEXP, pskEXP, bitrateEXP));
  compensador(colector[0])

  function compensador(a){

    let srnum = parseInt(a.sr)
    const anchodebandaarray = []
    anchodebandaarray.splice(0, anchodebandaarray.length)
    if(a.modulacion.includes("DVB")){
      anchodebandaarray.push(srnum * 1.2)
    }
    if(a.modulacion.includes("NS")){
      anchodebandaarray.push(srnum * 1.1)
    }

    regresoalaotrafuncion.splice(0, regresoalaotrafuncion.length)
    regresoalaotrafuncion.push(a.frecuencia)
    regresoalaotrafuncion.push(srnum)
    regresoalaotrafuncion.push(anchodebandaarray[0])
    regresoalaotrafuncion.push(a.satelite)
  }

};

