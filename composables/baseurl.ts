export const usePayloadUrl = () => {

	// get the config
	const confg = useRuntimeConfig();

	// declare vars
	let url, baseURL;

	// check if we are server or client side and then assign vars
	if (process.server) {
		url = confg.BASE_URL;
		baseURL = `${url}`;
	} else {
		url = confg.public.BASE_URL;
		baseURL = `${url}`;
	}
	// return values
	return { url, baseURL };
};