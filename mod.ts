let endpoint: string;
let ipv6: boolean;
const ENDPOINT_IPV4 = 'https://api.ipify.org';
const ENDPOINT_IPV6 = 'https://api6.ipify.org';

const getData = async (endpoint: string) => {
  const data = await (await fetch(`${endpoint}?format=json`)).json();
  return data;
};

export async function getIP({ipv6: boolean = false} = {}) {
	endpoint = ipv6 ? ENDPOINT_IPV6 : ENDPOINT_IPV4;
	const response = await getData(endpoint);
  return response.ip;
}
