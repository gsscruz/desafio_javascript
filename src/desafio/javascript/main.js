const createAutoIncrement = (initialValue = 1) => {
  let currentValue = initialValue
  return () => {
    return currentValue++
  }
}
const autoIncrement = createAutoIncrement()

const formatters = {
  toNumber: Number,
  toCurrency: (value) => new Intl.NumberFormat('PT-br', { style: 'currency', currency: 'BRL' }).format(value),
  toSexGenre: (value) => {
    if (value === 'masculino') {
      return 'Masculino'
    } else if (value === 'feminino') {
      return 'Feminino'
    }
    return 'Outro'
  }
}

const createElementWith = (elementTag, properties = {}) => {
  const element = document.createElement(elementTag)

  Object.entries(properties).forEach(([key, value]) => {
    element[key] = value
  })

  return element
}

const refreshPeopleListInUI = (table, people) => {
  const tBody = table.querySelector('tbody')
  const trsToRemove = tBody.querySelectorAll('tr')

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

const handleFormSubmit = (table, people) => (event) => {
  const { target: form } = event
  event.preventDefault();

  const formData = new FormData(form);
  const newPerson = Object.fromEntries(formData);

  people.push({
    id: autoIncrement(),
    ...newPerson,
  })
  refreshPeopleListInUI(table, people)
  form.reset()
}

const main = () => {
  const form = document.querySelector('form')
  const table = document.querySelector('table')
  const people = [
    { id: autoIncrement(), name: 'Eduarda Mesquita', age: '30', sex: 'feminino', income: 5_500, skills: 'Javascript; C# ;PHP;' },
    { id: autoIncrement(), name: 'Ezequiel Nascimento', age: '25', sex: 'masculino', income: 2_250, skills: 'Kotlin; Python;Ruby' },
    { id: autoIncrement(), name: 'Emiliana Pio', age: '42', sex: 'outro', income: 20_000, skills: 'Kotlin;Javascript;C#' },
    { id: autoIncrement(), name: 'Angelina Florinda', age: '30', sex: 'feminino', income: 15_000, skills: 'Ruby; Go; PHP;Python;' },
    { id: autoIncrement(), name: 'Eduarda Angelo', age: '23', sex: 'feminino', income: 8_000, skills: 'PHP;Java;C#' },
    { id: autoIncrement(), name: 'Kleber Santana', age: '46', sex: 'outro', income: 3_000, skills: 'Javascript' },
    { id: autoIncrement(), name: 'Marina Alves', age: '25', sex: 'feminino', income: 5_000, skills: 'Javascript;PHP;Kotlin;' },
    { id: autoIncrement(), name: 'Emiliana Nascimento', age: '42', sex: 'feminino', income: 5_500, skills: 'Kotlin; Swifty; Python;' },
    { id: autoIncrement(), name: 'Kleber Santana', age: '40', sex: 'masculino', income: 7_750, skills: 'Python;Javascript;Ruby' },
    { id: autoIncrement(), name: 'Ezequiel Micaela', age: '25', sex: 'outro', income: 1_000, skills: 'Java;PHP;C#;' },
    { id: autoIncrement(), name: 'Eduarda Gonçalo', age: '30', sex: 'feminino', income: 500, skills: 'Java; Javascript ; Ruby' },
    { id: autoIncrement(), name: 'Kleber Silva', age: '23', sex: 'masculino', income: 1_500, skills: 'Kotlin; Ruby; Python' },
    { id: autoIncrement(), name: 'Ezequiel Machado', age: '27', sex: 'masculino', income: 2_200, skills: 'Javascript; C#; Ruby; Go' },
    { id: autoIncrement(), name: 'Angelina Silva', age: '35', sex: 'outro', income: 4_200, skills: 'Ruby; Java; C#' },
    { id: autoIncrement(), name: 'Ezequiel Nunes', age: '30', sex: 'masculino', income: 3_500, skills: 'Javascript; Ruby' },
  ]
  window.people =people

  form.addEventListener('submit', handleFormSubmit(table, people))
  refreshPeopleListInUI(table, people)
}

main()
