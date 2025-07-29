import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TriangleAlert } from "lucide-react";
import React, { useEffect, useState } from "react";

const GrammarIssues = () => {
  const [issues, setIssues] = useState([
    {
      id: 1,
      type: "Spelling",
      tag: "Title",
      found: `"Dragoon's"`,
      suggestion: `"Dragon's"`,
      context: "...Chapter 26: The Dragoon's Adventure",
    },
    {
      id: 2,
      type: "Spelling",
      tag: "Title",
      found: `"Advneture"`,
      suggestion: `"Adventure"`,
      context: "...The Dragoon's Advneture",
    },
  ]);

  const applyFix = (id: number) => {
    console.log("Apply fix for", id);
    // You can add logic to modify `issues` state or call API
  };

  const applyAllFixes = () => {
    console.log("Apply all fixes");
    // You can add logic to apply all fixes
  };

  return (
    <div className="w-full mt-6 mx-auto p-6 bg-white shadow-xs rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-yellow-700 flex items-center gap-2">
          <TriangleAlert className="size-5" /> Vocabulary, Grammar & Spelling Issues
          <span className="ml-2 text-sm bg-yellow-100 text-yellow-700 font-medium px-2 py-0.5 rounded-full">
            {issues.length} Issues Found
          </span>
        </h2>
        <button
          onClick={applyAllFixes}
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md font-medium"
        >
          Fix All Issues
        </button>
      </div>

      <div className="space-y-4 max-h-[50vh] overflow-y-auto">
        {issues.map((issue) => (
          <IssueCard issue={issue} key={issue.id} applyFix={applyFix} />
        ))}
      </div>
    </div>
  );
};

const IssueCard = ({ issue, applyFix }: { issue: any, applyFix: (id: number) => void }) => {
  return (
    <div
      key={issue.id}
      className="border-l-4 border-yellow-300 bg-yellow-50 p-4 rounded-md shadow-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2">
          <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {issue.type}
          </span>
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {issue.tag}
          </span>
        </div>
        <Button
          onClick={() => applyFix(issue.id)}
          className="border border-green-400 bg-white text-green-600 hover:bg-green-50 px-3 py-1 rounded-md"
        >
          Apply Fix
        </Button>
      </div>
      
      <div className="text-sm text-gray-700 flex items-center gap-2 mb-1">
        Found: <span className="line-through text-red-600 px-2 py-1 rounded bg-red-100">{issue.found}</span>{" "}
        <ArrowRightIcon className="size-4" /> Suggestion: <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded">{issue.suggestion}</span>
      </div>  

      <div className="text-xs mt-3 text-gray-600 bg-gray-100 px-3 py-2 rounded-md">
        <span className="block text-gray-500 font-medium mb-1.5">Context:</span>
        <pre className="whitespace-pre-wrap text-sm">{issue.context}</pre>
      </div>
    </div>
  );
};

export default GrammarIssues;
