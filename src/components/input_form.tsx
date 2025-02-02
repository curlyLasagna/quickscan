import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"
import { Input } from "./ui/input"
import onecardURL from '../assets/onecard.jpg'
import { Button } from "./ui/button"
import { useState } from "react"

interface InputFormProps {
    barcodeVal: string;
    setBarcodeVal: (value: string) => void;
}

export const Input_Form = ({barcodeVal, setBarcodeVal}: InputFormProps) => {
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
        <Card className='w-[500px]'>
            <CardHeader>
                <CardDescription>
                    <p>
                        A faster way to get into the Burdick gym without logging in.
                    </p>
                    <p>
                        All this website does is generate a barcode based on your input and stores it locally in your device via <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">local storage</a>.

                    </p>

                    <p>It's <a href="">open source</a> if you'd like to contribute or don't trust me.
                    </p>

                    <p></p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <div className='flex flex-col space-y-1.5'>
                            <Input type="number" value={tempInputVal} onChange={(e) => setTempInput(e.target.value)} />
                            <Popover>
                                <PopoverTrigger>
                                    Click here if you don't know what to enter
                                    <PopoverContent className='w-[400px] p-10'>
                                        <img className="w-full h-full object-contain" src={onecardURL} alt="" />
                                    </PopoverContent>
                                </PopoverTrigger>
                            </Popover>
                            <Button onClick={checkStorage}>Generate Code</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}