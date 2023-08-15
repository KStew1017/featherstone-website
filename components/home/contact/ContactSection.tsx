'use client';


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


interface ErrorTextProps {
    children: string;
};

const ContactForm = ({ postForm }: any ) => {
    const phoneRegex = /^(\d{3})-(\d{3})-(\d{4})$/;

    const ErrorText = ({ children }: ErrorTextProps) => (
        <div className="text-red-500 text-[14px]">{children}</div>
    );

    return (
        <section id='contact' className="flex bg-light-grey h-[600px]">
            <div className="max-w-[1250px] mx-auto my-auto lg:my-0">
                <h1 className="flex justify-center text-grey font-serif font-bold text-[36px] lg:text-[60px] lg:mt-[50px] mb-[25px]">Interested In Renting?</h1>
                <Formik
                    initialValues={{ name: '', phone: '', usage: '' }}
                    validate={values => {
                        const errors: { [key: string]: string } = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (!values.phone) {
                            errors.phone = 'Required';
                        } else if (!phoneRegex.test(values.phone)) {
                            errors.phone = 'Invalid, please use XXX-XXX-XXXX format';
                        }
                        if (!values.usage) {
                            errors.usage = 'Required';
                        } else if (values.usage.length >= 10) {
                            errors.usage = 'Please limit your response to 10 characters or less';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        {postForm(values)};
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="flex-row lg:flex lg:gap-20 mb-[10px] lg:mb-[50px]">
                                <div className="flex-1 mb-[10px] lg:mb-0">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-grey text-[24px] font-sans">Name</label>
                                        <Field id="name" type="text" name="name" placeholder="First & Last" className="bg-white w-full rounded-3xl text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                        <ErrorMessage name="name" component={ErrorText} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col items-start">
                                        <label htmlFor="phone" className="text-grey text-[24px] font-sans">Phone</label>
                                        <Field id="phone" type="tel" name="phone" placeholder="XXX-XXX-XXXX" className="bg-white w-full rounded-3xl text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                        <ErrorMessage name="phone" className="overflow-hidden" component={ErrorText} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-start mb-[25px]">
                                    <label htmlFor="use" className="text-grey text-[24px] font-sans">What will you use this warehouse space for?</label>
                                    <Field id="usage" as="textarea" name="usage" className="bg-white w-full rounded-3xl max-h-[100px] text-grey p-[10px] focus:border-none focus:outline-none focus:shadow-lg" />
                                    <ErrorMessage name="usage" component={ErrorText}  />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-end ">
                                    <button id="submit" type="submit" disabled={isSubmitting} className="bg-gold h-[50px] w-[180px] text-[24px] rounded-full">
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
};

export default ContactForm;