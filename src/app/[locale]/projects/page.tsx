import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
}
