import TextBlock from "@/components/sections/TextBlock";

export default function TermsConditions() {
  const points = [
    {
      title: "1. Event Ownership and Purpose",
      content: [
        "Space Lead’25 is a medical and academic conference organized by Alfaisal University to promote research, innovation, and knowledge exchange in space medicine, health technology, and related disciplines.",
        "The microsite serves as an informational and registration platform for participants, speakers, sponsors, and visitors.",
      ],
    },
    {
      title: "2. Eligibility",
      description: "By using this site, you confirm that you:",
      content: [
        "Are authorized to represent your institution or organization (if applicable)",
        "Provide accurate and truthful information during registration or inquiry",
      ],
    },
    {
      title: "3. Registration and Participation",
      content: [
        "Registration on the Space Lead’25 microsite may require providing personal and institutional details.",
        "You agree that the information provided is accurate, current, and complete.",
        "Alfaisal University reserves the right to approve, modify, or decline participation at its discretion.",
        "Event participation may be subject to additional rules or codes of conduct communicated separately.",
      ],
    },
    {
      title: "4. Intellectual Property",
      content:
        "All content on this microsite, including logos, text, images, design elements, and multimedia, is the intellectual property of Alfaisal University or its authorized partners. You may not reproduce, distribute, or modify any content without prior written permission.",
    },
    {
      title: "5. Data Protection",
      content:
        "Your privacy is important to us. All personal data collected through this site is processed in accordance with our Privacy Policy and applicable data protection laws (GDPR & PDPL).",
    },
    {
      title: "6. Third-Party Services",
      content: [
        "The microsite may integrate third-party tools or links.",
        "We are not responsible for the content, security, or data practices of third-party platforms.",
      ],
    },
    {
      title: "7. Code of Conduct",
      content: [
        "By participating in Space Lead’25 (online or in person), you agree to uphold a respectful, inclusive, and professional environment.",
        "Harassment, discrimination, or inappropriate conduct will not be tolerated and may result in removal from the event without refund or access privileges.",
      ],
    },
    {
      title: "8. Limitation of Liability",
      description:
        "While we strive to provide accurate and updated information, Alfaisal University shall not be liable for:",
      content: [
        "Any technical issues, downtime, or data loss",
        "Errors or inaccuracies in event content or materials",
        "Any indirect or consequential damages arising from use of this microsite or participation in the event",
      ],
    },
    {
      title: "9. Changes and Updates",
      content:
        "Alfaisal University reserves the right to modify or update these Terms at any time. Updates will be posted on this page with the effective date. Continued use of the site implies acceptance of the revised Terms.",
    },
    {
      title: "10. Governing Law",
      content:
        "These Terms are governed by the laws of the Kingdom of Saudi Arabia, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Riyadh, Saudi Arabia.",
    },
    {
      title: "11. Contact Information",
      description: `For inquiries, please contact:<br/>
      <strong>Alfaisal University</strong><br/>
      Al Zahrawi Street, Al Maather, Riyadh 11533, Saudi Arabia<br/>
      📧 Email: [Insert Official Contact Email]<br/>
      🌐 <a href="https://www.alfaisal.edu/en/" target="_blank">https://www.alfaisal.edu/en/</a>`,
    },
  ];
  return (
    <main>
      <TextBlock
        title="Terms & Conditions"
        description={`Welcome to <strong>Space Lead’25</strong>, an official event microsite of Alfaisal University (“we,” “our,” or “us”), accessible at <a href="https://spaceleadconference.alfaisal.edu" target="_blank">https://spaceleadconference.alfaisal.edu</a>. 
    By accessing or using this microsite, you agree to comply with and be bound by these Terms & Conditions. 
    If you do not agree with any part of these terms, please do not use this website.`}
        points={points}
      />
    </main>
  );
}
