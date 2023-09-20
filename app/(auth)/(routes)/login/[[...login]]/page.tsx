'use client';

import { SignIn } from "@clerk/nextjs";


const LoginPage = () => {
    return (
        <SignIn
            appearance={{
                elements: {
                    rootBox:
                        "w-[90%] lg:w-[1250px]",
                    card:
                        "w-[90%] md:w-[50%] mx-auto rounded-[25px] p-[50px]",
                    logoBox:
                        "h-fit justify-center",
                    logoImage:
                        "w-[100px] lg:w-[150px]",
                    header:
                        "font-sans text-center",
                    headerTitle:
                        "text-[36px] lg:text-[48px] font-bold",
                    headerSubtitle:
                        "text-[18px] lg:text-[24px]",
                    formFieldLabel:
                        "text-[12px] lg:text-[18px] font-bold font-sans",
                    formFieldInput:
                        "text-[10px] lg:text-[16px] font-sans text-black hover:text-black focus:text-black focus:ring-0",
                    formButtonPrimary:
                        "bg-green-100 font-sans tracking-[2px] hover:bg-green-200 text-[10px] lg:text-[14px] p-5",
                    identityPreviewEditButtonIcon:
                        "text-gold",
                    formFieldAction__password:
                        "text-green-100 font-sans tracking-[2px] hover:text-gold text-[10px] lg:text-[14px]",
                    footer:
                        "hidden"
                }
            }}
            afterSignInUrl={"/dashboard"}
        />
    );
}

export default LoginPage;