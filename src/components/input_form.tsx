import { useState } from "react"
import onecardURL from "../assets/onecard.jpg"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription } from "./ui/dialog"
import { Input } from "./ui/input"

interface InputFormProps {
    barcodeVal: string;
    setBarcodeVal: (value: string) => void;
}

export const Input_Form = ({ barcodeVal, setBarcodeVal }: InputFormProps) => {
    const [tempInputVal, setTempInput] = useState<string>(barcodeVal)

    /**
     * Check if user input is equal to what's stored to avoid unnecessary writes to local storage
     * 
     * If user input is different, overwrite barcode value
     */
    const checkStorage = () => {
        if (tempInputVal !== barcodeVal) {
            localStorage.setItem("barcode", tempInputVal)
            setBarcodeVal(tempInputVal)
        }
    }

    return (
        <Card className='w-[300px] md:w-9/12 mt-10'>
            <CardHeader>
                <CardDescription>
                    <p>
                        A faster way to get into the Burdick gym without logging in...

                    </p>
                        <b>Over and over again</b>.
                    <p>
                        Generate a barcode based on your input and store it locally on your device via <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">local storage</a>.
                    </p>

                    <p>It's <a href="https://github.com/curlyLasagna/scanfast">open source</a> if you'd like to contribute.
                    </p>

                    <p></p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <div className='flex flex-col space-y-1.5'>
                            <Input type="number" value={tempInputVal} onChange={(e) => setTempInput(e.target.value)} required/>
                            <Dialog>
                                <DialogTrigger>
                                    Click here if you don't know what to enter
                                </DialogTrigger>
                                <DialogContent className="w-[300px] bg-white">
                                    <DialogTitle>Barcode number</DialogTitle>
                                    <img className="w-full h-full object-contain" src={onecardURL} alt="" />
                                    <DialogDescription>Enter the number above the barcode in your TU OneCard</DialogDescription>
                                </DialogContent>
                            </Dialog>
                            <Button variant="outline" onClick={checkStorage}>Generate Code</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}