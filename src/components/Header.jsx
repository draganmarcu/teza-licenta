import { Layout, Menu } from 'antd';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {PageTabs} from "../helpers/PageTabs.jsx";
const { Header } = Layout;

const headerStyle = {
    textAlign: 'start',
    color: 'black',
    height: 80,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
};

export default function HeaderComponent() {
    const [current, setCurrent] = useState('/main');
    const navigate = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key);
    };

    return (
        <Header style={headerStyle}>
            <div className="header-container">
                <img src="src/assets/big-logo.png" alt="Educație - Pentru Toți" />
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={PageTabs} />
            </div>
        </Header>
    );
}
