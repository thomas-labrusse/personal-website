import { setRequestLocale } from "next-intl/server";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return <div>{children}</div>;
}
