import TextBlock from "@/components/sections/TextBlock";

export default function PrivacyPolicy() {
  const points = [
    {
      title: "1. Information We Collect",
      content: [
        "Personal information you provide (name, email, etc.)",
        "Non-personal data (browser type, IP address, etc.)",
      ],
    },
    {
      title: "2. How We Use Information",
      content: [
        "Provide and improve our services",
        "Communicate with you",
        "Personalize user experience",
      ],
    },
    {
      title: "3. Sharing of Information",
      content: "We do not sell or trade your personal information. We may share data with trusted service providers who help us operate our website."
    },
    {
      title: "4. Data Security",
      content: "We implement reasonable security measures to protect your information.",
    },
    {
      title: "5. Your Rights",
      content: "You may request access, correction, or deletion of your personal data at any time.",
    },
  ];
  return (
    <main>
      <TextBlock
        title="Privacy Policy"
        description={
          "Your privacy is important to us at Space Lead. This Privacy Policy explains how we collect, use, and protect your information."
        }
        points={points}
      />
    </main>
  );
}
