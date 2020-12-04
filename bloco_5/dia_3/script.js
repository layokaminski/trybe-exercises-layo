function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
function daysMonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let listMonth = document.getElementById('days');
  

  for (let index = 0; index < dezDaysList.length; index += 1) {
      let days = dezDaysList[index];
      let listDays = document.createElement('li');
      listDays.innerText = days
      listMonth.appendChild(listDays)
    }
    let listMonthChild = document.querySelectorAll('#days li');
    for (let index = 0; index < listMonthChild.length; index += 1) {
        if (listMonthChild[index]) {
            listMonthChild[index].classList = 'day'
        }

        if (listMonthChild[index].innerText == 25) {
            listMonthChild[index].classList = 'day holiday friday' 
        }

        if (listMonthChild[index].innerText == 24 || listMonthChild[index].innerText == 31) {
            listMonthChild[index].classList = 'day holiday'
        } 

        if (listMonthChild[index].innerText == 4 || listMonthChild[index].innerText == 11  || listMonthChild[index].innerText == 18) {
            listMonthChild[index].classList = 'day friday'
        }

    }
}
daysMonth();


        