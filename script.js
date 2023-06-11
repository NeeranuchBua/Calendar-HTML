const date = new Date();
const Submit = document.getElementById("submit");
const eventName1 = document.getElementById("ename");
const date1 = document.getElementById("date");
const time1 = document.getElementById("time");
const dname1 = document.getElementById("dname");
const Result = document.getElementById("result");
      

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  function event(e){
    e.preventDefault();
    days.innerHTML = "add event";
  }

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});



document.querySelectorAll("#app-calendar .day").forEach
(days => {
    days.addEventListener("click" ,event=> {
        event.currenttarget.classList.toggle("selected");
    });

});

//
Submit.onclick = () => {
  if(!eventName1.value || !date1.value || !time1.value || !dname1.value){
    Result.innerText = "";
   
}
else{
    Result.innerText = `Event name: ${eventName1.value}\n Event date: ${date1.value}\n Event time: ${time1.value}\n Event description: ${dname1.value}`;
}

  // Result.className = "animateanimated animateflash";
  // setTimeout(() => {
  //   Result.className = "";
  // }, 1000);
};
  
document.getElementById(
  "form",
  addEventListener("submit",(e) =>{
      e.preventDefault();
      const eventName = document.getElementById("ename").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const dname = document.getElementById("dname").value;
     
     
      
      if(!eventName || !date || !time || !dname){
          return alert("Please fill all required fields!");
      }
     
     
     
  })
);





renderCalendar();