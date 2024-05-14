<script>
  import { goto } from "$app/navigation";

  let answers = ["", "", "", ""];
  const correctAnswers = [1, 13, 55, 233];
  let message = "";
  let isCorrect = false;
  $: isCorrect = answers.every(
    (answer, index) => parseInt(answer) === correctAnswers[index]
  );

  $: {
    if (isCorrect) {
      message = "¡Correcto! Buen trabajo.";
    } else {
      message = "Algunas respuestas son incorrectas, inténtalo de nuevo.";
    }
  }
</script>

<header>
  <img src="/logo.png" alt="Logo de Numeric Art" class="logo" />
  <span class="title">Sucesión de Fibonacci</span>
</header>
<div class="fibonacci-container">
  <div class="fibonacci-info">
    <img
      src="/fibonacci/fibo.png"
      alt="Fibonacci Spiral"
      class="fibonacci-image"
    />
    <div>
      <h2>Completa la Sucesión de Fibonacci</h2>
      <div class="fibonacci-sequence">
        0, 1, <input bind:value={answers[0]} type="number" />, 2, 3, 5, 8,
        <input bind:value={answers[1]} type="number" />, 21, 34,
        <input bind:value={answers[2]} type="number" />, 89, 144,
        <input bind:value={answers[3]} type="number" />, 377, 610, 987, 1597,
        ...
      </div>
      {#if isCorrect}
        <p>
          ¡Correcto! Buen trabajo. <a href="/lecciones/fibonacci2/1"
            >Continuar</a
          >
        </p>
        
      {/if}
      
    </div>
  </div>
</div>

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
    font-family: "Arial", sans-serif;
    font-size: 24px;
    position: absolute; /* Posición absoluta para centrar */
    left: 50%; /* Centrado horizontal */
    transform: translateX(-50%); /* Ajuste fino para centrar exactamente */
    width: 100%; /* Ancho completo para centrar correctamente */
    text-align: center; /* Texto centrado */
  }
  .fibonacci-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #e0f2f1;
  }
  .fibonacci-info {
    display: flex;
    align-items: center;
    margin: 20px;
    color: #264b62;
    font-family: "Arial";
  }
  .fibonacci-image {
    width: 200px;
    height: auto;
    margin-right: 20px;
  }
  .fibonacci-sequence {
    font-size: 18px;
    color: #333;
  }
  input {
    width: 50px;
    margin: 0 5px;
    text-align: center;
  }
  a {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    margin-top: 20px;
    align-self: center; /* Centra el botón en el contenedor */
  }
  a:hover {
    background-color: #367c39;
  }
</style>
