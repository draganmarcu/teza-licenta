import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom";
import StudentPage from "./content/Student.jsx";
import { Main } from './content/Main.jsx';
import { Contacts } from './content/Contacts.jsx';
import { About } from './content/About.jsx';

const { Content } = Layout;

const contentStyle = {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#fff',
    padding: '60px 50px'
};


export default function ContentComponent() {
    return (
        <Content style={contentStyle}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/student" element={<StudentPage />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Content>
    );
}
