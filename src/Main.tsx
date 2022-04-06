import Navbar from './Navbar/Navbar';
import Pages from "./Pages/Pages"
import { useRecoilState } from 'recoil';
import { textState } from './SetupRecoil';

export default function Main() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
    };

    return (
        <div>
            <Navbar></Navbar>
            <Pages></Pages>
            <div>
                <input type="text" value={text} onChange={onChange} />
                <br />
                Echo: {text}
            </div>
        </div>
    )
}