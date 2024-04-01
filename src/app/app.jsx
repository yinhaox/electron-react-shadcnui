import {Dashboard} from "@/app/view/dashboard.jsx";
import {TooltipProvider} from "@radix-ui/react-tooltip";

function App() {

    return (
        <>
            <TooltipProvider>
                <Dashboard></Dashboard>
            </TooltipProvider>
        </>
    )
}

export default App
