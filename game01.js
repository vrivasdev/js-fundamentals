<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simon Dice</title>
    <style>
      body {
        margin: 0;
        background: #dedede;
        display: flex;
        align-items: center;
        height: 100vh;
      }

      .gameboard {
        height: 100vh;
        width: 100vh;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        max-height: 60vh;
        max-width: 60vh;
      }

      .color {
        width: 50%;
        height: 50%;
        display: inline-block;
      }

      .left {
        float: left;
      }

      .right {
        float: left;
      }

      .celeste {
        background: #22a6b3;
      }

      .celeste.light {
        background: #7ed6df;
      }

      .violeta {
        background: #be2edd;
      }

      .violeta.light {
        background: #e056fd;
      }

      .naranja {
        background: #f0932b;
      }

      .naranja.light {
        background: #ffbe76;
      }

      .verde {
        background: #6ab04c;
      }

      .verde.light {
        background: #badc58;
      }

      .btn-start {
        width: 400px;
        height: 100px;
        background: #ecf0f1;
        color: #2c3e50;
        font-size: 2.5rem;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 200px);
      }

      .hide {
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="gameboard">
      <div id="celeste" class="color celeste left" data-color="celeste"></div>
      <div id="violeta" class="color violeta right" data-color="violeta"></div>
      <div id="naranja" class="color naranja left" data-color="naranja"></div>
      <div id="verde" class="color verde right" data-color="verde"></div>
      <button id="btnEmpezar" class="btn-start" onclick="empezarJuego()">Empezar a jugar!</button>
    </div>
    <script>
      const celeste = document.getElementById('celeste')
      const violeta = document.getElementById('violeta')
      const naranja = document.getElementById('naranja')
      const verde = document.getElementById('verde')
      const btnEmpezar = document.getElementById('btnEmpezar')
      const ULTIMO_NIVEL = 10

      class Juego {
        constructor() {
          this.inicializar()
          this.generarSecuencia()
          setTimeout(this.siguienteNivel, 500)          
        }

        inicializar() {
          this.siguienteNivel = this.siguienteNivel.bind(this) // no cambiara contexto. Siemre estara atado al Juego
          this.elegirColor = this.elegirColor.bind(this) // siempre va a quedar atado al this o juego mas no al elemento color
          btnEmpezar.classList.add('hide')
          this.nivel = 1
          this.colores = {
            celeste,
            violeta,
            naranja,
            verde
          }
        }

        generarSecuencia() {
          this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        }

        siguienteNivel() {
          this.subnivel = 0
          this.nombreAtributo = 'valor'
          this.iluminarSecuencia()
          this.agregarEventosClick()
        }

        transformarNumeroAColor(numero) {
          switch (numero) {
            case 0:
              return 'celeste'
            case 1:
              return 'violeta'
            case 2:
              return 'naranja'
            case 3:
              return 'verde'
          }
        }

        transformarColorANumero(color) {
          switch (color) {
            case 'celeste':
              return 0
            case 'violeta':
              return 1
            case 'naranja':
              return 2
            case 'verde':
              return 3
          }
        }

        iluminarSecuencia() {
          for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
          }
        }

        iluminarColor(color) {
          this.colores[color].classList.add('light')
          setTimeout(() => this.apagarColor(color), 350)
        }

        apagarColor(color) {
          this.colores[color].classList.remove('light')
        }

        agregarEventosClick() {
          this.colores.celeste.addEventListener('click', this.elegirColor) // atar al this
          this.colores.verde.addEventListener('click', this.elegirColor)
          this.colores.violeta.addEventListener('click', this.elegirColor)
          this.colores.naranja.addEventListener('click', this.elegirColor)
        }

        eliminarEventosClick() {
          this.colores.celeste.removeEventListener('click', this.elegirColor)
          this.colores.verde.removeEventListener('click', this.elegirColor)
          this.colores.violeta.removeEventListener('click', this.elegirColor)
          this.colores.naranja.removeEventListener('click', this.elegirColor)
        }

        elegirColor(ev) {
          const nombreColor = ev.target.dataset.color
          const numeroColor = this.transformarColorANumero(nombreColor)
          this.iluminarColor(nombreColor)
          if (numeroColor === this.secuencia[this.subnivel]) { // el color elegido es correcto
            this.subnivel++
            if (this.subnivel === this.nivel) { // usuario pasa de nivel
              this.nivel++
              this.eliminarEventosClick()
              if (this.nivel === (ULTIMO_NIVEL + 1)) {
                // Gano
              } else {
                // cambiar this por Juego
                setTimeout(this.siguienteNivel, 1500) // solo referencia a funcion
              }
            }
          } else {

          }
        }
      }

      function empezarJuego() {
        window.juego = new Juego() // enable debug
      }
    </script>
  </body>
</html>
