import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "React Spring animation" },
    { name: "description", content: "Animations using react spring" },
  ];
};

export default function Index() {
  return <div>Hey there</div>;
}
