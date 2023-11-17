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
                <h1 className="text-5xl">Let's work together!</h1>
                <p className="text-2xl">(or just say "hi"!)</p>
            </div>
            {!formSubmission.submitted && formSubmission.errors.length == 0 && 
                <form onSubmit={formik.handleSubmit} id="contactForm"  className="flex flex-col gap-7 mt-7">
                    <div className="w-full flex justify-center gap-20">
                        <div className="w-full">
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
                        <div className="w-full">
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

                    <div className="w-full">
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

                        <button type="submit" className="form-button p-font-md fill-txt hoverable">SEND</button>
                </form>
            }
        </div>
    )
}

export default Contact;