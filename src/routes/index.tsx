import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";
import { isServer } from "@builder.io/qwik";

export default component$(() => {
  const nav = useNavigate();
  const barcode = useSignal('');
  useTask$( async () => {
    if (!isServer) {
      try {
        barcode.value = localStorage.getItem('barcode') || '';
        console.log(`ayo ${ barcode.value }`)
      } catch (e) {
        console.log('Error getting barcode from local storage', e);
      }
    }
  })

  return (
    <>
      <section class="flex flex-col justify-between container p-10 mx-auto">
        <h1> Hello! </h1>
        <Button onClick$={() => nav('/pageInput')}>Enter barcode number</Button>
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
