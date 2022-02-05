import MainInstance from "@/services/main.instance";
import { FOLLOWERS, FOLLOWING } from "@/services/constant";

const FriendService = {
  getListFollowers(params) {
    return MainInstance.query(FOLLOWERS, { params });
  },
  getListFollowing(params) {
    return MainInstance.query(FOLLOWING, { params });
  },
};

export default FriendService;
