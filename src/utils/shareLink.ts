import { toast } from "sonner";

const shareLink = async (text?: string) => {
  const url = text || window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard");
  } catch (err) {
    toast.error("Failed to copy link");
    console.error("Failed to copy link: ", err);
  }
};

export default shareLink;
