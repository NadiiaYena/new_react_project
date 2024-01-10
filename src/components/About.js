
function About() {
    return (
        <div className="about component">
            
            <h1>Про Нас</h1>
            <div className="about-block">
                <h2>Що ми робимо?</h2>
                <p>Наш веб-сайт пропонує унікальний сервіс шифрування повідомлень. Ми дозволяємо користувачам шифрувати конфіденційну інформацію та генерувати унікальні посилання для безпечної передачі цих повідомлень іншим користувачам.</p>

            </div>
            <div className="about-block">
                <h2>Як це працює?</h2>
                <p>Ви вводите ваше конфедентційне повідомлення, яке ви хочете передати іншій особі. 
                Натисніть на кнопку "Create", щоб отримати спеціальне посилання вашого зашифрованого повідомлення і передати посилання або хеш (код, що стоїть за останнім слешем у створеному посиланні) адресату.
                Особа, якій ви хочете передати повідомлення, може розшифрувати повідомлення, використовуючи отриманий код.
                </p>
                <h2>Безпека та конфіденційність</h2>
                <p>Ми забезпечуємо високий рівень безпеки для вашої інформації. 
                Важливо! Код для перегляду переданого повідовлення може бути використано тільки один раз. Після перегляну повідовлення, воно буде видалено.
                </p>
            </div>
            <div className="about-block">
                <h2>Про команду</h2>
                <p>Наша команда експертів у сфері криптографії та веб-розробки працює над постійним вдосконаленням нашого сервісу, щоб забезпечити вам найвищий рівень безпеки та зручності.
                </p>
            </div>
            <div className="about-block">
                <h2>Контакти</h2>
                <p>Електронна пошта: your_email@example.com</p>
            </div>
        </div>
    )
}

export default About;