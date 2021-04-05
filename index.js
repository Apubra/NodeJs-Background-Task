var cron = require("node-cron");

var task = cron.schedule("* * * * * *", () => {
    console.log("will not execute anymore, nor be able to restart");
    // StopTask();
});
// task.destroy();

let i = 100;
if (i == 100) {
  task.stop();
  // task.destroy();
}

// let StopTask = () => {
//     console.log("Working...");
//     task.destroy();
// };
