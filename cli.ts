import { getIP } from "./mod.ts";

const cli = async () => {
  console.log(`Your public IP is ${await getIP({ipv6: true})}`);
}

cli();
