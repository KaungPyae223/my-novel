"use client";
import React from "react";
import SettingHeader from "../components/SettingHeader";
import Container from "@/features/Components/Container/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { logout } from "@/services/auth";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { confirmToast } from "@/utils/customToasts";

const SettingPage = () => {
  const [language, setLanguage] = React.useState("english");

  const { setLogOut } = useAccountStore();
  const router = useRouter();

  const handleLogout = async () => {
    confirmToast({
      title: "Logout",
      description: "Are you sure to logout ?",
      confirmText: "Logout",
      cancelText: "Cancel",
      confirmColor: "bg-red-600 hover:bg-red-700",
      onConfirm: async () => {
        try {
          const response = await logout();
          setLogOut();
          toast.success("Logout Successfully");
          router.push("/login");
        } catch (error) {
          toast.error("Logout Failed");
          console.log(error);
        }
      },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Toaster position="top-center" richColors className="z-[9999]" />
      <SettingHeader />
      <Container className="mt-16 p-6">
        <div className="max-w-2xl py-6 divide-y space-y-6 divide-gray-200 mx-auto">
          <div className="pb-6">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-500 mt-1">Manage your account settings</p>
          </div>

          <div className=" space-y-6 ">
            <Card className="rounded-lg shadow-sm border p-6">
              <CardContent className="p-0">
                <div className="space-y-2.5">
                  <h2 className="text-2xl font-semibold mb-1.5 flex items-center gap-2">
                    <Sun className="h-5 w-5" /> Appearance
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how the app looks and feels
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium text-lg">Dark Mode</p>
                      <p className="text-sm mt-0.5 text-muted-foreground">
                        Switch between light and dark themes
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Sun className="h-4 w-4 text-muted-foreground" />
                      <Switch />
                      <Moon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-lg shadow-sm border p-6">
              <CardContent className="p-0">
                <div className="space-y-2.5">
                  <h2 className="text-2xl font-semibold mb-1.5 flex items-center gap-2">
                    <Globe className="h-5 w-5" /> Language & Region
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred language
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium text-lg">Language</p>
                      <p className="text-sm mt-0.5 text-muted-foreground">
                        Select your preferred language
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="japanese">Japanese</SelectItem>
                            <SelectItem value="chinese">Chinese</SelectItem>
                            <SelectItem value="korean">Korean</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-lg shadow-sm border p-6">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-1.5 flex items-center gap-2">
                    Reading Preferences
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Customize your reading experience
                  </p>

                  <div className="flex border-b border-gray-200 pb-4 items-center justify-between pt-4 ">
                    <div>
                      <p className="font-medium text-lg">Reading History</p>
                      <p className="text-sm text-muted-foreground">
                        Save your reading progress
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Switch />
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div>
                      <p className="font-medium text-lg">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified about new chapters
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-lg shadow-sm border p-6">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-1.5 flex items-center gap-2">
                    Privacy & Data
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Control your privacy and data settings
                  </p>

                  <div className="flex border-b border-gray-200 pb-4 items-center justify-between pt-4 ">
                    <div>
                      <p className="font-medium text-lg">Analytics</p>
                      <p className="text-sm text-muted-foreground">
                        Help improve the app with usage data
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Switch />
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div>
                      <p className="font-medium text-lg">Public Profile</p>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to others
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-lg shadow-sm border p-6">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-1.5 flex items-center gap-2">
                    Account
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your account settings
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 px-4 border border-red-200 cursor-pointer text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors text-center"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SettingPage;
