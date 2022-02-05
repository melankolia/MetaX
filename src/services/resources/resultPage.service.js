import MainInstance from "@/services/main.instance";
import { SEARCH } from "@/services/constant";

const MainService = {
  getList(params) {
    return MainInstance.query(SEARCH, { params });
  },
};

export default MainService;
