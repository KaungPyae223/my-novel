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

const SettingPage = () => {
  const [language, setLanguage] = React.useState('english');
  return (
    <div className="bg-gray-50 min-h-screen">
      <SettingHeader />
      <Container className="mt-16 p-6">
        <div className="max-w-2xl py-6 divide-y space-y-6 divide-gray-200 mx-auto">
          <div className="pb-6">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-500 mt-1">Manage your account settings</p>
          </div>

          <div className=" space-y-6 pb-6">
            <Card className="rounded-lg shadow-sm border p-6">
              <CardContent className="p-0">
                <div className="space-y-2.5">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
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
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
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
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Sun className="h-5 w-5" /> Appearance
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how the app looks and feels
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
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
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Sun className="h-5 w-5" /> Appearance
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how the app looks and feels
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
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
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Sun className="h-5 w-5" /> Appearance
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how the app looks and feels
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
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
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Sun className="h-5 w-5" /> Appearance
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how the app looks and feels
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
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
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Sun className="h-5 w-5" /> Appearance
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Customize how the app looks and feels
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
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
          </div>

          <div className="">
            <button
              onClick={() => {}}
              className="w-full py-3 px-4 bg-red-100 cursor-pointer text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors text-center"
            >
              Sign Out
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SettingPage;
