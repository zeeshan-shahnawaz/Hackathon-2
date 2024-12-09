import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import NewsletterSection from "./NewsLetterFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFullLinkFooter";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col gap-8">
        <NewsletterSection />
        <div className="border-t border-[#FF9F0D] my-6"></div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8 mt-[16px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-8 flex">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
