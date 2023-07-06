import React from 'react';
import formStyle from './form.css';

export default class Form extends React.Component {
    render() {
        return (
            <section>
                <h3>Login</h3>
                <form>
                    <label for= 'username'>Username:</label>
                    <input type='text' id='username' name='user_username' />

                    <label for= 'password'>Password:</label>
                    <input type='password' id='password' name='user_password' />
                    <button type='submit'>Submit</button>
                </form>
            </section>
        );
    }
}