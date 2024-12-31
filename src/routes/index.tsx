import { component$, useTask$ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";

export default component$(() => {
  const nav = useNavigate();

  // useTask$( async () => {
  //   localStorage.getItem('barcode')
  // })

  return (
    <>
      <section class="flex flex-col justify-between container p-10 mx-auto">
        <h1> Hello! </h1>
        <Button class="flex-wrap" onClick$={() => nav('/pageInput')}>Enter barcode number</Button>
        <Button onClick$={() => nav('/pageScan')}>Scan barcode</Button>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Scan Fast",
  meta: [
    {
      name: "Scan Fast",
      content: "A PWA that allows TU students to check in to the Burdick gym significantly faster that the existing Burdick app",
    },
  ],
};
