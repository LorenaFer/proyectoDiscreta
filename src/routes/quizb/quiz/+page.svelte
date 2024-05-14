<script lang="ts">
  import { goto } from '$app/navigation';
  import Katex from '$lib/Katex.svelte';
  import { onMount } from 'svelte';
 
  export let questions = [
    {
      id: 1,
      question: '¿Cuál es la fórmula de recurrencia para los números de Bernoulli?',
      options: [
        'B_n = \\frac{1}{n+1} \\sum_{k=0}^{n} B_k',
        'B_n = \\frac{1}{n} \\sum_{k=0}^{n-1} B_k',
        'B_n = \\sum_{k=0}^{n-1} \\binom{n}{k} \\frac{B_k}{n - k + 1}',
        'B_n = \\sum_{k=0}^{n} \\binom{n}{k} \\frac{B_k}{n - k + 1}'
      ],
      answer: 'B_n = \\sum_{k=0}^{n-1} \\binom{n}{k} \\frac{B_k}{n - k + 1}'
    },
    {
      id: 2,
      question: '¿Cuál es el valor de B2?',
      options: [
        '1/2',
        '1/6',
        '1/4',
        '1/8'
      ],
      answer: '1/6'
    },
    {
      id: 3,
      question: '¿Cuál es uno de los usos prácticos de los números de Bernoulli?',
      options: [
        'Cálculo de integrales definidas',
        'Expansión de la función seno',
        'Teorema del binomio de Newton',
        'Resolver ecuaciones exponenciales'
      ],
      answer: 'Teorema del binomio de Newton'
    },
    {
      id: 4,
      question: '¿Qué fórmula utiliza los números de Bernoulli para los términos impares en la expansión de \( e^x \)?',
      options: [
        'Fórmula de Taylor',
        'Fórmula de Maclaurin',
        'Fórmula de Euler',
        'Fórmula de Bernoulli'
      ],
      answer: 'Fórmula de Maclaurin'
    },
    {
      id: 5,
      question: '¿Cómo pueden los números de Bernoulli simplificar cálculos complejos en el cálculo de sumas de potencias de enteros?',
      options: [
        'Sumando los números de Bernoulli',
        'Elevando los números de Bernoulli al cuadrado',
        'Utilizando propiedades de los números de Bernoulli para encontrar sumas de potencias de enteros',
        'Multiplicando los números de Bernoulli'
      ],
      answer: 'Utilizando propiedades de los números de Bernoulli para encontrar sumas de potencias de enteros'
    },
    {
      id: 6,
      question: '¿En qué área de las matemáticas los números de Bernoulli están relacionados con la distribución binomial y otras distribuciones de probabilidad?',
      options: [
        'Teoría de números',
        'Geometría algebraica',
        'Teoría de la probabilidad',
        'Álgebra lineal'
      ],
      answer: 'Teoría de la probabilidad'
    },
    {
      id: 7,
      question: '¿Qué teorema se generaliza utilizando los números de Bernoulli, permitiendo expandir expresiones de la forma \( (1 + x)^n \) para valores no enteros de \( n \)?',
      options: [
        'Teorema del binomio de Newton',
        'Teorema de Pitágoras',
        'Teorema de Euclides',
        'Teorema de Fermat'
      ],
      answer: 'Teorema del binomio de Newton'
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
  <span class="title">Quiz</span>
</header>
<div class="quiz-container">
  <form on:submit|preventDefault={submitQuiz}>
    {#each questions as question}

      <div class="question">
        <h3>{question.question}</h3>
        {#each question.options as option}
          <label>
            <input type="radio" bind:group={answers[question.id]} value={option} name={`option-${question.id}`}>
            {#if question.id===1}
            <Katex math={option}/>
            {:else}
              {option}
            {/if}
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
        <a href="/lecciones/bernoulli2/1">Continuar</a>
      {:else}
        <button on:click={() => handleDecision(false, true)}>Intentar de Nuevo</button>
        <a href="/lecciones/bernoulli1/1">Volver a la Lección</a>
        <a href="/prinLecciones">Página Principal</a>
      {/if}
    </div>
  {/if}
</div>
