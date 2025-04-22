<script>
    const quizForm = document.getElementById('quiz');
    const feedback = document.getElementById('feedback');
    const score = document.getElementById('score');

    quizForm.addEventListener('submit', e => {
      e.preventDefault();
      const selected = quizForm.planet.value;
      if (!selected) {
        feedback.textContent = '';
        score.textContent = '';
        return;
      }
      if (selected === 'Jupiter') {
        feedback.textContent = 'Correct!';
        score.textContent = 'Score: 1 / 1';
      } else {
        feedback.textContent = 'Incorrect!';
        score.textContent = 'Score: 0 / 1';
      }
    });
  </script>
