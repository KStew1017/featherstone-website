'use client';

import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Reveal } from '@/components/reveal';
import FormModal from './FormModal';
import { useDisclosure } from '@chakra-ui/react';



interface ErrorTextProps {
    children: string;
};

interface values {
    name: string;
    phone: string;
    message: string;
};

const ContactForm = () => {
    const phoneRegex = /^(?:\d{3}-\d{3}-\d{4}|\d{10})$/;

    const ErrorText = ({ children }: ErrorTextProps) => (
        <div className="text-red-700 text-[14px]">{children}</div>
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    const FORM_SUBMITTED_KEY = 'formSubmitted';
    const LAST_SUBMISSION_TIME_KEY = 'lastSubmissionTime';
    
    const handleSubmit = async (values: values) => {
        const formSubmitted = Number(localStorage.getItem(FORM_SUBMITTED_KEY)) || 0;
        const lastSubmissionTime = Number(localStorage.getItem(LAST_SUBMISSION_TIME_KEY)) || 0;
        const twelveHoursInMs = 12 * 60 * 60 * 1000;
        
        if (formSubmitted >= 2) {
            if (Date.now() - lastSubmissionTime >= twelveHoursInMs) {
                localStorage.setItem(FORM_SUBMITTED_KEY, '1');
                localStorage.setItem(LAST_SUBMISSION_TIME_KEY, Date.now().toString());
            } else {
                setSuccess(false);
                setTimeRemaining(twelveHoursInMs - (Date.now() - lastSubmissionTime));
                return;
            }
        }
        
        try {
            setLoading(true);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();

            alert(JSON.stringify(data));
    
            if (data) {
                localStorage.setItem(FORM_SUBMITTED_KEY, (formSubmitted + 1).toString());
                setLoading(false);
                setSuccess(true);
            } else {
                setSuccess(false);
            };
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
          const lastSubmissionTime = Number(localStorage.getItem(LAST_SUBMISSION_TIME_KEY)) || 0;
          const twelveHoursInMs = 12 * 60 * 60 * 1000;
          const timeRemaining = twelveHoursInMs - (Date.now() - lastSubmissionTime);
          setTimeRemaining(timeRemaining > 0 ? timeRemaining : 0);
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id='contact' className="flex bg-light-grey h-fit relative">
            <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" styling='max-w-[90%] lg:max-w-[1250px] mx-auto my-[50px]' delay={0.2 + Math.random() * 0.4}>
                <h1 className="flex justify-center text-grey font-serif font-bold text-[36px] lg:text-[60px] mb-[25px]">Interested In Renting?</h1>
                <Formik
                    initialValues={{ name: '', phone: '', message: '' }}
                    validate={values => {
                        const errors: { [key: string]: string } = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (!values.phone) {
                            errors.phone = 'Required';
                        } else if (!phoneRegex.test(values.phone)) {
                            errors.phone = 'Invalid phone number';
                        }
                        if (!values.message) {
                            errors.message = 'Required';
                        } else if (values.message.length >= 200) {
                            errors.message = 'Please limit your response to 200 characters or less';
                        }
                        return errors;
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form title='contact form' autoComplete='off' autoCorrect='off'>
                        <div className="flex-row lg:flex lg:gap-20 mb-[10px] lg:mb-[50px]">
                            <div className="flex-1 mb-[10px] lg:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-grey text-[20px] lg:text-[24px] font-sans">Name</label>
                                    <Field id="name" type="text" name="name" className="bg-white w-full rounded-3xl text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                    <ErrorMessage name="name" component={ErrorText} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col items-start">
                                    <label htmlFor="phone" className="text-grey text-[20px] lg:text-[24px] font-sans">Phone</label>
                                    <Field id="phone" type="tel" name="phone" className="bg-white w-full rounded-3xl text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                    <ErrorMessage name="phone" className="overflow-hidden" component={ErrorText} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start mb-[25px]">
                                <label htmlFor="message" className="text-grey text-[20px] lg:text-[24px] font-sans">What will you use this warehouse space for?</label>
                                <Field id="message" as="textarea" name="message" className="bg-white w-full rounded-3xl max-h-[100px] text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                <ErrorMessage name="message" component={ErrorText}  />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-end ">
                                <button id="submit" type="submit" disabled={loading} onClick={onOpen} className="bg-gold/75 shadow-none hover:drop-shadow-lg hover:bg-gold transition ease-s-curve h-[50px] w-[180px] text-[24px] rounded-full">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </Form>
                </Formik>
                <FormModal isOpen={isOpen} onClose={onClose} success={success} loading={loading} timeRemaining={timeRemaining} />
            </Reveal>
        </section>
    )
};

export default ContactForm;
