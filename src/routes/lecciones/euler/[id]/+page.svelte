<script>
    import { goto } from '$app/navigation'; // Asegúrate de que esta es la ruta correcta para la función de navegación en tu proyecto.
  
    let gifs = [
      '/leccionese/1e.png',
      '/leccionese/2e.png',
      '/leccionese/3e.png',
      '/leccionese/4e.png',
      '/leccionese/5e.png',
  ];
    export let data;
    let index = 0;
  
    function nextGif() {
      if (index < gifs.length - 1) {
        index++;
      }
    }
  
    function previousGif() {
      if (index > 0) {
        index--;
      }
    }
  
    // Actualización para utilizar la ruta correcta
    function goToQuiz() {
      goto('/quize/quiz1/'); // Utiliza la barra al final para indicar el directorio
    }
  </script>
  
  <style>
        header {
        display: flex;
        align-items: center;
        justify-content: flex-start; /* Cambiado para alinear elementos al inicio */
        background-color: #191919;
        padding: 10px;
        position: relative; /* Posicionamiento relativo para el centrado del título */
      }
      .logo {
        width: 80px;
        height: auto;
        margin-right: 20px; /* Espacio entre el logo y el título */
      }
      .title {
        color: #ffffff;
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        position: absolute; /* Posición absoluta para centrar */
        left: 50%; /* Centrado horizontal */
        transform: translateX(-50%); /* Ajuste fino para centrar exactamente */
        width: 100%; /* Ancho completo para centrar correctamente */
        text-align: center; /* Texto centrado */
      }
    .carousel-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px;
      background-color: #e0f2f1;
      padding: 20px;
      border-radius: 10px;
    }
    img {
      width: 100%;
      max-width: 600px; 
      height: auto;
      margin-bottom: 20px;
    }
    a {
      padding: 10px 20px;
      margin: 10px;
      background-color: #ffffff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    a:hover {
      background-color: #cccccc;
    }
  </style>
  <header>
    <img src="/logo.png" alt="Logo de Numeric Art" class="logo">
    <span class="title">Número de Euler</span>
  </header>
  <div class="carousel-container">
    <img src={data.body.imagen} alt="Lección de matemáticas" />
    <div>
        <a href={`/lecciones/euler/${ (data.body.id ===1)? 1 : data.body.id -1 }`}>Anterior</a>
        <a href={`/lecciones/euler/${ (data.body.id ==data.body.maxImage)? data.body.maxImage : (parseInt(String(data.body.id)) +1) }`}>Siguiente</a>
      
      {#if data.body.id ==data.body.maxImage}
      <a href={`/quize/quiz1/`}>Ir al Quiz</a>
      {/if}
    </div>
  </div>