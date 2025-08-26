import TextBlock from "@/components/sections/TextBlock";

export default function TermsConditions() {
  const points = [
    {
      title: "1. Use of the Website",
      content:
        "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.",
    },
    {
      title: "2. Intellectual Property",
      content:
        "All content on this website, including text, images, logos, and graphics, is the property of Space Lead unless otherwise stated.",
    },
    {
      title: "3. Limitation of Liability",
      content:
        "We are not responsible for any loss or damage resulting from your use of this website.",
    },
    {
      title: "4. Third-Party Links",
      content:
        "This site may contain links to third-party websites. We are not responsible for their content or policies.",
    },
    {
      title: "5. Changes to Terms",
      content:
        "We reserve the right to update these terms at any time without prior notice.",
    },
  ];
  return (
    <main>
      <TextBlock
        title="Terms and Conditions"
        description={
          "Welcome to Space Lead. By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully."
        }
        points={points}
      />
    </main>
  );
}
