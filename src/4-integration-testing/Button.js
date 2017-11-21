import { h } from 'preact';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default Button;
