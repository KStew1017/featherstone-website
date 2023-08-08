'use client';

import tailwindCustomColors from '@/app/utils/tailwindConfigColors';
import { Card, Text } from '@nextui-org/react';
import { FC, ReactComponentElement, ReactNode } from "react";


interface Props {
    title: string;
    content: ReactComponentElement<FC> | ReactNode;
}

const InfoCard: FC<Props> = (props) => {
    return (
        <Card
            variant='flat'
            css={{
                padding: '30px',
                backgroundColor: '#DBDBD5',
                backgroundImage: 'url(/feather-logo-green.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                border: 'none',
                borderRadius: '50px'
            }}
        >
            <Card.Header css={{ padding: '0px 0px 10px 0px' }}>
                <Text color={tailwindCustomColors.grey} className='font-serif font-bold text-[36px]' >
                    {props.title}
                </Text>
            </Card.Header>
            <Card.Body css={{ padding: '0px' }}>
                {props.content}
            </Card.Body>
        </Card>
    );
}

export default InfoCard;