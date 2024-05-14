<script lang="ts">
  export let questions: any[];


  let answers: { [key: number]: string } = {};
  questions.forEach(question => answers[question.id] = "");
  
  function submitQuiz() {
    let score = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    console.log(`Tu puntuación es: ${score}/${questions.length}`);
    // Aquí puedes manejar la lógica después de enviar el cuestionario, como mostrar un mensaje, etc.
  }
</script>

<style>
  .question {
    margin-bottom: 20px;
  }
</style>

<form on:submit|preventDefault={submitQuiz}>
  {#each questions as question (question.id)}
    <div class="question">
      <h4>{question.text}</h4>
      {#each question.options as option}
        <label>
          <input type="radio" bind:group={answers[question.id]} value={option}>
          {option}
        </label>
      {/each}
    </div>
  {/each}
  <button type="submit">Enviar Cuestionario</button>
</form>
