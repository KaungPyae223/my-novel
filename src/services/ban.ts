import { api } from "./api";
import { useMutate } from "./mutate";

const banUser = (banData: any) => {
  return api.post(`novels/ban-user/${banData.novelID}/${banData.user_id}`);
};

const unbanUser = (banData: any) => {
  return api.delete(`novels/unban-user/${banData.novelID}/${banData.user_id}`);
};

export const useUnbanUser = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: unbanUser,
    queryKey: [`banned-user-${novelID}`, `letters-${novelID}`],
  });
};

export const useBanUser = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: banUser,
    queryKey: [`banned-user-${novelID}`, `letters-${novelID}`],
  });
};
