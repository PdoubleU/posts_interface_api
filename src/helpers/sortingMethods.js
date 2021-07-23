const sortNameDsc = (a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1

  return 0
}

const sortNameAsc = (a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) return 1
  if (nameA > nameB) return -1

  return 0
}

const sortTitleDsc = (a, b) => {
  const nameA = a.title.toLowerCase()
  const nameB = b.title.toLowerCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1

  return 0
}

const sortTitleAsc = (a, b) => {
  const nameA = a.title.toLowerCase()
  const nameB = b.title.toLowerCase()
  if (nameA < nameB) return 1
  if (nameA > nameB) return -1

  return 0
}

export { sortNameDsc, sortNameAsc, sortTitleDsc, sortTitleAsc }
