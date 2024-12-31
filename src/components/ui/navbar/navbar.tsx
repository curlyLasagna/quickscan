import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
    return (
        <nav class="bg-[#3c3c3c] p-3 border-b-8 border-[#cc9900]">
            <div class="mx-auto flex justify-between items-center">
                <div class="justify-center flex flex-grow">
                    <Link href="/" class="text-white ml-2">Scan Fast</Link>
                </div>
            </div>
        </nav>
    );
})