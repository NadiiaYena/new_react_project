import Button from "./AI/Buton";
import { useNavigate } from 'react-router-dom';

function Main() {

    const history = useNavigate();

    const handleClickCreate = () => {
        // console.log('Кнопка була натиснута handleClickCreate!');
        history('/create')
      };

    const handleClickLook = () => {
        // console.log('Кнопка була натиснута handleClickLook!');
        history('/note')
    }
    return (
        
            <div className="main-page component" >
                <div className="main-button">
                    <Button label="Create a Note" onClick={handleClickCreate}></Button>
                    <Button label="Look for a Note" onClick={handleClickLook}></Button>
                </div>
                    <p className="text">
                        <b>ShareNotes</b> - сервіс для обміну нотатками. Створіть нотатку, відправте посилання на нотатку і ваш друг зможе її переглянути. Після перегляду нотатка буде видалена (або через 15 хвилин з моменту створення).
                    </p>
                    <p className="text">Как сделать заметку? </p>
                    <ul className="list">
                        <li>Перейти по посиланню</li>
                        <li>Введіть текст і натисніть Create</li>
                        <li>Відправте згенеровану адресу другу!</li>
                    </ul>
                    <p className="text1">Як прочитати замітку? Перейдіть по присланому URL, або введіть хеш (код, що стоїть за останнім слешем у створеному посиланні) руками <a href="/note">тут</a>.</p>
                </div>

       
    );
}

export default Main;