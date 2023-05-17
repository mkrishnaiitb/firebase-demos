import { useAuth } from "./AuthProvider";

function HomePage() {
    const {currentUser, signInTheUser, signOutTheUser} = useAuth();
    return(
        <div>
            <div>Home Page {currentUser && currentUser.displayName} </div>
            
            <button onClick={signInTheUser}>SignIn</button>
            <button onClick={signOutTheUser}>SignOut</button>
        </div>
    );
}

export default HomePage;