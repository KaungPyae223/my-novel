import { register } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    fullName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    userName: z
      .string()
      .min(5, {
        message: "Username must be at least 5 characters.",
      })
      .regex(/^\S*$/, { message: "Username cannot contain spaces." }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(20, { message: "Password must be at most 20 characters." })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        }
      ),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(20, { message: "Password must be at most 20 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export const useRegister = () => {
  const { setAccount, setToken } = useAccountStore();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await register({
        full_name: values.fullName,
        username: values.userName,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword,
      });

      setAccount(response.data.user);

      toast.success("Register Successfully");
      form.reset();
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  return {
    form,
    onSubmit,
  };
};
