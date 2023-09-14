const daysDifference = (dateOne, dateTwo) => {
    const timeDifference = Math.abs(dateOne.getTime() - dateTwo.getTime());
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };
  
  console.log(daysDifference(new Date('2023-12-22'), new Date('2012-10-12')));
