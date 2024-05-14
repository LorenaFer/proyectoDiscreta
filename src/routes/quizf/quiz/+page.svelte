<script lang="ts">
  import { goto } from '$app/navigation';
  export let questions = [
    {
      id: 1,
      question: '¿Cuál es la definición recursiva de la secuencia de Fibonacci?',
      options: [
        'F(n) = F(n-1) * F(n-2)',
        'F(n) = F(n-1) + F(n-2)',
        'F(n) = n * (n-1)',
        'F(n) = n^2'
      ],
      answer: 'F(n) = F(n-1) + F(n-2)'
    },
    {
      id: 2,
      question: '¿Cuáles son las condiciones iniciales de la secuencia de Fibonacci?',
      options: [
        'F(0) = 1, F(1) = 2',
        'F(0) = 0, F(1) = 1',
        'F(0) = 1, F(1) = 0',
        'F(0) = 0, F(1) = 0'
      ],
      answer: 'F(0) = 0, F(1) = 1'
    },
    {
      id: 3,
      question: '¿Cuál es la propiedad que describe el crecimiento exponencial de la secuencia de Fibonacci?',
      options: [
        'Propiedad de paridad',
        'Propiedad de congruencia',
        'Crecimiento exponencial',
        'Proporción áurea'
      ],
      answer: 'Crecimiento exponencial'
    },
    {
      id: 4,
      question: '¿Cuál es la relación aproximada entre dos términos consecutivos de la secuencia de Fibonacci?',
      options: [
        '2.71',
        '1.618',
        '0.5',
        '3.14'
      ],
      answer: '1.618'
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
  <span class="title">Quiz Sucesión de Fibonacci</span>
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
        <a href="/lecciones/fibonacci3/1">Continuar</a>
      {:else}
        <button on:click={() => handleDecision(false, true)}>Intentar de Nuevo</button>
        <a href="/lecciones/fibonacci2/1">Volver a la Lección</a>
        <a href="/prinLecciones">Página Principal</a>
      {/if}
    </div>
  {/if}
</div>
