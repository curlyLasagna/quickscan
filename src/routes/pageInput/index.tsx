import { component$, useSignal } from "@builder.io/qwik";
import { Input } from "~/components/ui/input/input";
import { Button } from "~/components/ui/button/button";
import { useNavigate } from "@builder.io/qwik-city";
import JsBarcode from "jsbarcode";

export default component$(() => {
  const nav = useNavigate();
  const barcodeVal = useSignal('');
  return (
    <section class="flex flex-col items-center justify-center max-w-md mx-auto my-auto">  
        <Input type="number" placeholder="Bar code number" bind:value={barcodeVal} />
        <Button look="outline" onClick$={() => JsBarcode("#barcode", barcodeVal.value)}>Generate bar code</Button>
      <Button look="outline" onClick$={() => nav('/')}>Back</Button>
      <svg id="barcode"></svg>
    </section>
  )
});
