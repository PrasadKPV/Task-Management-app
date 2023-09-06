import "@/styles/global.css";
import Provider from "@/components/provider";
import Navbar from "@/components/navbar";

export const metadata = {
  title:"Task Wave",
  description:"Effortlessly organize Everything",
};

const Rootlayout = ({children}) =>(
  <html lang="en">
    <head> <link rel="icon" href="assests/logo.ico" sizes="any" /></head>
    <body>
      <Provider>
        <main className="app">
          <Navbar/>
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default Rootlayout