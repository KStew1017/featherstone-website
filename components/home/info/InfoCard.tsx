'use client';

import { Card, Text } from '@nextui-org/react';
import { FC, ReactNode } from "react";


interface Props {
    title: string;
    content: ReactNode;
}

const InfoCard: FC<Props> = (props) => {
    return (
        <Card
            variant='flat'
            css={{
                padding: '30px',
                backgroundColor: '#DBDBD5',
                border: 'none',
                borderRadius: '50px'
            }}
            className='after:bg-grey'
        >
            <Card.Header className='bg-tan-200' css={{ padding: '0px 0px 10px 0px' }}>
                <Text color='#455353' className='font-serif font-bold text-[36px]' >
                    {props.title}
                </Text>
            </Card.Header>
            <Card.Body className='bg-tan-200' css={{ padding: '0px' }}>
                {props.content}
            </Card.Body>
        </Card>
    );
}

export default InfoCard;
