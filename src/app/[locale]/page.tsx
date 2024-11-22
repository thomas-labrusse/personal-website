import { setRequestLocale } from "next-intl/server";
import Home from "../ui/home/Home";

export default async function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <Home />;
}
