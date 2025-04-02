import './App.css'
import { Flex, Layout } from 'antd';
import HeaderComponent from "./components/Header.jsx";
import ContentComponent from "./components/Content.jsx";
import FooterComponent from "./components/Footer.jsx";

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    height: '98vh',
};

function App() {

  return (
    <>
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
