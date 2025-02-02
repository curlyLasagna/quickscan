import './App.css'
import { Input_Form } from './components/input_form'
import { Barcode } from './components/barcode'
import { useState } from 'react';

function App() {
    const key = "barcode"
    const [barcodeVal, setBarcode] = useState<string>(() => localStorage.getItem(key) || "");
    return (
        <>
            <div className='items-center flex justify-center flex-col'>
                <Input_Form barcodeVal={barcodeVal} setBarcodeVal={setBarcode} />
                 {barcodeVal && barcodeVal.length > 0 && <Barcode barcode={barcodeVal} />}
            </div>
        </>
    )
}

export default App
