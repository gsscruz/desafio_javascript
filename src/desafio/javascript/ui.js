const createElementWith = (elementTag, properties = {}) => {
  const element = document.createElement(elementTag)
  Object.entries(properties).forEach(([key, value]) => {
    element[key] = value
  })
  return element
}

const statisticsHighestAge = document.querySelector('#highestAge')
const statisticsLowestAge = document.querySelector('#lowestAge')
const statisticsHighestWage = document.querySelector('#highestWage')
const statisticsLowestWage = document.querySelector('#lowestWage')
const statisticsNumberOfPeople = document.querySelector('#totalPeople')
const statisticsAverageAge = document.querySelector('#averageAge')
const statisticsMostFrequentName = document.querySelector('#mostFrequentName')
const statisticsFemaleAmount = document.querySelector('#femaleAmount')
const statisticsMaleAmount = document.querySelector('#maleAmount')
const statisticsOtherAmount = document.querySelector('#otherAmount')
const statisticsUniqueFirstNameAmount = document.querySelector('#uniqueFirstNameAmount')
const statisticsTopThreeEarners = document.querySelector('#topThreeEarners')
const statisticsAllLanguages = document.querySelector('#allLanguages')
const statisticsAllDiferentLanguages = document.querySelector('#allDiferentLanguages')
const statisticsopThreeLanguages = document.querySelector('#topThreeLanguages')

const mostFrequentName = (people) => {
  const getFirstName = (fullName) => fullName.split(' ')[0]
  const firstNames = [...people].map(person => getFirstName(person.name))
  const nameFrequency = {}

  firstNames.forEach(name => {
    nameFrequency[name] = (nameFrequency[name] || 0) + 1
  })

  const uniqueNames = Object.keys(nameFrequency).length

  let frequency = 0
  let mostFrequentFirstName = ''
  for (let personName in nameFrequency) {
    if (nameFrequency[personName] > frequency) {
      frequency = nameFrequency[personName]
      mostFrequentFirstName = personName
    }
  }
  return { mostFrequentFirstName, uniqueNames }
}

const averageAge = (people) => {
  const ages = [...people].map(person => Number(person.age))
  const ageSum = ages.reduce((accumulator, currentVal) => accumulator + currentVal, 0)
  const average = ageSum / ages.length
  return average
}

const genderAmount = (people) => {
  const genderObject = {
    masculino: 0,
    feminino: 0,
    outro: 0
  }
  const proxyPeople = [...people].forEach(person => { genderObject[person.sex]++ })
  return genderObject
}

const topEarners = (people) => {
  const earners = {}
  const proxyPeople = [...people].map(person => {
    earners[person.name] = person.income
    return person
  })

  let topEarners = new Float64Array(Object.values(earners)).sort().reverse().slice(0, 3)
  const pessoas = []

  for (const key in earners) {
    topEarners.forEach(wage => {
      if (earners[key] === wage) {
        pessoas.push(key)
      }
    })
  }
  return pessoas
}

const programmingLanguages = (people) => {
  const languages = [...people].map((person) => (person.skills).split(';')).flat()
  const formattedLanguages = languages.map(language => language.trim()).filter(language => language !== '')
  const uniqueLanguages = new Set([])
  formattedLanguages.forEach(language => uniqueLanguages.add(language))

  const allUniqueLanguages = []
  uniqueLanguages.forEach(language => allUniqueLanguages.push(language))

  const languagesForReference = {}
  allUniqueLanguages.forEach(language => languagesForReference[language] = 0)


  const languageFormatter = (skillString) => {
    const firstFilter = skillString.split(';').flat()
    const formattedLanguages = firstFilter.map(string => string.trim()).filter(language => language !== '')
    return { firstFilter, formattedLanguages }
  }

  const languageCounter = (people) => {
    const peopleAndTheirLanguages = {}
    people.forEach(person => peopleAndTheirLanguages[person.name] = languageFormatter(person.skills).formattedLanguages)
    for (const programmingLanguage in languagesForReference) {
      for (const person in peopleAndTheirLanguages) {
        peopleAndTheirLanguages[person].forEach(personLanguage => {
          if (programmingLanguage === personLanguage) {
            languagesForReference[programmingLanguage]++
          }
        })
      }
    }
  }

  languageCounter(people)
  const sortedLanguages = Object.entries(languagesForReference).sort((a, b) => b[1] - a[1])
  const threeMostBelovedLanguages = sortedLanguages.slice(0, 3).flat().filter(el => typeof el !== 'number')
  return { allUniqueLanguages, threeMostBelovedLanguages }
}


const wageCounter = (people) => {
  let topEarner = people[0].income
  let bottomEarner = people[0].income

  let higherWage = people[0].income
  let lowerWage = people[0].income

  people.forEach(person => {
    if (person.income > higherWage) {
      higherWage = person.income
      topEarner = person.income
    } else if (person.income < lowerWage) {
      lowerWage = person.income;
      bottomEarner = person.income
    }
  })
  return { topEarner, bottomEarner }
}

const ageCounter = (people) => {
  let oldest = people[0].age
  let youngest = people[0].age

  let older = people[0].age
  let younger = people[0].age

  people.forEach(person => {
    if (person.age > older) {
      older = person.age
      oldest = person.age
    } else if (person.age < younger) {
      younger = person.age;
      youngest = person.age
    }
  })
  return { oldest, youngest }
}

const refreshPeopleListInUI = (table, people) => {
  const tBody = table.querySelector('tbody')
  const trsToRemove = tBody.querySelectorAll('tr')

  updatePeopleStatistics(people)

  trsToRemove.forEach((tr) => {
    tr.remove()
  })

  people.forEach((person) => {
    const tr = createElementWith('tr')
    const tdButton = createElementWith('td')
    const deleteButton = createElementWith('button', { innerText: 'Deletar' })
    tdButton.append(deleteButton)
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

const updatePeopleStatistics = (people) => {
  statisticsNumberOfPeople.textContent = people.length
  statisticsMostFrequentName.textContent = mostFrequentName(people).mostFrequentFirstName
  statisticsUniqueFirstNameAmount.textContent = mostFrequentName(people).uniqueNames
  statisticsAverageAge.textContent = averageAge(people).toFixed()
  statisticsFemaleAmount.textContent = genderAmount(people).feminino
  statisticsMaleAmount.textContent = genderAmount(people).masculino
  statisticsOtherAmount.textContent = genderAmount(people).outro
  statisticsTopThreeEarners.textContent = topEarners(people)
  statisticsAllLanguages.textContent = programmingLanguages(people).allUniqueLanguages
  statisticsAllDiferentLanguages.textContent = programmingLanguages(people).allUniqueLanguages.length
  statisticsopThreeLanguages.textContent = programmingLanguages(people).threeMostBelovedLanguages
  statisticsHighestWage.textContent = wageCounter(people).topEarner
  statisticsLowestWage.textContent = wageCounter(people).bottomEarner
  statisticsHighestAge.textContent = ageCounter(people).oldest
  statisticsLowestAge.textContent = ageCounter(people).youngest
}