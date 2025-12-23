import { RegisterPage } from "@pages/RegisterPage";
import { Suspense } from "react";

export default function page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegisterPage/>
        </Suspense>
    );
}