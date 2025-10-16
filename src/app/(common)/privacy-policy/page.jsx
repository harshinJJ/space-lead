import TextBlock from "@/components/sections/TextBlock";

export default function PrivacyPolicy() {
  const points = [
    {
      title: "1. Information We Collect",
      description: `We may collect the following types of information when you visit or register on the Space Lead’25 microsite:`,
      content: [
        {
          subTitle: "a. Personal Information",
          subDescription:
            "When you register for the event, contact us, or submit any form, we may collect:",
          subContent: [
            "Full Name",
            "Email Address",
            "Phone Number",
            "Institution/Organization Name",
            "Designation or Role",
            "Any other details you voluntarily provide during registration or correspondence",
          ],
        },
        {
          subTitle: "b. Non-Personal Information",
          subDescription:
            "We may automatically collect certain technical data such as:",
          subContent: [
            "Browser type and version",
            "IP address and device information",
            "Pages visited and time spent on the site",
            "Cookies and similar tracking technologies",
          ],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "Process event registrations and manage participation",
        "Communicate updates, confirmations, and reminders related to Space Lead’25",
        "Provide information about Alfaisal University’s academic and research initiatives (only with consent)",
        "Improve website performance and user experience",
        "Ensure security and prevent unauthorized access",
      ],
    },
    {
      title: "3. Information Sharing and Disclosure",
      description:
        "We do not sell or rent your personal data. Your information may be shared only:",
      content: [
        "With authorized Alfaisal University departments involved in organizing or managing Space Lead’25",
        "With trusted third-party service providers (e.g., event management or registration platforms) assisting in event operations — under strict confidentiality agreements",
        "When required by law, regulation, or legal process",
      ],
    },
    {
      title: "4. Data Retention",
      content:
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable laws. After this period, your data will be securely deleted or anonymized.",
    },
    {
      title: "5. Cookies and Analytics",
      content:
        "Our microsite may use cookies and analytics tools to understand visitor behavior and improve functionality. You can control or disable cookies through your browser settings; however, doing so may affect certain features of the site.",
    },
    {
      title: "6. Data Security",
      content:
        "We implement appropriate administrative, technical, and organizational measures to protect your personal data against unauthorized access, loss, misuse, or alteration.",
    },
    {
      title: "7. Your Rights",
      description: "Depending on applicable laws, you may have the right to:",
      content: [
        "Access, correct, or update your personal data",
        "Request deletion of your data",
      ],
    },
    {
      title: "8. Third-Party Links",
      content:
        "The Space Lead’25 microsite may include links to third-party websites. Alfaisal University is not responsible for the privacy practices or content of those external sites.",
    },
    {
      title: "9. Updates to This Policy",
      content:
        "We may update this Privacy Policy from time to time. The revised version will be posted on this page with the updated effective date.",
    },
    {
      title: "10. Contact Us",
      description: `For any questions, concerns, or requests, please contact: <br/>
      <strong>Alfaisal University</strong><br class="mt-2"/>
      Al Zahrawi Street, Al Maather, Riyadh 11533, Saudi Arabia<br/>
      📧 Email: [Insert Event or University Contact Email]<br/>
      🌐 Website: <a href="https://www.alfaisal.edu/en/" target="_blank">https://www.alfaisal.edu/en/</a>`,
    },
  ];

  return (
    <main>
      <TextBlock
        title="Privacy Policy"
        description={`<span class="font-bold font-droid-bold">Alfaisal University</span> (“we,” “our,” or “us”) is committed to protecting the privacy of all visitors and participants of <span class="font-bold font-droid-bold">Space Lead’25</span>, accessible via <a target="_blank" href="/registration">https://spaceleadconference.alfaisal.edu/registration</a>. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit or interact with our event microsite.`}
        points={points}
      />
    </main>
  );
}
