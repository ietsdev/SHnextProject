import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => (
    <div>
        <Head>
            <title>Next Proyect</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/pulse/bootstrap.min.css"/>
            <link rel="shortcut icon" href="/public/favicon.ico" />
        </Head>
        <Navigation/>
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Container