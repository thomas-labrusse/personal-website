import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Home from "../ui/home/Home";

type Params = Promise<{ locale: string }>;

export default function Page(props: { params: Params }) {
  const params = use(props.params);
  setRequestLocale(params.locale);
  return <Home />;
}
