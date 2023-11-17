'use client'

import CustomNavigator from "../../components/CustomNavigator";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
    return (
        <div>
            <CustomNavigator pageName='contact' path='/' pathName='home'/>
            <p>Contact</p>
        </div>
    )
}

export default Contact;