import "./contact.scss";
import { Field, Form, Formik } from "formik"

export const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: ""
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {() => (
                <Form className="form-container">
                    <h4>Let's Work Together</h4>
                    <div className="mt-30">
                        {/* <label htmlFor="name" className="common-label">Name</label> */}
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            className="common-input"
                        />
                    </div>
                    <div className="mt-30">
                        {/* <label htmlFor="email" className="common-label">Email</label> */}
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="common-input"
                        />
                    </div>
                    <div className="mt-30">
                        {/* <label htmlFor="subject" className="common-label">Subject</label> */}
                        <Field
                            as="textarea"
                            id="subject"
                            name="subject"
                            placeholder="How can I help you?"
                            row="6"
                            className="common-input msg-box"
                        />
                    </div>
                    <button className="primary-btn mt-30 w-100" style={{padding:"15px 20px"}}>Send Message</button>
                </Form>
            )}
        </Formik>
    )
}