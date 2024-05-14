<script lang="ts">
    import { goto } from '$app/navigation';

    let answers = [
      [,1, 2, 3, 4, 5],
      [1,1, 0, 0, 0, 0],
      [2,1, 0, 0, 0, 0],
      [3,2, 1, 0, 0, 0],
      [4,0, 11, 0, 0, 0],
      [5,24, 0, 35, 0, 1]
    ];
  
    const correctAnswers = [ 
      [,1, 2, 3, 4, 5],
      [1,1, 0, 0, 0, 0],
      [2,-1, 1, 0, 0, 0],
      [3,2, -3, 1, 0, 0],
      [4,-6, 11, -6, 1, 0],
      [5,24, -50, 35, -10, 1]
    ];
  
    function checkAnswer(row: number, col: number, event: Event){
    const userAnswer = +(event.target as HTMLInputElement).value;
      answers[row][col] = userAnswer;
      if (userAnswer === correctAnswers[row][col]) {
        (event.target as HTMLElement).classList.add('correct');
      } else {
        (event.target as HTMLElement).classList.remove('correct');
      }
    }
  
    function checkAnswers() {
      let allCorrect = true;
      for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < answers[i].length; j++) {
          if (answers[i][j] !== correctAnswers[i][j]) {
            allCorrect = false;
            break;
          }
        }
      }
      if (allCorrect) {
        alert('¡Correcto! Todos los números son correctos.');
        goto('/lecciones/stirling2');
      } else {
        alert('Algunos números son incorrectos. Por favor, revisa tus respuestas.');
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
  img {
    width: 100%;
    max-width: 600px; 
    height: auto;
    margin-bottom: 20px;
  }
    .container {
      display: flex;
      align-items: flex-start;
      padding: 20px;
      font-family: 'Arial', sans-serif;
    }
  
    .image-container {
      flex: 1;
      background-image: url('/foto1.png'); /* Ensure path is correct */
      background-size: cover;
      height: 300px; /* Adjust based on your design needs */
      margin-right: 15px;
    }
  
    .table-container {
      flex: 2;
      background-color: #E8FFF7;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    table {
      width: 100%;
      margin: auto;
      border-collapse: collapse;
    }
  
    td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
      min-width: 50px;
    }
  
    input {
      width: 100%;
      border: none;
      text-align: center;
      background-color: transparent;
    }
  
    .correct {
      background-color: #90ee90; /* Light green for correct answers */
    }
  
    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #4CAF50; /* Green background for the button */
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    table tr:first-child,
    table tr td:first-child {
    background-color: #02C37E; /* Cambia esto al color que quieras */
  }
  </style>
  <header>
    <img src="/logo.png" alt="Logo de Numeric Art" class="logo">
    <span class="title">Número de Stirling</span>
  </header>
  <div class="container">
    <div class="image-container"></div>
    <div class="table-container">
      <h2>Completa los Números de Stirling de primera especie</h2>
      <table>
        {#each answers as row, i}
          <tr>
            {#each row as cell, j}
              <td>
                <input
                  type="number"
                  class:correct={answers[i][j] === correctAnswers[i][j]}
                  bind:value={answers[i][j]}
                  on:input={(event) => checkAnswer(i, j, event)}
                />
              </td>
            {/each}
          </tr>
        {/each}
      </table>
      <button on:click={checkAnswers}>Comprobar</button>
    </div>
  </div>
  