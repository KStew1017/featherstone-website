import { Card } from "@nextui-org/react";
import { FC, ReactComponentElement, ReactNode } from "react";


interface Props {
    styling?: string;
    header?: ReactComponentElement<FC> | ReactNode ;
    content1?: ReactComponentElement<FC> | ReactNode;
    content2?: ReactComponentElement<FC> | ReactNode;
}

const FooterCard: FC<Props> = ({ header, content1, content2, styling }) => {
    return (
        <Card
            variant='flat'
            className={styling}
            css={{
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '0px',
            }}
        >
            <Card.Header>
                <span className='font-serif font-bold text-[12px] md:text-[24px] lg:text-[32px] mx-auto text-tan-100'>
                    {header}
                </span>
            </Card.Header>
            {content2 && (
                <Card.Body css={{
                    padding: '0px',
                    paddingTop: '20px',
                }}>
                    <span className="font-sans text-center text-[11px] md:text-[16px] lg:text-[18px] mx-auto text-tan-100">
                        {content1}
                    </span>
                </Card.Body>
            )}
            {!content2 && (
                <Card.Body css={{
                    padding: '0px',
                    paddingTop: '20px',
                }}>
                    <span className="font-sans text-[11px] md:text-[16px] lg:text-[18px] text-tan-100">
                        {content1}
                    </span>
                </Card.Body>
            )}
            {content2 && (
                <Card.Body css={{
                    padding: '0px',
                    paddingTop: '20px',
                }}>
                    <span className="font-sans text-center text-[11px] md:text-[16px] lg:text-[18px] mx-auto text-tan-100">
                        {content2}
                    </span>
                </Card.Body>
            )}
        </Card>
    )
};

export default FooterCard;