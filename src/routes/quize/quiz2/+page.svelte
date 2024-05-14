<script lang="ts">
    import { goto } from '$app/navigation';
    import Katex from '$lib/Katex.svelte'
    import { onMount } from "svelte";
    let questions = [
        {
            id: 1,
            question:
                "¿Cuál es la definición de la función exponencial natural?",
            options: [
                "f(x)=x^e",
                "f(x)=e^x", // Formato correcto usando HTML
                "f(x)=ln(x)",
            ],
            answer: "f(x)=e^x",
        },
        {
            id: 2,
            question: "¿Cuál es la base de los logaritmos naturales?",
            options: [
                "π",
                "e", // Formato correcto usando HTML
                "1010",
            ],
            answer: "e",
        },
        {
            id: 3,
            question:
                "¿Cómo se denota el logaritmo natural de un número ( y )?",
            options: ["log(y)", "ln(y)", "log_e(y)"],
            answer: "ln(y)",
        },
        {
            id: 4,
            question: "¿Cuál de las siguientes afirmaciones es cierta?",
            options: [
                "e^{ln(y)} = ln(e^{y})",
                "e^{ln(y)} = y",
                "ln(e^{y}) = y^e",
            ],
            answer: "e^{ln(y)} = y",
        },
        {
            id: 5,
            question:
                "¿Cuál es la relación entre la función exponencial natural y el logaritmo natural?",
            options: [
                "Son funciones completamente independientes.",
                "Son inversas una de la otra",
                "Son equivalentes.",
            ],
            answer: "Son inversas una de la otra",
        },
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
  <span class="title">Quiz 2</span>
</header>
<div class="quiz-container">
  <form on:submit|preventDefault={submitQuiz}>
    {#each questions as question}
      <div class="question">
        <h3>{question.question}</h3>
        {#each question.options as option}
          <label>
            <input type="radio" bind:group={answers[question.id]} value={option} name={`option-${question.id}`}>
            {#if question.id===5}
            {option}
            {:else}
              <Katex math={option}/>
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
        <a href="/lecciones/euler3/1">Continuar</a>
      {:else}
        <button on:click={() => handleDecision(false, true)}>Intentar de Nuevo</button>
        <a href="/lecciones/euler2/1">Volver a la Lección</a>
        <a href="/prinLecciones">Página Principal</a>
      {/if}
    </div>
  {/if}
</div>
