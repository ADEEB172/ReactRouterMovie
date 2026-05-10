import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";


const AppLayout = () => {
    const navigation = useNavigation(); // This hook can be used to access the navigation state, but it's not being utilized in this component.
    console.log(navigation);

    if(navigation.state === "loading") return <Loading /> // This condition checks if the navigation state is "loading", but it doesn't return or render anything. It should be modified to return the loading message.
    
  return (
    <>
      <Header />
      <Outlet />{" "}
      {/* Outlet is used to render the child components based on the route */}
      <Footer />
    </>
  );
};

export default AppLayout;
