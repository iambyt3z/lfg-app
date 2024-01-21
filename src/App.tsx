import Backdrop from "./components/Backdrop";
import { RootState } from "./redux/store";
import Router from "./routes";
import { useSelector } from "react-redux";

function App() {
    const openBackdrop = useSelector((state: RootState) =>
        state
            .applicationContextState
            .openBackdrop
    );

    return (
        <>
            <Router/>
            <Backdrop open={openBackdrop}/> 
        </>
    );
}

export default App;
