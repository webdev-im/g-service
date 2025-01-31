"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = i18n.language || "en";

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    router.push(`/${lang}${pathname}`); // ✅ Redirect to same page with new locale
  };

  return (
    <Menu>
      <Tooltip label="Select Language">
        <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
          {currentLanguage.toUpperCase()}
        </MenuButton>
      </Tooltip>
      <MenuList>
        {["en", "lt"].map((cur) => (
          <MenuItem key={cur} onClick={() => changeLang(cur)}>
            {cur.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
