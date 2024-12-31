import { component$ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";

export default component$(() => {
  const nav = useNavigate();
  return (
    <>
      <h1>Check in at Burdick</h1>
      <Button onClick$={() => nav('/pageInput')}>Enter barcode number manually</Button>
      <Button onClick$={() => nav('/pageScan')}>Scan barcode</Button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Scan Fast",
  meta: [
    {
      name: "Scan Fast",
      content: "A PWA that allows TU students to check in to the Burdick gym significantly faster that the Burdick app",
    },
  ],
};
