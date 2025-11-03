import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface ConfirmToastProps {
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export const confirmToast = ({
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "bg-red-600 hover:bg-red-700",
  onConfirm,
  onCancel,
}: ConfirmToastProps) => {
  const toastId = toast.custom(
    (t) => (
      <div className="bg-white z-[9999] rounded-lg shadow-xl p-4 w-full max-w-sm">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onCancel?.();
              toast.dismiss(t);
            }}
          >
            {cancelText}
          </Button>
          <Button
            size="sm"
            className={confirmColor}
            onClick={() => {
              onConfirm();
              toast.dismiss(t);
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    ),
    {
      duration: 10000,
      position: "top-center" as const,
    }
  );

  return toastId;
};
