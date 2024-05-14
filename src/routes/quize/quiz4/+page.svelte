<script lang="ts">
    import { goto } from '$app/navigation';
    export let questions = [
      {
      id: 1,
      question: '¿Qué fórmula utilizó Andrés para determinar el crecimiento de su inversión bajo el modelo de interés compuesto continuo?',
      options: [
        'P = P₀ + rt',
        'P = P₀ ⋅ (1 + r)ᵗ',
        'P = P₀ ⋅ eᵗ',
        'P = P₀ ⋅ eⁿ',
      ],
      answer: 'P = P₀ ⋅ eᵗ'
    },
    {
      id: 2,
      question: '¿Qué cantidad final puede encontrar Andrés en su cuenta bancaria después de una década, si deposita inicialmente de $2000 y un interés del 5%?',
      options: [
        '$1500',
        '$1648.72',
        '$3297.44',
        '$5030.87',
      ],
      answer: '$3297.44'
    },
    {
      id: 3,
      question: '¿Cuál fue la base para el cálculo de Sara al decidir el número de porciones de pizza por persona, usando el número e?',
      options: [
        '20',
        '40',
        '54',
        '80',
      ],
      answer: '54'
    },
    {
      id: 4,
      question: 'Si cada pizza tiene 10 porciones y Sara calculó necesitar alrededor de 54 porciones, ¿cuántas pizzas debió ordenar?',
      options: [
        '6',
        '7',
        '8',
        '9'
      ],
      answer: '6'
    },
    {
      id: 5,
      question: 'Basado en su modelo exponencial de fatiga, ¿qué fracción de su energía inicial conservaba Carlos al final de 5 horas de carrera?',
      options: [
        '61%',
        '67%',
        '75%',
        '85%'
      ],
      answer: '67%'
    },
    {
      id: 6,
      question: 'La fórmula de decaimiento que Carlos aplicó para prever su fatiga es similar a la fórmula de interés compuesto continuo. ¿Qué parte de esta fórmula indica la tasa de disminución de energía?',
      options: [
        'f₀',
        'k',
        't',
        'e'
      ],
      answer: 'k'
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
    <span class="title">Quiz 4</span>
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
          <a href="/lecciones/euler5">Continuar</a>
        {:else}
          <button on:click={() => handleDecision(false, true)}>Intentar de Nuevo</button>
          <a href="/lecciones/euler4">Volver a la Lección</a>
          <a href="/prinLecciones">Página Principal</a>
        {/if}
      </div>
    {/if}
  </div>
  