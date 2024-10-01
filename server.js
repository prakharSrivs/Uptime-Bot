const cron = require("node-cron");

cron.schedule("*/15 * * * *", async ()=>{
    const response = await fetch("https://peerchat-backend.onrender.com/status");
    console.log(await response.json());
    console.log(" Made Successful Uptime Request After 15 Minutes  ",new Date());
})

console.log("Cron Scheduled");
