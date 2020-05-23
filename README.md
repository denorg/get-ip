# 🌐 Get IP

Get your public IP address in Deno.

[![Test CI](https://github.com/denorg/get-ip/workflows/Test%20CI/badge.svg)](https://github.com/denorg/get-ip/actions)

```ts
import { getIP } from "https://deno.land/x/get_ip/mod.ts";

const getMyIP = async () => {
  console.log(`Your public IP is ${await getIP({ipv6: true})}`);
}

getMyIP();
```

Alternatively, you can use it directly from the CLI by using deno run:

```bash
deno run --allow-net https://deno.land/x/get_ip/cli.ts <ipv4 | ipv6>
```

You can also install it globally using the following:

```bash
deno install --allow-net -n get_ip https://deno.land/x/get_ip/cli.ts
```

Then, the package is available to run:

```bash
get_ip <ipv4 | ipv6>
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
