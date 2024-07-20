import {} from "@react-spring/web";

export function loader() {
  return null;
}

export default function Page() {
  return (
    <div>
      <div className="h-[720px] grid place-items-center">
        <StackingAnimation />
      </div>
    </div>
  );
}

function StackingAnimation() {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}
