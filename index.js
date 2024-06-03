var questions = document.querySelectorAll('.titles-container');

questions.forEach(function (question) {
    question.addEventListener('click', function () {

        var rotateArrow = this.getAttribute('id').replace('question', 'arrow');
        var answerId = this.getAttribute('id').replace('question', 'answer');

        document.querySelectorAll('.answer').forEach(function (answer) {
            answer.style.display = 'none';
        });
        document.querySelectorAll('.arrow').forEach(function (arrow) {
            arrow.style.rotate = '90deg';
        });
        questions.forEach(function (titlesBack) {
            titlesBack.style.fontWeight = '300';
        });
        question.style.fontWeight = '500'

        document.getElementById(answerId).style.display = 'flex';
        document.getElementById(rotateArrow).style.rotate = '270deg';

    });
});
//encontrar o seletor apenas do arrow