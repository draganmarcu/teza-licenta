import './App.css'
import { Flex, Layout } from 'antd';
import HeaderComponent from "./components/Header.jsx";
import ContentComponent from "./components/Content.jsx";
import FooterComponent from "./components/Footer.jsx";
import ChatBot from "react-chatbotify";

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    height: '98vh',
};

function App() {
    const flow={
        start: {
            message: "Salut care este numele tău?",
            path: "ask_something"
        },
        ask_something: {
            message: (params) => `Îmi place să te cunosc ${params.userInput}, cu ce te pot ajuta?`,
            path: "ask_choice"
        },
        ask_choice: {
            message: "Selectează temele de discuție",
            checkboxes: {
                items: [
                    "Ce locuri pot vizita în Chișinau?",
                    "Unde pot lucra cu PC?",
                    "Unde pot bea o cafea bună în oraș?"
                ], max: 1},
            chatDisabled: true,
            path: "ask_work_days"
        },
        ask_work_days: {
            message: (params) => {
                const choice = params.userInput;
                switch (choice) {
                    case "Ce locuri pot vizita în Chișinau?":
                        return "https://travelspot.ro/locuri-de-vizitat-in-chisinau/#google_vignette";
                    case "Unde pot lucra cu PC?":
                        return "https://tucanobeans.com/";
                    case "Unde pot bea o cafea bună în oraș?":
                        return "---";
                    default:
                        return "Nu am răspuns la această întrebare";
                }
            },
            path: "end"
        },
    }

  return (
    <>
        <ChatBot flow={flow} />
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <HeaderComponent></HeaderComponent>
                <ContentComponent></ContentComponent>
                <FooterComponent></FooterComponent>
            </Layout>
        </Flex>
    </>
  )
}

export default App
