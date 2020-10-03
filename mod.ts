let endpoint: string;
let ipv6: boolean;
let response: { [key: string]: string };
const ENDPOINT_IPV4 = "https://api.ipify.org";
// IPv4/IPv6
const ENDPOINT_IPV6 = "https://api64.ipify.org";
const IPv4RegExPattren = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

const isIPv4 = ( ip:string )=> IPv4RegExPattren.test(ip)

const getData = async (endpoint: string) => {
  /** 
   if youe use IPv6 endpoint and your public network don't support IPv6 
   the response well be IPv4
   @see https://www.ipify.org/
   */
  const data = await (await fetch(`${endpoint}?format=json`)).json();
  return data;
};

export async function getIP({ ipv6 = false } = {}) {
  endpoint = ipv6 ? ENDPOINT_IPV6 : ENDPOINT_IPV4;
  try {
    response = await getData(endpoint);
    // check response.ip is not IPv6 
    if (ipv6 === true && isIPv4(response.ip)) {
      // throw an Error whene the IPv6 is not support
      throw new Error("Not supported !");
    }
    
  } catch (err) {
    return "Not supported !";
  }
  
  return response.ip;
}
