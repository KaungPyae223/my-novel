// hooks/useMutate.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type MutateProps = {
  mutationFn: (data: any) => Promise<any>;
  queryKey: string | string[]; 
  successMessage: string;
  pushPath?: string;
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
    mutationFn,
    onSuccess: () => {
      // Normalize to an array
      const keys = Array.isArray(queryKey) ? queryKey : [queryKey];

      // Invalidate each key so it matches how useFetchData registers it
      keys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: [key] });
      });

      toast.dismiss();
      toast.success(successMessage);

      if (pushPath) {
        router.push(pushPath);
      }
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Failed to fetch data";
      toast.dismiss();
      toast.error(message);
    },
  });
};
