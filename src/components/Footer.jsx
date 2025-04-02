import { Layout } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, PinterestOutlined } from '@ant-design/icons';

const { Footer } = Layout;

export default function FooterComponent() {
    return (
        <Footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="src/assets/big-logo.png" alt="Educație - Pentru Toți" />
                </div>
                <div className="footer-info">
                    <span>Contacts</span>
                    <p>📞 512.333.2222</p>
                    <p>📧 sampleemail@gmail.com</p>
                </div>
                <div className="footer-social">
                    <span>Social Media</span>
                    <div className="social-icons">
                        <FacebookOutlined/>
                        <TwitterOutlined/>
                        <LinkedinOutlined/>
                        <PinterestOutlined/>
                    </div>
                    <a href="#">TRIMITE RECENZIE →</a>
                </div>
            </div>
            <div className="footer-bottom">
                © 2021 All Rights Reserved
            </div>
        </Footer>
    );
}
