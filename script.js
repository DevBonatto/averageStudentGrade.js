let students = [
  {
    name: 'Joao',
    firstGrade: 10,
    secondGrade: 10
  },
  {
    name: 'Carlos',
    firstGrade: 8.500000,
    secondGrade: 4
  },
  {
    name: 'Lucca',
    firstGrade: 10,
    secondGrade: 9
  },
  {
    name: 'Mario',
    firstGrade: 2,
    secondGrade: 3
  }
]

function gradeCalculator(firstGrade, secondGrade){
  return ((firstGrade + secondGrade) / 2).toFixed(2)
}

for (student of students) { 
  result = gradeCalculator(student.firstGrade, student.secondGrade)

  if(result >= 8) {
    alert(`Parabéns ${student.name}, você conseguiu passar no concurso! sua nota foi ${result}`)
  }else if (result >= 6){
    alert(`Poxa ${student.name}, você não passou na prova do concurso, sua nota foi: ${result}, porém você está na lista de espera, caso surja uma vaga você será convidado :)`)
  }else{
    alert(`Olá ${student.name}, infelizmente você não passou na prova do concurso, sua nota foi: ${result}, estude mais para a próxima!`)
  }
}
