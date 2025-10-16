import TextBlock from "@/components/sections/TextBlock";

export default function CookiePolicy() {
  const points = [
    {
      title: "1. Introduction",
      content: [
        `The Space Lead’25 microsite <a href="https://spaceleadconference.alfaisal.edu" target="_blank">https://spaceleadconference.alfaisal.edu</a> uses cookies and similar technologies to enhance your browsing experience, improve website functionality, and analyze traffic.`,
        "This Cookies Policy explains what cookies are, how we use them, and how you can manage your preferences.",
      ],
    },
    {
      title: "2. What Are Cookies?",
      content:
        "Cookies are small text files stored on your device when you visit a website. They help websites recognize your device and remember information about your visit, such as preferences and login details.",
    },
    {
      title: "3. Types of Cookies We Use",
      content: [
        {
          subTitle: "Strictly Necessary Cookies",
          subDescription:
            "Essential for website functionality (e.g., secure login, registration form processing). These cookies cannot be disabled.",
        },
        {
          subTitle: "Performance & Analytics Cookies",
          subDescription:
            "Collect anonymous data on site usage to improve content and design (e.g., Google Analytics).",
        },
        {
          subTitle: "Functional Cookies",
          subDescription:
            "Store user preferences such as language and session settings.",
        },
        {
          subTitle: "Third-Party Cookies",
          subDescription:
            "May be set by embedded content or third-party services.",
        },
      ],
    },
    {
      title: "4. Legal Basis for Use",
      description: "Under GDPR, we use cookies based on:",
      content: [
        "Consent: For analytics and third-party cookies.",
        "Legitimate interest: For necessary and security-related cookies essential to site functionality.",
      ],
    },
    {
      title: "5. Managing Cookies",
      content: [
        "You can manage or disable cookies anytime by adjusting your browser settings.",
        "Most browsers allow you to:",
        {
          subContent: [
            "View which cookies are stored",
            "Delete existing cookies",
            "Block new cookies or receive alerts before storing them",
          ],
        },
      ],
      description:
        "Note: Disabling certain cookies may affect website functionality or your ability to register for the event.",
    },
    {
      title: "6. Third-Party Analytics",
      content: [
        "We may use Google Analytics or similar services for aggregated, anonymized site usage statistics.",
        "These services may process data in accordance with their own privacy policies.",
      ],
    },
    {
      title: "7. Updates to This Policy",
      content:
        "We may periodically update this Cookies Policy to reflect technical or legal changes. Updates will be posted on this page with the revision date.",
    },
    {
      title: "8. Contact Information",
      description: `If you have any questions about our use of cookies, please contact:<br/>
      <strong>Alfaisal University – Data Protection Office</strong><br/>
      Al Zahrawi Street, Al Maather, Riyadh 11533, Saudi Arabia<br/>
      📧 Email: [Insert Privacy or IT Contact Email]<br/>
      🌐 <a href="https://www.alfaisal.edu/en/" target="_blank">https://www.alfaisal.edu/en/</a>`,
    },
  ];
  return (
    <main>
      <TextBlock
        title="Cookie Policy"
        description={`The Space Lead’25 microsite <a href="https://spaceleadconference.alfaisal.edu" target="_blank">https://spaceleadconference.alfaisal.edu</a> uses cookies and similar technologies to enhance your experience and improve site functionality. Please read below for details on our use of cookies and how you can manage them.`}
        points={points}
      />
    </main>
  );
}
