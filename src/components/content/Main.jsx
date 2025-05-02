import students from "../../assets/images/students.png";
import moldovaHuman from "../../assets/images/moldova_human.jpg";
import moldova from "../../assets/images/moldova.png";
import river from "../../assets/images/river.png";
import triumphArc from "../../assets/images/triumphArc.png";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import contact from "../../assets/images/contact.png";
import {Button, Form, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";


export function Main() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <span className="moldova-text">Moldova</span>
                <div className="flex">
                    <img className="students-img m-r-sm" src={students} alt="students" />
                    <img className="human-img" src={moldovaHuman} alt="students" />
                </div>
            </div>
            <div className="flex m-t-xl about-moldova-container w-full">
                <div className="flex flex-col m-r-lg">
                    <img src={triumphArc} alt="triumphArc" />
                    <img src={river} alt="river" />
                </div>
                <img className="moldova-img m-r-lg" src={moldova} alt="moldova" />
                <div className="flex flex-col">
                    <span className="moldova-text">Moldova</span>
                    <span className="text-small">
                        este un stat situat în sud-estul Europei.
                        Se învecinează cu România la vest și cu Ucraina la nord, est și sud. Republica Moldova este un stat fără ieșire directă la mare, însă are ieșire la Dunăre pe o fâșie de 430 de metri[14] la extremitatea sa sudică,[15] prin intermediul căreia are acces potențial și la Marea Neagră. În procesul dezmembrării Uniunii Sovietice, Republica Moldova și-a declarat independența la 27 august 1991.
                    </span>
                </div>
            </div>
            <div className="flex m-t-xl justify-between w-full p-x-xl">
                <div className="flex m-r-xxl w-1/2 items-center">
                    <img className="m-r-xl" src={one} alt="one" />
                    <span className="text-small">
                        Moldova se remarcă printr-un sistem educațional bine dezvoltat, cu instituții de învățământ recunoscute pentru calitatea pregătirii academice și profesionale.
                    </span>
                </div>
                <div className="flex w-1/2 items-center">
                    <img className="m-r-xl" src={two} alt="two" />
                    <span className="text-small">
                        Acest site te ajuta sa afli toate detaliile despre invatamantul superior din Republica Moldova
                    </span>
                </div>
            </div>
            <div className="flex flex-col m-t-xl p-x-xl">
                <span className="moldova-text">Contacte</span>
                <div className="flex justify-between w-full">
                    <div className="flex m-r-xxl w-1/2">
                        <Form
                            className="w-full"
                            labelCol={{ span: 3 }}
                            wrapperCol={{ span: 20 }}
                        >
                            <Form.Item>
                                <Input placeholder="Name" />
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="E-mail" />
                            </Form.Item>
                            <Form.Item>
                                <Input.TextArea placeholder="Text" />
                            </Form.Item>
                            <Button type="default" variant="solid" icon={<SendOutlined />}>
                                TRIMITE EMAIL
                            </Button>
                        </Form>
                    </div>
                    <div className="flex w-1/2">
                        <img src={contact} alt="two" />
                    </div>
                </div>
            </div>
        </div>
    );
}