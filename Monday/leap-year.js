function leapYear(year){
  if (year%100 == 0 && year%400==0 && year%4 == 0){
    console.log("true")
  }else{
    console.log("false");
  }
};

leapYear(1900)