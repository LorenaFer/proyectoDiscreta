<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from "svelte";
    let questions = [
        {
            id: 1,
      question: 'Si tienes 4 sombreros desordenados, ¿cuál es la probabilidad de que ninguno esté en su posición correcta?',
      options: [
        '0.367',
        '0.625',
        '0.25',
        '0.5'
      ],
      answer: '0.367'
    },
    {
      id: 2,
      question: '¿Qué representa un desarreglo en un contexto práctico?',
      options: [
        'Todos los elementos están en orden.',
        'Algunos elementos están en su posición correcta.',
        'Ningún elemento está en su posición correcta.',
        'Los elementos se repiten en posiciones.'
      ],
      answer: 'Ningún elemento está en su posición correcta.'
    },
    {
      id: 3,
      question: '¿Cuál es la aproximación de la probabilidad de desarreglos para valores grandes de n?',
      options: [
        'Aproximadamente 1/e',
        'Aproximadamente 1/π',
        'Aproximadamente e/π',
        'Aproximadamente 2e'
      ],
      answer: 'Aproximadamente 1/e'
    },
    {
      id: 4,
      question: 'Según la gráfica de D(n) para diferentes n, ¿qué tendencia observas?',
      options: [
        'La probabilidad aumenta con n',
        'La probabilidad disminuye con n',
        'La probabilidad se estabiliza cerca de 1/e',
        'La probabilidad oscila sin patrón claro'
      ],
      answer: 'La probabilidad se estabiliza cerca de 1/e'
    },
    {
      id: 5,
      question: 'Explica cómo la serie de desarreglos converge a 1/e utilizando conceptos de cálculo:',
      options: [
        'Mediante la integración de la serie',
        'A través de la suma infinita de términos alternantes',
        'Utilizando la derivada de la serie',
        'Ninguna de las anteriores'
      ],
      answer: 'A través de la suma infinita de términos alternantes'
    }
    ];
 
    let answers: { [key: number]: string } = {};
  questions.forEach(question => answers[question.id] = "");

  let score = 0;
  let showResults = false;

  function submitQuiz() {
    score = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.answer) {
        score++;
      }
    });

    showResults = true;
  }

  function handleDecision(continueToEuler2: boolean, tryAgain: boolean) {
    if (continueToEuler2) {
      goto('/lecciones/euler2'); // Continuar si la puntuación es perfecta
    } else if (tryAgain) {
      // Lógica para reintentar el quiz
      answers = {}; // Limpiar respuestas
      showResults = false; // Ocultar resultados y permitir reintentar
    } else {
      goto('/lecciones/euler');// Regresar a la lección original
    }
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
  .quiz-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }
  h3 {
    color: #333;
  }
  .question {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin: 5px 0;
  }
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  a {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  a:hover {
    background-color: #45a049;
  }
</style>
<header>
  <img src="/logo.png" alt="Logo de Numeric Art" class="logo">
  <span class="title">Quiz 3</span>
</header>
<div class="quiz-container">
  <form on:submit|preventDefault={submitQuiz}>
    {#each questions as question}
      <div class="question">
        <h3>{question.question}</h3>
        {#each question.options as option}
          <label>
            <input type="radio" bind:group={answers[question.id]} value={option} name={`option-${question.id}`}>
            {option}
          </label>
        {/each}
      </div>
    {/each}
    <button type="submit">Enviar Cuestionario</button>
  </form>
  {#if showResults}
    <div class="results">
      <p>Tu puntuación es: {score} de {questions.length}</p>
      {#if score === questions.length}
        <a href="/lecciones/euler4">Continuar</a>
      {:else}
        <button on:click={() => handleDecision(false, true)}>Intentar de Nuevo</button>
        <a href="/lecciones/euler3">Volver a la Lección</a>
        <a href="/prinLecciones">Página Principal</a>
      {/if}
    </div>
  {/if}
</div>
