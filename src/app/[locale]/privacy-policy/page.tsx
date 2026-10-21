import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>{siteConfig.name} is an independent fan wiki for Chained Beasts. We provide informational game guides and do not request Steam credentials, account passwords, or private payment information.</p>
      <p>Hosting, analytics, and advertising providers may process standard technical information such as device type, browser, approximate region, referring pages, and pages visited on this site.</p>
      <p>External links may lead to Steam, Discord, YouTube, X, or other third-party services. Those services are governed by their own privacy policies and terms.</p>
      <p>Questions about this policy can be sent to <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
