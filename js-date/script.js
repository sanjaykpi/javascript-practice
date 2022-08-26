// Date objects
// 1)initiate
// new Date()
// new Date() creates a new date object with the current date and time:
const a = new Date();
console.log(a);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(year, month, ...) creates a new date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const b= new Date(2022, 11, 24, 10, 33, 30, 0);
console.log(b);

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:
const c = new Date(1000000000);
console.log(c);

// new Date(date string)
// new Date(dateString) creates a new date object from a date string:
const d = new Date("October 13, 2014 11:13:00");
console.log(d);

// 2)get methods
// The getTime() method returns the number of milliseconds since January 1, 1970:
const ga= new Date();
console.log(ga.getTime());

// The getFullYear() method returns the year of a date as a four digit number:
const gb = new Date();
console.log(gb.getFullYear());

// getMonth()  method returns the month of a date as a number (0-11):
const gc = new Date();
console.log(gc.getMonth());

// The getDate() method returns the day of a date as a number (1-31):
const gd= new Date();
console.log(gd.getHours());

// The getMinutes() method returns the minutes of a date as a number (0-59):
const ge = new Date();
console.log(ge.getMinutes());

// The getSeconds() method returns the seconds of a date as a number (0-59):
const gf= new Date();
console.log(gf.getSeconds());

// getMilliseconds() method returns the milliseconds of a date as a number (0-999):
const gg = new Date();
console.log(gg.getMilliseconds());

// getDay() method returns the weekday of a date as a number (0-6)
const gh= new Date();
console.log(gh.getDay());

// 3)set methods
// setFullYear() method sets the year of a date object. In this example to 2020
const sa= new Date();
sa.setFullYear(2020);
console.log(sa);

// setMonth() method sets the month of a date object (0-11)
const sb= new Date();
sb.setMonth(11);
console.log(sb);

// setDate() method sets the day of a date object (1-31)
const sc= new Date();
sc.setDate(11);
console.log(sc);

// The setHours() method sets the hours of a date object (0-23):
const sd= new Date();
sd.setHours(11);
console.log(sd);

// setMinutes() method sets the minutes of a date object (0-59):
const se= new Date();
se.setMinutes(20);
console.log(se);

// setSeconds() method sets the seconds of a date object (0-59):
const sf= new Date();
sf.setSeconds(40);
console.log(sf);

// 4)convert
// toDateString()
let tds=new Date('August 26, 2022');
console.log(tds.toDateString());

// toISOString()
console.log(tds.toISOString());

// toLocalDateString()
console.log(tds.toLocaleDateString());

// toLocalTimeString()
console.log(tds.toLocaleTimeString());

// toLocalString()
console.log(tds.toLocaleString());

// toString()
console.log(tds.toString());

// toTimeString()
console.log(tds.toTimeString());

// toUTCString()
console.log(tds.toUTCString());