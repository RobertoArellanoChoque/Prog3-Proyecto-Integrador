import React from "react"
import Form from "../form/form";

const Nav = () => {

    return (
        <>
            <nav className="">
                <div className="">              
                    <div className="">
                        <ul className="">
                            <li className="">
                                <a className="">Home</a>
                            </li>
                            <li className="">
                                <a className="">Features</a>
                            </li>
                            <li className="">
                                <a className="">Pricing</a>
                            </li>
                            <li className="">
                                <a className="">Disabled</a>
                            </li>
                            <li>
                            <Form></Form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>

    );



};

export default Nav