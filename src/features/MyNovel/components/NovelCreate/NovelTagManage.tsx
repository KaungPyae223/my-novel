"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, X } from "lucide-react";
import { availableTags } from "@/lib/novelData";

const NovelTagManage = ({ form }: { form: any }) => {
  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => {
        const [inputValue, setInputValue] = useState<string>("");
        const [suggestions, setSuggestions] = useState<string[]>([]);
        const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

        // Current tags in the form field, split by '/'
        const currentTags = field.value?.split("/")?.map((t: string) => t.trim())?.filter((t: string) => t.length > 0);

        const addTag = (tagToAdd: string) => {
          const newTag = tagToAdd.trim();
          if (newTag?.length < 2) {
            // Minimum tag length validation
            form.setError("tags", {
              type: "manual",
              message: "Tag must be at least 2 characters.",
            });
            return;
          }
          if (
            !availableTags.find((tag) =>
              tag.toLowerCase().includes(newTag.toLowerCase())
            )
          ) {
            form.setError("tags", {
              type: "manual",
              message: "Tag is not available.",
            });
            return;
          }
          if (newTag?.length > 10) {
            form.setError("tags", {
              type: "manual",
              message: "Tag cannot exceed 10 characters.",
            });
            setInputValue("");
            return;
          }
          if (!/^[a-zA-Z0-9\s-]*$/.test(newTag)) {
            form.setError("tags", {
              type: "manual",
              message:
                "Tag can only contain letters, numbers, spaces, and hyphens.",
            });
            return;
          }

          if (newTag && !currentTags.includes(newTag)) {
            if (currentTags?.length >= 10) {
              // Max 10 tags
              form.setError("tags", {
                type: "manual",
                message: "Maximum of 10 tags allowed.",
              });
              return;
            }

            const availableTag = availableTags.find((tag) =>
              tag.toLowerCase().includes(newTag.toLowerCase())
            );

            const updatedTags = [...currentTags, availableTag];
            field.onChange(updatedTags.join("/"));
            setInputValue("");
            setSuggestions([]); // Clear suggestions after adding
            setShowSuggestions(false);
            form.clearErrors("tags"); // Clear any previous errors
          } else if (currentTags.includes(newTag) && newTag !== "") {
            form.setError("tags", {
              type: "manual",
              message: "Tag already exists.",
            });
          } else if (newTag === "") {
            form.setError("tags", {
              type: "manual",
              message: "Tag cannot be empty.",
            });
          }
        };

        const removeTag = (tagToRemove: string) => {
          const updatedTags = currentTags.filter(
            (tag: string) => tag !== tagToRemove
          );
          field.onChange(updatedTags.join("/"));
          form.clearErrors("tags"); // Clear errors if tags are removed
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setInputValue(value);
          if (value?.length > 0) {
            const filteredSuggestions = availableTags
              .filter(
                (tag) =>
                  tag.toLowerCase().includes(value.toLowerCase()) &&
                  !currentTags.includes(tag)
              )
              .slice(0, 5); // Limit to 5 suggestions
            setSuggestions(filteredSuggestions);
            setShowSuggestions(filteredSuggestions?.length > 0);
          } else {
            setSuggestions([]);
            setShowSuggestions(false);
          }
          form.clearErrors("tags"); // Clear errors on input change
        };

        const handleInputBlur = () => {
          // Small delay to allow click on suggestion to register
          setTimeout(() => setShowSuggestions(false), 100);
        };

        const handleInputFocus = () => {
          if (inputValue?.length > 0 && suggestions?.length > 0) {
            setShowSuggestions(true);
          }
        };

        return (
          <FormItem>
            <FormLabel>Tags</FormLabel>
            <div className="relative">
              {" "}
              {/* Added relative positioning for suggestions */}
              <div className="flex gap-2">
                <FormControl>
                  <Input
                    placeholder="Enter a tag"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault(); // Prevent form submission
                        addTag(inputValue);
                      }
                    }}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                  />
                </FormControl>
                <Button
                  type="button"
                  onClick={() => addTag(inputValue)}
                  variant="outline"
                  className="px-2 cursor-pointer"
                >
                  <PlusCircle className="h-5 w-5" />
                </Button>
              </div>
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto">
                  {suggestions.map((tag, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onMouseDown={(e) => {
                        // Use onMouseDown to prevent blur event from closing before click
                        e.preventDefault(); // Prevents input from losing focus
                        addTag(tag);
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {currentTags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {currentTags?.map((tag: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-1 rounded-full bg-blue-100 text-sm text-blue-800"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <X className="h-4 w-4 cursor-pointer" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default NovelTagManage;
