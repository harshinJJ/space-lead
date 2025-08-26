import TextBlock from "@/components/sections/TextBlock";

export default function CookiePolicy() {
  const points = [
    {
      title: "1. What Are Cookies?",
      content:
        "Cookies are small text files stored on your device when you visit a website.",
    },
    {
      title: "2. How We Use Cookies",
      content: [
        "To remember user preferences",
        "To analyze site traffic",
        "To provide personalized content",
      ],
    },
    {
      title: "3. Types of Cookies",
      content: [
        "Essential Cookies – Required for the site to function properly",
        "Analytics Cookies – Help us understand how users interact with the site",
        "Advertising Cookies – Used to deliver relevant ads",
      ],
    },
    {
      title: "4. Managing Cookies",
      content:
        "You can manage or disable cookies in your browser settings, but some parts of the site may not function properly.",
    },
  ];
  return (
    <main>
      <TextBlock
        title="Cookie Policy"
        description={
          "This website uses cookies to improve your browsing experience."
        }
        points={points}
      />
    </main>
  );
}
