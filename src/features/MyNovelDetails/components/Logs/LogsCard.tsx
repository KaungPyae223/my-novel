import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, ChevronDown, Plus, Edit, Trash } from "lucide-react";
import Image from "next/image";

interface User {
  id: number;
  full_name: string;
  email: string;
  profile_image: string | null;
}

interface LogEntry {
  id: number;
  logable_type: string;
  logable_id: number;
  user_id: number;
  action: string;
  user: User;
  ip_address: string;
  user_agent: string;
  description: string;
  created_at: string;
  updated_at: string;
  title: string;
}

const parseDescription = (description: string) => {
  try {
    return JSON.parse(description);
  } catch (e) {
    return {};
  }
};

const getActionIcon = (action: string) => {
  switch (action) {
    case "created":
      return <Plus className="size-4" />;
    case "updated":
      return <Edit className="size-4" />;
    case "deleted":
      return <Trash className="size-4" />;
    default:
      return null;
  }
};

const getActionColor = (action: string) => {
  switch (action) {
    case "created":
      return "bg-green-100 text-green-800";
    case "updated":
      return "bg-blue-100 text-blue-800";
    case "deleted":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const LogsCard = ({ log }: { log: LogEntry }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const description = parseDescription(log.description);
  const actionIcon = getActionIcon(log.action);
  const actionColor = getActionColor(log.action);

  return (
    <motion.div
      className="border border-gray-200 rounded-lg overflow-hidden mb-4 hover:shadow-md"
      initial={false}
      animate={{
        backgroundColor: isExpanded ? "#f9fafb" : "#ffffff",
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="p-4 cursor-pointer bg-white"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
        whileTap={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div
              className={`mt-1 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full ${actionColor} text-sm font-medium`}
            >
              {actionIcon}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-medium text-gray-900">
                  {log.action.charAt(0).toUpperCase() + log.action.slice(1)}{" "}
                  {log.logable_type.split("\\").pop()}
                </h3>
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${actionColor} font-medium`}
                >
                  {log.action}
                </span>
              </div>

              {log.title && (
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Title:</span> {log.title}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                <span className="flex items-center">
                  <Image
                    src={
                      log.user.profile_image ||
                      `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
                        log.user.full_name
                      )}`
                    }
                    alt=""
                    className="h-3.5 w-3.5 mr-1 object-cover rounded-full"
                    width={32}
                    height={32}
                  />
                  {log.user.full_name}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {formatDate(log.created_at)}
                </span>
              </div>
            </div>
          </div>

          <motion.div
            className="ml-2 flex-shrink-0"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className="border-t p-5 border-gray-200 bg-gray-50 text-sm overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: {
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3, ease: "easeInOut" },
                },
              },
              collapsed: {
                opacity: 0,
                height: 0,

                transition: {
                  opacity: { duration: 0.1 },
                  height: { duration: 0.2, ease: "easeInOut" },
                },
              },
            }}
          >
            {/* Full Description */}
            <div>
              <h4 className="font-medium text-gray-900 mb-2 text-sm">
                Full Details
              </h4>
              <div className="bg-white p-3 rounded-lg border border-gray-200 text-xs">
                <pre className="whitespace-pre-wrap text-xs text-gray-700 overflow-x-auto">
                  {JSON.stringify(description, null, 2)}
                </pre>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Technical Info */}
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2 text-sm">
                  Technical Info
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex">
                    <span className="text-gray-500 min-w-20">IP</span>
                    <span className="text-gray-700 font-mono">
                      {log.ip_address}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-20">Entity Type</span>
                    <span className="text-gray-700">
                      {log.logable_type.split("\\").pop()}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 min-w-20">User Agent</span>
                    <span className="text-gray-700 font-mono">
                      {log.user_agent}
                    </span>
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2 text-sm">
                  User Info
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                      <Image
                        src={
                          log.user.profile_image ||
                          `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
                            log.user.full_name
                          )}`
                        }
                        alt=""
                        className="h-8 w-8 rounded-full object-cover"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {log.user.full_name}
                      </p>
                      <p className="text-gray-500 text-xs truncate max-w-[180px]">
                        {log.user.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LogsCard;
