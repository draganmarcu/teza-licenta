import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom";
import StudentPage from "./content/Student.jsx";

const { Content } = Layout;

const contentStyle = {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#fff',
    padding: '0 50px'
};

function MainPage() { return <h1>Main Page</h1>; }
function AboutPage() { return <h1>About Page</h1>; }
function ContactsPage() { return <h1>Contacts Page</h1>; }

export default function ContentComponent() {
    return (
        <Content style={contentStyle}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/student" element={<StudentPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </Content>
    );
}
