let score = 0;
let currentQuestion = 0;
let data = [
  {
  question: 'Which ingredient is a common and harmful sweetener found in almost all foods containing added sugar?',
  answers: ['High-fructose corn syrup', 'Honey', 'Fresh fruits', 'Stevia'],
  correct: 0
  },
  {
  question: 'How much sugar should you eat per day?',
  answers: ['200 calories per day', '100-150 calories per day', '500 calories per day', '1000 calories per day'],
  correct: 1
  },
  {
  question: 'Prolonged high blood glucose levels can lead to ...?',
  answers: ['Diabetes', 'Heart attack', 'Arrythmia', 'Stroke'],
  correct: 0
  },
  {
  question: 'Which is a sign of iodine deficiency?',
  answers: ['Hyperactivity', 'Goiter', 'Halitosis', 'Feeling hot'],
  correct: 1
  },
  {
  question: 'Which is an excellent source of iodine?',
  answers: ['Blueberries', 'Seaweed', 'Banana', 'Plain rice'],
  correct: 1
  },
  {
  question: 'Which measurement is used to assess your ideal weight?',
  answers: ['Chest circumference', 'Body Mass Index', 'Water intake', 'Caloric intake'],
  correct: 1
  },
  {
  question: 'What is Alzheimer\'s disease?',
  answers: ['A condition where blood vessels are narrowed or blocked leading to pain in the muscles and valves.',
  'An irreversible brain disorder that destroys your memory and thinking skills eventuallly affecting your ability to carry out simple tasks.', 'A disease that affects the blood vessels in the brain.','A disorder in the nervous system that causes tremors.'],
  correct: 1
  },
  {
  question: 'Omega-3 fatty acids play an important role in the prevention of Alzheimer\'s disease. Where are they found?',
  answers: ['Rice', 'Fatty fish', 'Carbonated drinks', 'Dairy'],
  correct: 1
  },
  {
  question: 'Cholesterol is required for cellular production. What are the two types?',
  answers: ['CDL and BDL', 'HDL and LDL', 'GDL and BDL', 'None of the above'],
  correct: 1
  },
  {
  question: 'Why is it important to monitor and control your cholesterol level?',
  answers: ['High level of bad cholesterol can lead to clots eventually causing a heart attack or stroke', 
  'High level of bad cholesterol can lead to insulin resistance', 'Low level of bad cholesterol can lead to decrease energy level', 'Low level of bad cholesterol can cause ADHD'],
  correct: 0
  }
];

function startQuiz(){
 $('.start').on('click','.startButton', function(e){
    e.preventDefault();
    $('.start').hide();
    $('header, .quiz').show();
  });
  showQuestion();
   $('.questionNumber').text(currentQuestion+1);


  $('.answers').on('click', 'button', function(e){
    e.preventDefault();
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });


  $('.quiz').on('click','.submitButton', function(e){
    e.preventDefault();
    if ($('.selected').length){
      let choice = parseInt($('.selected').attr('id'));
      evaluateAnswer(choice);
    } else {
       alert('You must select an answer');
    };
  });

  $('.nextButton').on('click', function(e){
    e.preventDefault();
    $('.correct,.incorrect').hide();
    $('header').show();
    $('.questionNumber').text(currentQuestion+1);
    $('.quiz').show();
    showQuestion();
  });

  $('.results').on('click', '.restartButton', function(e){
    e.preventDefault();
    location.reload();
  });
}

function showQuestion(){
  let item = data[currentQuestion];
  $('.quiz h2').text(item.question);
  $('.answers').html('');
  for(let i = 0; i < item.answers.length; i++){
    $('.answers').append(
      `<button id = "${i}">${item.answers[i]}</li>`
    );
  }
}

function evaluateAnswer(choice){
  $('.quiz').hide();
  $('header').hide();
   let item = data[currentQuestion];
   if (item.correct === choice){
     $('.correct').show();
     score++;
     $('.score').text(score);
   } else {
     $('.incorrect').show();
    $('.show-correct').html(`<h3>Incorrect! The correct answer was "${item.answers[item.correct]}".</h3>`); 
  } 
  
   currentQuestion++;
   if (currentQuestion == data.length){
     showResult();
   } else {
     showQuestion();
    }
}

function showResult(){
  $('header, .quiz, .correct, .incorrect').hide();
  $('.results').show();
  $('.results p').text("You scored " + score + " out of " + data.length + " correct" + "!"); 
  if (score >=7){
  $('.happy-face').show();
  } else {
  $('.sad-face').show();
  };
};

startQuiz();
