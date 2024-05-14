
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
    .video-container {
      max-width: 800px;
      margin: 20px auto; /* Centrado automático */
    }
    a {
      margin-top: 10px;
      padding: 20px 30px;
      background-color: #4CAF50;
      font-family: 'Arial', sans-serif;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none; 
    }
    a:hover {
      background-color: #45a049;
    }
  </style>
  
  <header>
    <img src="/logo.png" alt="Logo de Numeric Art" class="logo">
    <span class="title">Serie Armónica</span>
  </header>
  
  <div class="video-container">
    <iframe
      width="100%"
      height="450"
      src="https://www.youtube.com/embed/Zrn5KV34YMU?si=ITRsvwz0Tambf9Sx"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
  
  <div style="display: flex; justify-content: center;">
    <a href="/quiza/quiz">Ir al Quiz</a>
  </div>