const createElementWith = (elementTag, properties = {}) => {
  const element = document.createElement(elementTag)

  Object.entries(properties).forEach(([key, value]) => {
    element[key] = value
  })

  return element
}

const refreshPeopleListInUI = (table, people) => {
  const idToDelete = { ...localStorage }
  const tBody = table.querySelector('tbody')
  const trsToRemove = tBody.querySelectorAll('tr')

  const peopleProxy = [...people].filter(person => {
    const idValuesOfDeletePeople = Object.values(idToDelete)
    const convertIdToNumber = idValuesOfDeletePeople.map(id => Number(id))

    if (!convertIdToNumber.includes(person.id)) {
      return person
    }
  })

  trsToRemove.forEach((tr) => {
    tr.remove()
  })

  peopleProxy.forEach((person) => {
    const tr = createElementWith('tr')
    const tdButton = createElementWith('td')
    const deleteButton = createElementWith('button', { innerText: 'Deletar' })
    const addDeletedPersonIdToLocalStorage = (data) => localStorage.setItem(`id${data.id}`, data.id)
    const deletePerson = (data, table, people) => () => {
      addDeletedPersonIdToLocalStorage(data)
      refreshPeopleListInUI(table, people)
    }
    tdButton.append(deleteButton)

    deleteButton.addEventListener('click', deletePerson(person, table, people))

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
