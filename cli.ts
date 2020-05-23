import { getIP } from "./mod.ts";

const cli = async () => {
  if (Deno.args.length) {
    const command = Deno.args[0];
    if (command === "ipv6") {
      console.log(`Your public IPv6 is ${await getIP({ipv6: true})}`);
    } else if (command === "ipv4") {
      console.log(`Your public IPv4 is ${await getIP({ipv6: false})}`);
    } else {
      console.log('Usage:\n$ getip <ipv4 | ipv6>')
    }
  } else {
    console.log('Usage:\n$ getip <ipv4 | ipv6>')
  }
}

cli();
