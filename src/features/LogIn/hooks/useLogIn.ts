import { login } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const useLogIn = () => {
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
