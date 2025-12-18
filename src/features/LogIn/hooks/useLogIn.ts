import { login } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useAccountStore from "@/store/useAccountStore";
import z from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const useLogIn = () => {
  const { setAccount } = useAccountStore();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await login({
        email: values.email,
        password: values.password,
      });

      console.log(response);

      setAccount(response.data.user);

      toast.success("Login Successfully");
      form.reset();
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred during login");
    }
  };

  return {
    form,
    onSubmit,
  };
};
