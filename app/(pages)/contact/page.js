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
            <p>Contact</p>
        </div>
    )
}

export default Contact;