import './App.css'
import { Input_Form } from './components/input_form'
import { Barcode } from './components/barcode'
import { useState } from 'react';

function App() {
    const key = "barcode"
    const [barcodeVal, setBarcode] = useState<string>(() => localStorage.getItem(key) || "");
    return (
        <>
            <div className='grid h-screen w-50 place-items-center'>
                <Input_Form barcodeVal={barcodeVal} setBarcodeVal={setBarcode} />
                <Barcode barcode={barcodeVal} />
            </div>
        </>
    )
}

export default App
