import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getIP } from "./mod.ts";

const ValidateIPaddress = (ipaddress: string) => {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
    return (true)
  }
  return (false)
}

Deno.test("test getIP function", async (): Promise<void> => {
  assertEquals(ValidateIPaddress(await getIP()), true);
});
