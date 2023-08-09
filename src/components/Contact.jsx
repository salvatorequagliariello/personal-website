import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import PageNavigator from "./PageNavigator";

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
        <div className="animate__animated animate__fadeIn" onAnimationEnd={e => e.target.classList.remove("animate__animated")}>
            <PageNavigator path={"/"} page={"CONTACT"} />
            <div className="content-container">
                <div className="contact-header">
                    <h3 className="fill-txt p-font-md">Get in</h3>
                    <h1 className="fill-txt h-font-xl">TOUCH.</h1>
                    <p className="fill-txt p-font-sm">{`(or just say "hi"!)`}</p>
                </div>

                {!formSubmission.submitted && formSubmission.errors.length == 0 && 
                <form onSubmit={formik.handleSubmit} className="contact-form" id="contactForm">
                    <div className="contact-form__field">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name " 
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`form-input p-font-md fill-txt  ${formik.touched.name && formik.errors.name ? "form-input__error" : ""}`}
                        />
                        {formik.touched.name && formik.errors.name && <p className="form__error-message p-font-sm">{formik.errors.name}</p>}
                    </div>

                    <div className="contact-form__field">
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`form-input p-font-md fill-txt ${formik.touched.email && formik.errors.email ? "form-input__error" : ""}`}
                        />
                        {formik.touched.email && formik.errors.email && <p className="form__error-message p-font-sm">{formik.errors.email}</p>}
                    </div>

                    <div className="contact-form__field">
                        <textarea 
                        name="message" 
                        rows="4" 
                        placeholder="Message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`form-input text-area p-font-md fill-txt ${formik.touched.message && formik.errors.message ? "form-input__error" : ""}`}
                        />
                        {formik.touched.message && formik.errors.message && <p className="form__error-message p-font-sm">{formik.errors.message}</p>}
                    </div>

                        <button type="submit" className="form-button p-font-md fill-txt interactable-txt">SEND</button>
                </form>
            }
                {formSubmission.submitted && formSubmission.errors.length == 0 && 
                    <div className="submission-message animate__animated animate__fadeIn">
                        <h1 className="p-font-xl fill-txt animate__animated animate__tada animate__delay-1s">{":)"}</h1>
                        <p className="submission-message__title p-font-md fill-txt">Thank you for getting in touch!</p>
                        <p className="p-font-sm fill-txt">I've received your message and will respond within 24 hours.</p>
                    </div>
                }
                {!formSubmission.submitted && formSubmission.errors.length >= 1 && 
                    <div className="submission-message animate__animated animate__fadeIn">
                        <h1 className="p-font-xl fill-txt animate__animated animate__tada animate__delay-1s">{":("}</h1>
                        <p className="submission-message__title p-font-md fill-txt">Something gone wrong!</p>
                        <p className="p-font-md fill-txt">Please, try again later!</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Contact;