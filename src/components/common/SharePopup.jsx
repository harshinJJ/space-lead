"use client";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ShareIcon,
  TwitterIcon,
} from "@/data/icons";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const SharePopup = ({
  isOpen,
  onClose,
  websiteSlug,
  reff,
  position,
  additionalStyles = {},
}) => {
  const [copied, setCopied] = useState(false);
  const [instaCopied, setInstaCopied] = useState(false);
  const shareref = useRef();

  const getShareUrls = () => {
    const currentUrl = websiteSlug
      ? `${window?.location?.origin}/${websiteSlug}`
      : window?.location.href;
    const encodedUrl = encodeURIComponent(currentUrl);
    const subject = encodeURIComponent("Check this out");
    const body = encodeURIComponent(`Check out this link: ${currentUrl}`);

    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
      email: `mailto:?subject=Check this out&body=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`,
      whatsapp: `https://wa.me/?text=${encodedUrl}`,
    };
  };

  const shareUrls = getShareUrls();

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(
        websiteSlug
          ? `${window.location.origin}/${websiteSlug}`
          : window.location.href
      )
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };
  const handleInstagramShare = async () => {
    const shareUrl = websiteSlug
      ? `${window.location.origin}/${websiteSlug}`
      : window.location.href;

    // Check if Web Share API is supported (mostly mobile browsers)
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          url: shareUrl,
        });
        return; // Success — no need to copy
      } catch (err) {
        if (err.name === "AbortError") {
          return; // User canceled — do nothing
        }
        // If share fails (e.g., desktop), fall back to copy
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setInstaCopied(true);
      setTimeout(() => {
        setInstaCopied(false);
        const instaWindow = window.open("https://www.instagram.com/", "_blank");

        // Optional: refocus if popup blocked
        if (
          !instaWindow ||
          instaWindow.closed ||
          instaWindow.closed === undefined
        ) {
          // Popup likely blocked — show message
          setTimeout(() => {
            setInstaCopied(false);
            toast.error(
              "Popup blocked. Please allow popups or open Instagram manually."
            );
          }, 2000);
          return;
        }
      }, 2000); // Reset after 3s
    } catch (err) {
      console.error("Failed to copy link:", err);
      // Optionally show an error tooltip
    }
  };

  const handleClickOutside = (event) => {
    if (
      shareref.current &&
      !shareref.current.contains(event.target) &&
      reff?.current &&
      !reff.current.contains(event.target)
    ) {
      onClose && onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [shareref, reff]);

  if (!isOpen) return null;

  return (
    <div
      ref={shareref}
      className={`absolute flex justify-center items-center z-50 right-3 `}
      style={{
        ...(position === "top" ? { top: "40px" } : { bottom: "0px" }),
        ...additionalStyles,
      }}
    >
      <div className="absolute min-w-[200px] bg-white rounded-lg p-2.5 shadow-lg right-2 bottom-[calc(100%+50px)]">
        <ul className="flex flex-wrap gap-1.5 justify-start">
          {[
            {
              label: copied ? "Link Copied!" : "Copy Link",
              icon: <ShareIcon size={20} />,
              onClick: handleCopyLink,
            },
            {
              label: instaCopied
                ? "Navigating to instagram"
                : "Instagram",
              icon: <InstagramIcon size={20} />,
              onClick: handleInstagramShare,
            },
            {
              label: "LinkedIn",
              icon: <LinkedInIcon size={20} />,
              href: shareUrls.linkedin,
            },
            // { label: "Whatsapp", icon: "icon-whatsapp", href: shareUrls.whatsapp },
            {
              label: "Twitter",
              icon: <TwitterIcon size={20} />,
              href: shareUrls.twitter,
            },
            {
              label: "Facebook",
              icon: <FacebookIcon size={20} />,
              href: shareUrls.facebook,
            },
            // { label: "Gmail", icon: "icon-mail", href: shareUrls.gmail },
            {
              label: "Email",
              icon: <EmailIcon size={20} />,
              href: shareUrls.email,
            },
          ].map((item, idx) => (
            <li key={idx} className="w-full flex flex-col items-center gap-2">
              <a
                href={item.href ?? "#"}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                className="flex flex-row-reverse items-center justify-end gap-3 w-full text-[#100A44] hover:text-secondary transition-colors"
              >
                {item.label}
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-[#100A44] transition-colors hover:bg-[#100A44] hover:text-white">
                  <span>{item.icon}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// export default SharePopup;
export default dynamic(() => Promise.resolve(SharePopup), { ssr: false });
