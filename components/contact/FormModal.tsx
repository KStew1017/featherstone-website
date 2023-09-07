import { FC } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Spinner
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';


interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    success: boolean;
    loading: boolean;
    timeRemaining: number;
};

const FormModal: FC<FormModalProps> = ({ isOpen, onClose, success, loading, timeRemaining }) => {
    const formatTime = (time: number) => {
        const date = new Date(time);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const modalHeaderContent = success ? (
        <ModalHeader>Success!</ModalHeader>
    ) : (
        <ModalHeader>Uh Oh!</ModalHeader>
    );

    const modalBodyContent = success ? (
        <ModalBody>
            <p>Thank you for reaching out to us, we will be in touch shortly.</p>
        </ModalBody>
    ) : (
        <ModalBody>
                <p>It looks like there was an error or you've submitted too many times. Please try again in {formatTime(timeRemaining)}!</p>
        </ModalBody>
    );

    if (loading) {
        return (
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 p-[20px] rounded-xl shadow-xl'>
                <Spinner size={'xl'} thickness={'4px'} color={'gold'} className='' />
            </div>
        )
    } else {
        return (
            <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered variant='customVariant' blockScrollOnMount={false}>
                <ModalOverlay />
                <ModalContent >
                    {modalHeaderContent}
                    <ModalCloseButton />
                    {modalBodyContent}
                    <ModalFooter>
                        <Button onClick={onClose} className='bg-tan-100 hover:bg-gold text-green-100 font-serif transition ease-s-curve'>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        )
    }

};

export default FormModal;