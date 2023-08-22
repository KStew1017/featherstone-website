'use client';


import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Reveal } from '@/components/reveal';


interface ErrorTextProps {
    children: string;
};

const ContactForm = () => {
    const phoneRegex = /^(?:\d{3}-\d{3}-\d{4}|\d{10})$/;

    const ErrorText = ({ children }: ErrorTextProps) => (
        <div className="text-red-500 text-[14px]">{children}</div>
    );

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleCookie = () => {
        if (document.cookie.includes("formSubmissions=")) {
            const cookieValue: string | undefined = document.cookie
                .split("; ")
                .find((row: string) => row.startsWith("formSubmissions="))
                ?.split("=")[1];
      
            const submissionCount: number = parseInt(cookieValue || "0");
      
            if (submissionCount >= 3) {
                alert("You have reached the maximum number of submissions.");
                return false;
            }

            const newSubmissionCount: number = submissionCount + 1;
        
            document.cookie = `formSubmissions=${newSubmissionCount}`;
        } else {
            document.cookie = "formSubmissions=1";
        }
        return true;
    }

    const handleSubmit = async (values: { name: string, phone: string, message: string }) => {
        if (!handleCookie()) {
            return;
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
            
            if (data) {
                setSuccess(true);
                alert("Thank you for your interest! We will be in touch soon.");
                console.log(success)
            } else {
                setSuccess(false);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id='contact' className="flex bg-light-grey h-fit">
            <Reveal hiddenVariant="hiddenXNeg" visibleVariant="visibleXNeg" styling='max-w-[1250px] mx-auto my-[50px]' delay={0.2 + Math.random() * 0.4}>
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
                                    <label htmlFor="name" className="text-grey text-[24px] font-sans">Name</label>
                                    <Field id="name" type="text" name="name" className="bg-white w-full rounded-3xl text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                    <ErrorMessage name="name" component={ErrorText} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col items-start">
                                    <label htmlFor="phone" className="text-grey text-[24px] font-sans">Phone</label>
                                    <Field id="phone" type="tel" name="phone" className="bg-white w-full rounded-3xl text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                    <ErrorMessage name="phone" className="overflow-hidden" component={ErrorText} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start mb-[25px]">
                                <label htmlFor="message" className="text-grey text-[24px] font-sans">What will you use this warehouse space for?</label>
                                <Field id="message" as="textarea" name="message" className="bg-white w-full rounded-3xl max-h-[100px] text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                <ErrorMessage name="message" component={ErrorText}  />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-end ">
                                <button id="submit" type="submit" disabled={loading} className="bg-gold h-[50px] w-[180px] text-[24px] rounded-full">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </Reveal>
        </section>
    )
};

export default ContactForm;