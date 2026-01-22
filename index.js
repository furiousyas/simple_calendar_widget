function UpdateCalendar(){
    const now = new Date()
    const months = [
        "Janvier","Février","Mars","Avril","Mai","Juin",
        "Juillet","Août","Septembre","Octobre","Novembre","Décembre"
        ];

document.getElementById("day").textContent = now.getDate();
document.getElementById("month").textContent = months[now.getMonth()];
document.getElementById("year").textContent = now.getFullYear();
    }
UpdateCalendar();