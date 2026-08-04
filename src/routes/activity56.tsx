import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/activity56")({
  component: Activity56,
});

function Activity56() {
  return (
    <iframe
      src="/activity56.html"
      title="Activity 56"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}