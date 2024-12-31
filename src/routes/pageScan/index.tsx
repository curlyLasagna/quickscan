import { component$ } from '@builder.io/qwik';
import Quagga from '@ericblade/quagga2'
import JsBarcode from 'jsbarcode'

export default component$(() => {
    const enableCamera = async () => {
      await Quagga.CameraAccess.request(null, {});
    }

    const disableCamera = async () => {
      await Quagga.CameraAccess.release();
    }
    return (
      <section>
  
      </section>
    )
  });