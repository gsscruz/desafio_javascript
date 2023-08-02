const autoIncrement = createAutoIncrement()

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
  const filterButton = document.querySelector('.inline')
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

  filterButton.addEventListener('submit', handleFilter(table, people))
  form.addEventListener('submit', handleFormSubmit(table, people))
  refreshPeopleListInUI(table, people)
}

const handleFilter = (table, people) => (event) => {
  const sexList = ["Masculino", "Feminino", "Outro"]
  const queryItem = event.target[0].value
  let queryItemFormatted = queryItem

  if (sexList.includes(queryItem)) {
    queryItemFormatted = queryItem.toLowerCase()
  }

  event.preventDefault();
  const people_shallow_copy = [...people]

  const filterName = (person) => person.name
  const filterAge = (person) => person.age
  const filterSex = (person) => person.sex
  const filterSkills = (person) => person.skills

  const filteredPeople = people_shallow_copy.map(person => {

    if (queryItemFormatted === filterName(person)) {
      return person
    } else if (queryItemFormatted === filterAge(person)) {
      return person
    } else if (queryItemFormatted === filterSex(person)) {
      return person
    } else if (filterSkills(person).includes(queryItemFormatted)) {
      return person
    }
  }).filter(el => el !== undefined)

  refreshPeopleListInUI(table, filteredPeople)
}

main()
