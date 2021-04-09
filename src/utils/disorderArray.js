const disorderArray = array => {
  const newArray = array.sort((a, b) => Math.random()-0.5)

  return [...newArray]
}

export default disorderArray;