import { ENV_KEYS } from "@/config/Env";
import AxiosBuilder from "./AxiosBuilder";

function useAxios() {

  const buildAxios = new AxiosBuilder()
    .withBaseURL(ENV_KEYS.API_URL)
    .withResponseType("json")
    .withTimeout(120000)

  const build_Axios = buildAxios.build();

  return build_Axios;
}

export default useAxios;
