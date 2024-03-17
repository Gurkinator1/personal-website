import './style.css'
import { useTranslations } from "next-intl";
import Fiber from "@/components/fiber";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main>
      <p>{t('title')}</p>
        <Fiber></Fiber>
    </main>
  );
}
