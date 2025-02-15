import axios from "axios";

const domain = "api.jioecomm.com";

const url = `https://${domain}/__jiomart/logistics-internal/api/v1/auth/token/`;

const getBearerToken = async () => {
  const body = {
    grant_type: "client_credentials",
    client_id: "JIOMART_TEST_CLIENT_ID_1",
    client_secret: "TESTTOKEN",
  };
  try {
    const response = await axios.post(url, body);
    return response.data["access_token"];
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

await getBearerToken();

export default getBearerToken;
