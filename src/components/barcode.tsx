import JsBarcode from "jsbarcode"

export const Barcode = ({ barcode }: { barcode: string }) => {
    JsBarcode("#svg--barcode", barcode)
  return (
        <div>
            <svg id="svg--barcode"></svg>
        </div>
    )
}
