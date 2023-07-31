import { Card, Text } from "@nextui-org/react";
import { FC, ReactComponentElement, ReactNode } from "react";


interface Props {
    icon: any;
    title: string;
    class: string;
    content: ReactComponentElement<FC> | ReactNode;
}

const PerkCard: FC<Props> = (props) => {
    return (
        <Card
            variant='flat'
            className={props.class}
            css={{
                padding: '10px',
                backgroundColor: '#2C3D32',
                border: 'none',
                borderRadius: '50px'
            }}
        >
            <Card.Header>
                <div className="mx-auto">
                    {props.icon}
                </div>
            </Card.Header>
            <Card.Header>
                <span className='font-serif font-bold text-[16px] mx-auto text-tan-100'>
                    {props.title}
                </span>
            </Card.Header>
            <Card.Body>
                <span className="font-sans text-center text-[14px] mx-auto text-tan-100">
                    {props.content}
                </span>
            </Card.Body>
        </Card>
    )
};

export default PerkCard;