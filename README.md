# 🌐 Get IP

Get your public IP address in Deno.

[![Test CI](https://github.com/denorg/get-ip/workflows/Test%20CI/badge.svg)](https://github.com/denorg/get-ip/actions)

## ⭐ Getting started

Import the `getIP` function and use it:

```ts
import { getIP } from "https://deno.land/x/get_ip/mod.ts";

const getMyIP = async () => {
  console.log(`Your public IP is ${await getIP({ipv6: true})}`);
}

getMyIP();
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx get_ip <ipv4 | ipv6>
//=> '123.456.789.012'
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-net https://deno.land/x/get_ip/cli.ts <ipv4 | ipv6>
//=> '123.456.789.012'
```

You can also install it globally using the following:

```bash
deno install --allow-net -n get-ip https://deno.land/x/get_ip/cli.ts
```

Then, the package is available to run:

```bash
get_ip <ipv4 | ipv6>
//=> '123.456.789.012'
```

### Configuration

Required permissions:

1. `--allow-net`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
