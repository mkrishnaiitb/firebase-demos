import { getAuth } from "./AuthProvider";

function HomePage() {
    const {UserName, UserId} = getAuth();
    return(<div>Home Page {UserName} {UserId} </div>);
}

export default HomePage;