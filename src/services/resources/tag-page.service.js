import MainInstance from "@/services/main.instance";
import { TAGS } from "@/services/constant";

const TagService = {
  getList(params) {
    return MainInstance.query(TAGS, { params });
  },
};

export default TagService;
