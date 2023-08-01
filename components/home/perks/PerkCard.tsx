import { Card } from "@nextui-org/react";
import { FC, ReactComponentElement, ReactNode } from "react";


interface Props {
    icon: any;
    title: string | ReactNode | ReactComponentElement<FC>;
    styling: string;
    content: ReactComponentElement<FC> | ReactNode;
}

const PerkCard: FC<Props> = ({ styling, icon, title, content }) => {
    return (
        <Card
            variant='flat'
            className={styling}
            css={{
                padding: '10px',
                backgroundColor: '#2C3D32',
                border: 'none',
                borderRadius: '50px'
            }}
        >
            <Card.Header>
                <div className="mx-auto">
                    {icon}
                </div>
            </Card.Header>
            <Card.Header>
                <span className='font-serif font-bold text-[20px] mx-auto text-tan-100'>
                    {title}
                </span>
            </Card.Header>
            <Card.Divider className="" />
            <Card.Body>
                <span className="font-sans text-center text-[18px] mx-auto text-tan-100">
                    {content}
                </span>
            </Card.Body>
        </Card>
    )
};

export default PerkCard;