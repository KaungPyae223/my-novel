import { api } from "./api";
import { useMutate } from "./mutate";

const banUser = ({userID, novelID}:{userID: string, novelID: string}) => {
  return api.post(`/novels/ban-user/${novelID}/${userID}`);
};

const unbanUser = ({userID, novelID}:{userID: string, novelID: string}) => {
  return api.post(`/novels/unban-user/${novelID}/${userID}`);
};


export const useBanUser = () => {
  return useMutate({
    mutationFn: banUser,
    queryKey: [],
    successMessage: "User banned successfully",
  });
};

export const useUnbanUser = () =>{
    return useMutate({
    mutationFn: unbanUser,
    queryKey: [],
    successMessage: "User unbanned successfully",
  });
}
  