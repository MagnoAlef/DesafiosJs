function quotation(fullName) {
    const names = fullName.split(' ')

    console.log('names' , names)
    let initials = ''
  
    for (let i = 0; i < names.length - 1; i++) {
      initials += ` ${names[i][0].toUpperCase()}.`;
    }
    return `${names[names.length - 1].toUpperCase()},${initials} `
  }

  console.log(quotation('Magno Alef Barroso'))