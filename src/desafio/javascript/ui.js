const createElementWith = (elementTag, properties = {}) => {
  const element = document.createElement(elementTag)

  Object.entries(properties).forEach(([key, value]) => {
    element[key] = value
  })

  return element
}

let ageBottom = 0;
let ageCeiling = 999;
const highestAge = (person) => person.age > ageBottom ? ageBottom = person.age : ageBottom
const lowestAge = (person) => person.age < ageCeiling ? ageCeiling = person.age : ageCeiling

const statisticsHighestAge = document.querySelector('#highestAge')
const statisticsLowestAge = document.querySelector('#lowestAge')
const statisticsNumberOfPeople = document.querySelector('#totalPeople')
const statisticsMostFrequentName = document.querySelector('#mostFrequentName')
const statisticsAverageAge = document.querySelector('#averageAge')

//primeiro nome que mais aparece
const mostFrequentName = (people) => {
  const getFirstName = (fullName) => fullName.split(' ')[0]
  const firstNames = [...people].map(person => getFirstName(person.name))

  const nameFrequency = {}
  firstNames.forEach(name => {
    nameFrequency[name] = (nameFrequency[name] || 0) + 1
  })

  let frequency = 0
  let mostFrequentFirstName = ''
  for (let personName in nameFrequency) {
    if (nameFrequency[personName] > frequency) {
      frequency = nameFrequency[personName]
      mostFrequentFirstName = personName
    }
  }
  return mostFrequentFirstName
}
const averageAge = (people) => {
  const ages = [...people].map(person => Number(person.age))
  const ageSum = ages.reduce((accumulator, currentVal) => accumulator + currentVal, 0)
  const average = ageSum / ages.length
  return average

}
const refreshPeopleListInUI = (table, people) => {

  const tBody = table.querySelector('tbody')
  const trsToRemove = tBody.querySelectorAll('tr')

  statisticsNumberOfPeople.textContent = people.length
  statisticsMostFrequentName.textContent = mostFrequentName(people)
  statisticsAverageAge.textContent = averageAge(people).toFixed()

  trsToRemove.forEach((tr) => {
    tr.remove()
  })

  people.forEach((person) => {
    const tr = createElementWith('tr')
    const tdButton = createElementWith('td')
    const deleteButton = createElementWith('button', { innerText: 'Deletar' })
    tdButton.append(deleteButton)


    statisticsHighestAge.textContent = highestAge(person)
    statisticsLowestAge.textContent = lowestAge(person)

    tr.append(createElementWith('td', { innerText: person.id }))
    tr.append(createElementWith('td', { innerText: person.name }))
    tr.append(createElementWith('td', { innerText: person.age }))
    tr.append(createElementWith('td', { innerText: formatters.toSexGenre(person.sex) }))
    tr.append(createElementWith('td', { innerText: formatters.toCurrency(person.income) }))
    tr.append(createElementWith('td', { innerText: person.skills }))
    tr.append(tdButton)

    tBody.append(tr)
  })
}
