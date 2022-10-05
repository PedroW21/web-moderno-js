const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * * * * *", () => {
    console.log("Executando Tarefa 1", new Date().getSeconds());
}); // seg (a "/" é necessária para informar que é de 5 em 5, não só no 5o seg) / min / h / dMes / mes / diaSem

setTimeout(function() {
    tarefa1.cancel();
    console.log("Cancelando tarefa1...");
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1,5)]; // seg a domingo
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log("Tarefa 2...", new Date().getSeconds());
})

setTimeout(() => {
    tarefa2.cancel();
    console.log("Cancelando tarefa2...");
}, 90000);