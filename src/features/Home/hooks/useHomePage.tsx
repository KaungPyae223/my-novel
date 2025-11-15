"use client";
import React, { useRef, useState } from "react";

export const useHomePage = () => {
  const [activeTab, setActiveTab] = useState<"Novels" | "Chapters" | "Posts">(
    "Novels"
  );

  const handleTabChange = (tab: "Novels" | "Chapters" | "Posts") => {
    setActiveTab(tab);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const prevScrollPosition = useRef(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;

     
      if (scrollPosition > prevScrollPosition.current || scrollPosition === 0) {
        setOpen(false);
      } else {
        setOpen(true);
      }

      prevScrollPosition.current = scrollPosition;
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const tabs = [
    { label: "Chapters", value: "Chapters" },
    { label: "Novels", value: "Novels" },
    { label: "Posts", value: "Posts" },
  ];

  const animateVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      display: "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      display: "flex",
    },
  };

  return {
    activeTab,
    handleTabChange,
    containerRef,
    open,
    scrollToTop,
    tabs,
    animateVariants,
  };
};
