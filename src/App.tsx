import { useState } from 'react'
import './App.css'
import onecardURL from './assets/onecard.jpg'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from './components/ui/card'
import { Input } from './components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'

function App() {
    const {showBarcode, setShowBarcode} = useState(true)
    return (
        <>
            <div className='grid h-screen place-items-center'>
                <Card className='w-[500px] my-auto'>
                    <CardHeader>
                        <CardDescription>
                            <p>
                            A faster way to get into the Burdick gym without logging in. 
                            </p>
                            
                            All this website does is generate a barcode based on your input and stores it locally in your device via local storage. It's <a href="">open source</a>. I don't collect data nor do I care.

                            <p>Get ANABOLIC</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div>
                                <div className='flex flex-col space-y-1.5'>
                                    <Input placeholder='Barcode'></Input>
                                    <Popover>
                                        <PopoverTrigger>
                                            Click here if you don't know what to type
                                            <PopoverContent className='w-50 h-20'>
                                                <img src={onecardURL} alt="" /></PopoverContent>
                                        </PopoverTrigger>
                                    </Popover>
                                    <Button>Generate Code</Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default App
