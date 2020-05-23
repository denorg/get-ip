# 🌐 getip

Get your public IP address in Deno.

[![Test CI](https://github.com/denorg/getip/workflows/Test%20CI/badge.svg)](https://github.com/denorg/getip/actions)

```ts
import { mode } from "https://raw.githubusercontent.com/denorg/getip/master/mod.ts";

const getMyIP = async () => {
  console.log(`Your public IP is ${await getIP({ipv6: true})}`);
}

getMyIP();
```

Alternatively, you can use it directly from the CLI by using deno run:

```bash
deno run --allow-net https://raw.githubusercontent.com/denorg/getip/master/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-net -n getip https://raw.githubusercontent.com/denorg/getip/master/cli.ts
```

Then, the package is available to run:

```bash
getip
```

Required permissions:

1. `--allow-net`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## 📄 License

MIT © [Denorg](https://den.org.in)
