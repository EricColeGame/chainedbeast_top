import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Chained Beasts, its logo, game artwork, trailer footage, and related media are the property of Featherweight Games and their respective rights holders.</p>
      <p>Steam and the Steam logo are trademarks of Valve Corporation. Other names and marks belong to their respective owners.</p>
      <p>Chained Beasts Wiki is a non-official fan resource. Original site text and layout are provided for informational and guide presentation purposes only.</p>
      <p>If you own rights to material displayed here and have a concern, contact <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
