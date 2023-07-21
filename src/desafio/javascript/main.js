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
}

const createTd = (text) => {x
  const td = document.createElement('td')
  td.innerText = text
  return td
}

const refreshPeopleListInUI = (table, people) => {
  const tBody = table.querySelector('tbody')
  const trsToRemove = tBody.querySelectorAll('tr')

  trsToRemove.forEach((tr) => {
    tr.remove()
  })

  people.forEach((person) => {
    const tr = document.createElement('tr')

    tr.append(createTd(person.id))
    tr.append(createTd(person.name))
    tr.append(createTd(person.age))
    tr.append(createTd(person.sex))
    tr.append(createTd(formatters.toCurrency(person.income)))
    tr.append(createTd(person.skills))

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
    { id: autoIncrement(), name: 'Kleber', age: '32', sex: 'masculino', income: 5_000, skills: 'JS; Java; Kotlin' },
    { id: autoIncrement(), name: 'Julia', age: '35', sex: 'feminino', income: 8_000, skills: 'Ruby; Python; JS; Java;' },
    { id: autoIncrement(), name: 'Carla', age: '30', sex: 'feminino', income: 10_500, skills: 'C#;JS; Kotlin' },
    { id: autoIncrement(), name: 'Antonio', age: '30', sex: 'masculino', income: 1_250, skills: 'Ruby; C#; Go;' },
    { id: autoIncrement(), name: 'Julia', age: '30', sex: 'feminino', income: 8_500, skills: 'Ruby;JS;Python' },
    { id: autoIncrement(), name: 'Kleber', age: '30', sex: 'masculino', income: 500, skills: 'Java' },
  ]

  form.addEventListener('submit', handleFormSubmit(table, people))
  refreshPeopleListInUI(table, people)
}

main()
