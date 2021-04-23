import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = (props) => {
    const [submittedForm, setSubmittedForm] = useState();
    let [selectDepartment, setSelectDepartment] = useState();
    let [selectProgram, setSelectProgram] = useState();

    // the function of submitting form
    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setSubmittedForm(data);
    };

    // change the department dropdown
    const changeDepartment = (e) => {
        // first, get the dropdown value
        setSelectDepartment(e.target.value);
        // second, set corresponding programs to the program dropdown
        props.data.map(item => {
            if (e.target.value === item.departmentID) {
                setSelectProgram(Object.values(item.programs)[0]);
            }
            return true;
        })
    }

    // change the program dropdown
    const changeProgram = (e) => {
        setSelectProgram(e.target.value);
    };

    let displayDepartment = props.data.map(item => {
        return <option key={item.departmentID}>{item.departmentID}</option>
    });

    let displayProgram = props.data.map(item => {
        if (selectDepartment === item.departmentID) {
            const programList = Object.values(item.programs);
            return programList.map(item =>
                <option key={item.programID}>{item.programID}</option>
            )
        }
        return true;
    });

    return (
        <div className={styles.container}>
            {
                submittedForm ? (
                    // if the form is submitted
                    <div>
                        <div>
                            Dear <span className={styles.displayInformation}>{submittedForm.get("firstName")} {submittedForm.get("lastName")}</span>,
                            your form about the <span className={styles.displayInformation}>{submittedForm.get("program")}</span> program
                            in the <span className={styles.displayInformation}>{submittedForm.get("department")}</span> department is submitted.
                            Our team member will contact you in 3 working days.<br /><br />
                            Please check your information. <br />
                        </div>
                        <div>Your education background is <span className={styles.displayInformation}>{submittedForm.get("educationBackground")}</span></div>
                        <div> Your email is <span className={styles.displayInformation}>{submittedForm.get("email")}</span> <br /> </div>

                        {/* because the telephone nad address are not required, so, only show these when user fills the input */}
                        {submittedForm.get("telephone") ? (<div>Your telephone is <span className={styles.displayInformation}>{submittedForm.get("telephone")}</span><br /> </div>) : null}
                        {submittedForm.get("address") ? (<div>Your address is <span className={styles.displayInformation}>{submittedForm.get("address")}</span><br /> </div>) : null}
                    </div>
                ) : (
                    // if the form is not submitted
                    <>
                        <h2>You are ready to get started. We are ready to help.</h2>
                        <p>We&apos;re here to answer your questions about graduate school. To receive additional information about this program and speak with a member of our team, complete the form below.</p>

                        <form onSubmit={onSubmit} className={styles.formContainer}>

                            {/* the following are inputs */}

                            {/* name */}
                            <h4>Your full name: </h4>
                            {/* first name */}
                            <label className={styles.label} htmlFor="firstName">First Name: </label>
                            <input className={styles.input} type="text" required id="firstName" name="firstName" placeholder="First Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {/* last name */}
                            <label className={styles.label} htmlFor="lastName">Last Name: </label>
                            <input className={styles.input} type="text" required id="lastName" name="lastName" placeholder="Last Name" /> <br />

                            {/* contact information*/}
                            <h4>Your contact information: </h4>
                            {/* email */}
                            <label className={styles.label} htmlFor="email">Email: </label>
                            <input className={styles.input} type="email" required id="email" name="email" placeholder="Email" /> <br />
                            {/* telephone */}
                            <label className={styles.label} htmlFor="telephone">Telephone: </label>
                            <input className={styles.input} type="telephone" id="telephone" name="telephone" placeholder="Telephone" /> <br />
                            {/* address */}
                            <label className={styles.label} htmlFor="address">Address: </label>
                            <input className={styles.input} type="text" required id="address" name="address" placeholder="Address" /> <br />


                            {/* educational background, radio button */}
                            <h4>Your educational background: </h4>
                            {/* <div> */}
                            <label className={styles.label} htmlFor="educationBackground">Your Educational Background: </label>
                            <label htmlFor="undergraduate">Undergraduate</label><input type="radio" name="educationBackground" id="undergraduate" value="Undergraduate" defaultChecked />&nbsp;&nbsp;&nbsp;
                            <label htmlFor="graduate">Graduate</label><input type="radio" name="educationBackground" id="graduate" value="Graduate" />&nbsp;&nbsp;&nbsp;
                            <label htmlFor="phd">PhD</label><input type="radio" name="educationBackground" id="phd" value="PhD" />
                            {/* </div> */}

                            {/* dropdowns: deparatment and program*/}
                            <h4>The program you are interested in: </h4>
                            <label className={styles.label} htmlFor="department">Prefer Department</label>&nbsp;
                            <select className={styles.select} id="department" name="department" value={selectDepartment} onChange={changeDepartment.bind(this)}>
                                <optgroup>
                                    <option value="department" defaultValue>Choose a department</option>
                                    {displayDepartment}
                                </optgroup>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className={styles.label} htmlFor="program">Prefer Program</label>&nbsp;
                            <select className={styles.select} id="program" name="program" value={selectProgram} onChange={changeProgram.bind(this)}>
                                <optgroup>
                                    <option value="program" defaultValue>Choose a program</option>
                                    {displayProgram}
                                </optgroup>
                            </select> <br />

                            {/* form submit button */}
                            <h4><input className={styles.btn} type="submit" value="Get in Touch" /></h4>
                        </form>
                    </>
                )
            }

        </div>
    )

}

export default ContactUs;
