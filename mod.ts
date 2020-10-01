let endpoint: string;
let ipv6: boolean;
let response: {[key: string]: string};
const ENDPOINT_IPV4 = 'https://api.ipify.org';
const ENDPOINT_IPV6 = 'https://api6.ipify.org';

const getData = async (endpoint: string) => {
  const data = await (await fetch(`${endpoint}?format=json`)).json();
  return data;
};

export async function getIP({ipv6 = false} = {}) {
  endpoint = ipv6 ? ENDPOINT_IPV6 : ENDPOINT_IPV4;
  try {
    response = await getData(endpoint)
  } catch (err) {
    return 'not supported'
  }

  return response.ip;
}
