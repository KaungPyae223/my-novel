import { login } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useAccountStore from "@/store/useAccountStore";
import z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const useLogIn = () => {
  const { setAccount, setToken } = useAccountStore();
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
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Login failed");
      }

      setToken(json.token);
      setAccount(json.user);

      toast.success("Login Successfully");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred during login");
    }
  };

  return {
    form,
    onSubmit,
  };
};
