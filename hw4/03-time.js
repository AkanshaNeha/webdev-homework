const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  const datefirst = new Date(date1);
  const datesecond  = new Date(date2);
  const [year1, month1]  = [datefirst.getFullYear(), datefirst.getMonth()];
  const [year2, month2]  = [datesecond.getFullYear(), datesecond.getMonth()];
  const elapsed = new Date(datefirst.getTime() - datesecond.getTime());
  const [year, month] = [elapsed.getFullYear(),elapsed.getMonth()];
  if(!isNaN(year)) 
  { 
    if(month == 0)
    {
      return "Time elapsed: "+(year-1970) + " years"; 
    }
    else if(year - 1970 == 0)
    {
      return "Time elapsed: "+ month + " months";
    }
    else {
      return "Time elapsed: "+(year-1970 )+ " years, " +month+" months";
    }
  }
   else 
   {
    return "Error: Invalid input provided";
  }

};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.
