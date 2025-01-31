"use client"; // ✅ Ensures this is a Client Component

import { I18nextProvider } from "react-i18next";
import {i18n} from "../../lib/i18n"; // ✅ Ensure this is imported from `lib/i18n.ts`
import LanguageSelect from "../../components/action/LanguageSelect"; // ✅ Include language switcher

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageSelect /> {/* ✅ Now works inside Client Component */}
      {children}
    </I18nextProvider>
  );
};

export default ClientProviders;
