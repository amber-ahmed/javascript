import delay from "./artificialdelay.js";
import timer from "./artificialdelay2.js";

async function main() {
  console.log("start");
  delay(6000);
  console.log("end");
  console.log('before')
  await timer(5000)
  console.log('after')
}
main()