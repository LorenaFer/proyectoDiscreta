<style>
  header {
    background-color: #191919; /* Dark grey for header background */
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img.logo {
    height: 100px; /* Logo height */
    width: auto;
  }
  nav {
    display: flex;
  }
  a {
    color: #ffffff;
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;
    font-family: 'Arial';
  }
  a:hover {
    color: #b2dfdb; /* Light teal hover effect */
  }

  /* Main content styles */
  main {
    font-family: 'Arial', sans-serif;
    color: #333;
    margin: 20px;
    gap: 20px;
  }
  .intro-text{
    font-family: 'Arial', sans-serif;
    color: #333;
    margin: 20px;
    gap: 30px;
  }
  .section {
    margin: 12px;
    background-color: #e0f2f1; /* Light teal background for sections */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  .section h2 {
    color: #00695c; /* Teal color for section titles */
    margin-bottom: 10px;
  }
  img {
    width: auto;
    height: 200px; /* Fixed height for images */
    margin-bottom: 10px;
  }
  ul {
    padding-left: 0; /* Removes padding from list */
  }
  li {
    list-style: none; /* Removes bullet points from list items */
  }
  .holis{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .titulo{
    display: flex;
    align-items: center;
    justify-content: space-between;  

  }
</style>

<header>
  <img class="logo" src="logo.png" alt="Numeric Art Logo">
  <nav>
    <a href="/">Principal</a>
    <a href="/prinLecciones">Lecciones</a>
  </nav>
</header>

<main>
  <!-- Introducion -->
  <div class="introduction">
    <div class="titulo">
    <img src="logo.png" alt="Numeric Art">
    <div class="intro-text">
      <h1>Numeric Art</h1>
      <p>Es una herramienta educativa interactiva diseñada para estudiantes de matemáticas discretas. 
      Este programa facilita el aprendizaje de conceptos complejos como el número de Euler, la secuencia de Fibonacci, 
      los números de Bernoulli, los números armónicos y los números de Stirling, a través de lecciones animadas y 
      cuestionarios de selección múltiple.</p>
    </div>
    </div>
  </div>


  <div class="holis">
  <!-- Program objectives -->
  <div class="section">
    <img src="1.png" alt="Interactive learning">
    <h2>Objetivos del Programa</h2>
    <li><strong>Educativo:</strong> Mejorar la comprensión de los estudiantes sobre temas específicos de matemáticas discretas mediante visualizaciones y ejercicios prácticos.</li>
        <li><strong>Interactivo:</strong> Enganchar a los estudiantes con lecciones dinámicas que incluyen animaciones y actividades interactivas.</li>
        <li><strong>Evaluativo:</strong> Proporcionar retroalimentación inmediata a través de pruebas de selección múltiple para reforzar el aprendizaje.</li>
  </div>
  <!-- Main features -->
  <div class="section">
    <img src="2.png" alt="Interactive lessons">
    <h2>Funcionalidades Principales</h2>
    <li><strong>Lecciones Interactivas:</strong> Cada tema (Euler, Fibonacci, Bernoulli, armónicos, Stirling) cuenta con una explicación detallada acompañada de animaciones que ilustran los conceptos.</li>
    <li><strong>Cuestionarios de Selección Múltiple:</strong> Al final de cada lección, habrá un cuestionario para evaluar la comprensión del estudiante sobre el tema.</li>
    <li><strong>Recursos Adicionales:</strong> Acceso a artículos y vídeos adicionales para aquellos estudiantes que deseen profundizar en los temas.</li>
  </div>
  </main>
