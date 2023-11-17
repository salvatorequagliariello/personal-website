'use client'

import CustomNavigator from "../../components/CustomNavigator";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formData = {
        submitted: false,
        errors: [],
    }
    const [formSubmission, setFormSubmission] = useState(formData);

    const formik  = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required(`Please, enter your name.`),
            email: Yup.string().email(`Please, enter a valid email address.`).required(`Please, enter a valid email address.`),
            message: Yup.string().required(`Would you really send an empty message? :c`)
        }),
        onSubmit: (values, onSubmitProps) => {
                emailjs.sendForm("service_uf8c07b", 'template_br8of41', ".contact-form", '1eM3d97JibQ3jXaV0')
                .then(response => {
                    onSubmitProps.setSubmitting(false);
                    onSubmitProps.resetForm();
                    setFormSubmission({...formSubmission, submitted: true});
                })
                .catch(error => {            
                    setFormSubmission({...formSubmission, submitted: false, errors: [error]});
                });
        }
    });

    return (
        <div>
            <CustomNavigator pageName='contact' path='/' pathName='home'/>
            <div className="text-center font-light">
                <h1 className="text-5xl animate-fade-down animate-once animate-delay-900 animate-normal animate-fill-forwards">Let's work together!</h1>
                <p className="text-2xl animate-fade-up animate-once animate-delay-900 animate-normal animate-fill-forwards">(or just say "hi"!)</p>
            </div>
            {!formSubmission.submitted && formSubmission.errors.length == 0 && 
                <form onSubmit={formik.handleSubmit} id="contactForm" className="contact-form flex flex-col gap-7 mt-7">
                    <div className="w-full flex justify-center gap-20">
                        <div className="w-full animate-fade-right animate-once animate-delay-900 animate-normal animate-fill-forwards">
                            <label className={`font-light text-xl ${formik.touched.name && formik.errors.name ? " text-orange-500" : ""}`}>
                                Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Ada Lovelace" 
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full p-3 text-secondary dark:text-primary bg-primary dark:bg-secondary outline-0 ${formik.touched.name && formik.errors.name ? "border-2 border-orange-500" : ""}`}
                            />
                            {formik.touched.name && formik.errors.name && <p className="font-light text-orange-500">{formik.errors.name}</p>}
                        </div>
                        <div className="w-full animate-fade-left animate-once animate-delay-900 animate-normal animate-fill-forwards">
                            <label className={`font-light text-xl ${formik.touched.email && formik.errors.email ? " text-orange-500" : ""}`}>
                                Email
                            </label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="ada@lovelace.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`w-full p-3 text-secondary dark:text-primary bg-primary dark:bg-secondary outline-0 ${formik.touched.email && formik.errors.email ? "border-2 border-orange-500" : ""}`}
                            />
                            {formik.touched.email && formik.errors.email && <p className="font-light text-orange-500">{formik.errors.email}</p>}
                        </div>
                    </div>

                    <div className="w-full animate-fade-up animate-once animate-delay-900 animate-normal animate-fill-forwards">
                        <label className={`font-light text-xl ${formik.touched.message && formik.errors.message ? " text-orange-500" : ""}`}>
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            rows="4" 
                            placeholder="I'd really like to work with you!"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full h-64 p-3 text-secondary dark:text-primary bg-primary dark:bg-secondary outline-0 ${formik.touched.message && formik.errors.message ? "border-2 border-orange-500" : ""}`}
                        />
                        {formik.touched.message && formik.errors.message && <p className="font-light text-orange-500">{formik.errors.message}</p>}
                    </div>

                    <button type="submit" className="form-button w-1/3 py-2 text-xl mx-auto font-light bg-primary dark:bg-secondary text-secondary dark:text-primary hover:bg-accentred">
                        SEND
                    </button>
                </form>
            }
            {formSubmission.submitted && formSubmission.errors.length == 0 && 
                <div className="text-center mt-16 animate-fade animate-once animate-normal animate-fill-forwards">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 mx-auto stroke-secondary dark:stroke-primary bg-primary dark:bg-secondary hov-txt hover:bg-accentred">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <p className="text-3xl">Thank you for getting in touch!</p>
                    <p className="font-light text-xl">I've received your message and will respond within 24 hours.</p>
                </div>
            }
            {!formSubmission.submitted && formSubmission.errors.length >= 1 && 
                <div className="text-center mt-16 animate-fade animate-once animate-normal animate-fill-forwards">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 mx-auto stroke-secondary dark:stroke-primary bg-primary dark:bg-secondary hov-txt hover:bg-accentred">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <p className="text-3xl">Something gone wrong!</p>
                    <p className="font-light text-xl">Please, try again later!</p>
                </div>
            }
        </div>
    )
}

export default Contact;