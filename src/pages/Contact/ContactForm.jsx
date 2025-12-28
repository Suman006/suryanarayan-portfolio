import "./contact.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

export const ContactForm = () => {
    const contactSchema = Yup.object({
        name: Yup.string()
            .min(2, "Name is too short")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        message: Yup.string()
            .min(10, "Message should be at least 10 characters")
            .required("Message is required")
    })

    const handleSubmit = (values, { resetForm, setSubmitting }) => {
        emailjs
            .send(
                "service_eeurond",
                "template_i6oaaa4",
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                },
                "T9VxM6i-D520x_uBE"
            )
            .then(() => {
                alert("Message sent successfully!");
                resetForm();
                setSubmitting(false);
            },
                (error) => {
                    console.error(error);
                    alert("Something went wrong!");
                    setSubmitting(false);
                }
            );
    };
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                message: ""
            }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form className="form-container">
                    <h4>Let's Work Together</h4>
                    <div className="mt-30">
                        {/* <label htmlFor="name" className="common-label">Name</label> */}
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            className={`common-input ${errors.name && touched.name ? "input-error" : ""}`}
                        />
                        <ErrorMessage name="name" className="form-error" component="span" />
                    </div>
                    <div className="mt-30">
                        {/* <label htmlFor="email" className="common-label">Email</label> */}
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className={`common-input ${errors.email && touched.email ? "input-error" : ""}`}
                        />
                        <ErrorMessage name="email" className="form-error" component="span" />
                    </div>
                    <div className="mt-30">
                        {/* <label htmlFor="subject" className="common-label">Subject</label> */}
                        <Field
                            as="textarea"
                            id="message"
                            name="message"
                            placeholder="How can I help you?"
                            row="6"
                            className={`common-input msg-box ${errors.message && touched.message ? "input-error" : ""}`}
                        />
                        <ErrorMessage name="message" className="form-error" component="span" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="primary-btn mt-30 w-100" style={{ padding: "15px 20px" }}>{isSubmitting ? "Sending..." : "Send Message"}</button>
                </Form>
            )}
        </Formik>
    )
}