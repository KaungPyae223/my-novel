import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type MutateProps = {
  mutationFn: (data: any) => Promise<any>;
  queryKey: string[];
  successMessage: string;
  pushPath?: string | undefined;
};

export const useMutate = ({
  mutationFn,
  queryKey,
  successMessage,
  pushPath,
}: MutateProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
      toast.dismiss();
      toast.success(successMessage);

      if (pushPath) {
        router.push(pushPath);
      }
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || "Failed to update profile.";

      toast.dismiss();
      toast.error(message);
    },
  });
};
