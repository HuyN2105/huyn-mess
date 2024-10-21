import SelectedChat from "@/app/Sections/SelectedChat/SelectedChat";

// import { WebSocket } from "ws";
//
// const port = 2105;
// const ws = new WebSocket(`ws://localhost:${port}`);
//
// ws.on('open', () => {});
//
// // Incoming message handler
// ws.on('message', (message) => {
//     console.log(message);
// })

function Home(){

    return (
        <div>
            <SelectedChat />
        </div>
    )
};

export default Home;