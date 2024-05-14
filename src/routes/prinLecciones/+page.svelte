<script lang="ts">
  import { goto } from '$app/navigation';

  function goToLesson(lesson:string) {
    goto(`/lecciones/${lesson}/`); // Verifica que esta ruta sea correcta en tu router
  }

  function goToHome() {
    goto('/'); // Redirige a la página principal
  }
</script>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #191919; /* Color de fondo del encabezado */
    padding: 10px;
  }
  .logo {
    width: 100px; /* Ajusta según tus necesidades */
    height: auto;
  }
  .title {
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    font-size: 40px; /* Tamaño más grande */
    margin: 400px; /* Centrado del título */
    text-align: center;
    flex-grow: 1;
  }
  .lessons-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #e0f2f1; /* Fondo claro */
    padding: 20px;
  }
  .lesson {
    text-align: center;
    margin: 20px;
  }
  .lesson img {
    width: 150px; /* Ajusta el tamaño según tus necesidades */
    height: auto;
    margin-bottom: 10px;
  }
  a {
    padding: 10px 20px;
    background-color: #E8FFF7; /* Color verde claro */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Arial', sans-serif; /* Tipo de letra Arial */
    font-size: 16px;
    text-decoration: none;
    color: #000;
  }
  a:hover {
    background-color: #96cec4; /* Color más oscuro para hover */
  }
  .back-button {
    padding: 8px 16px;
    background-color: #444;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Arial', sans-serif; /* Tipo de letra Arial */
  }
</style>


<header>
  <div>
    <img src="logo.png" class="logo" alt="Numeric Art">
    <span class="title">Lecciones</span>
  </div>
  <button class="back-button" on:click={goToHome}>Volver a Inicio</button>
</header>

<div class="lessons-container">
  <div class="lesson">
    <img src="/cientificos/euler.png" alt="Número de Euler">
    <a href="/lecciones/euler">Número de Euler</a>
  </div>
  <div class="lesson">
    <img src="/cientificos/bernoulli.png" alt="Número de Bernoulli">
    <a href="/lecciones/bernoulli1">Número de Bernoulli</a>
  </div>
  <div class="lesson">
    <img src="/cientificos/fibonacci.png" alt="Número de Fibonacci">
    <a href="/lecciones/fibonacci">Número de Fibonacci</a>
  </div>
  <div class="lesson">
    <img src="/cientificos/armonicos.png" alt="Número de Armónicos">
    <a href="/lecciones/armonicos1">Número de Armónicos</a>
  </div>
  <div class="lesson">
    <img src="/cientificos/strin.png" alt="Número de Stirling">
    <a href="/lecciones/stirling">Número de Stirling</a>
  </div>
</div>
