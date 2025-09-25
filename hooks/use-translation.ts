"use client"

import { getTranslation } from "@/lib/i18n"
import { useLanguage } from "@/hooks/use-language"

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: string) => getTranslation(key, language)

  return { t, language }
}
