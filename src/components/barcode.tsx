import { ReactBarcode } from 'react-jsbarcode';
export const Barcode = ({ barcode }: { barcode: string }) => {
    return (
        <div>
            <ReactBarcode value={barcode}></ReactBarcode>
        </div>
    )
}
