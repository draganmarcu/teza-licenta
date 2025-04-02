import {
    ApartmentOutlined,
    ContactsOutlined,
    HomeOutlined,
    InfoCircleOutlined
} from "@ant-design/icons";

export const PageTabs = [
    {
        label: 'Acasa',
        key: '/main',
        icon: <HomeOutlined />
    },
    {
        label: 'Despre Universitati',
        key: '/about',
        icon: <InfoCircleOutlined />
    },
    {
        label: 'Pentru studenti',
        key: '/student',
        icon: <ApartmentOutlined />
    },
    {
        label: 'Contacte',
        key: '/contacts',
        icon: <ContactsOutlined />
    },
];
