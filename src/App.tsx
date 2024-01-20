import { RootState } from "./redux/store";
import Router from "./routes";
import { useSelector } from "react-redux";

function App() {
    const loginState = useSelector((state: RootState) => state.loginState);

    console.log(loginState);

    return (
        <Router/>
    );
}

export default App;
