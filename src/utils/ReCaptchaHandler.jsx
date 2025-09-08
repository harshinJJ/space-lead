"use client";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

async function verifyV3(token, action) {
  const res = await fetch("/api/verify-recaptcha-v3", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, action }),
  });
  return res.json();
}

async function verifyV2(token) {
  const res = await fetch("/api/verify-recaptcha-v2", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  return res.json();
}

export default function ReCaptchaHandler({
  onVerify,
  onError,
  isVerified,
  setIsVerified,
  fallbackScore = 0.5,
  action = "submit", // v3 action name
  ...rest
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showV2, setShowV2] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Try v3 on mount or when asked
  useEffect(() => {
    if (!showV2 && !isVerified && typeof executeRecaptcha === "function") {
      setLoading(true);
      (async () => {
        try {
          const token = await executeRecaptcha(action);
          // const result = await verifyV3(token, action);
          if (token) {
            onVerify?.(token, "v3");
            setIsVerified?.(true);
          } else {
            setShowV2(true);
          }
        } catch (e) {
          console.log("error", e);
          onError?.(e);
          setShowV2(true);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [
    executeRecaptcha,
    showV2,
    isVerified,
    setIsVerified,
    onVerify,
    onError,
    action,
    fallbackScore,
  ]);

  // Handler for v2 token
  const handleV2 = (token) => {
    if (token) {
      onVerify?.(token, "v2");
      setIsVerified?.(true);
    } else {
      setError("reCAPTCHA verification failed. Please try again.");
      setTimeout(() => setError(""), 5000); // hide after 5 sec
    }
  };

  if (isVerified && !showV2) return;

  return (
    <div {...rest}>
      {showV2 ? (
        <>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V2}
            onChange={handleV2}
          />
          {error && <div className="mt-2 text-red-600 text-xs block">{error}</div>}
        </>
      ) : loading ? (
        <div>Verifying reCAPTCHA...</div>
      ) : null}
    </div>
  );
}
