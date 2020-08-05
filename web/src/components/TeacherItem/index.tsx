import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/43641969?s=460&u=d854292859cd3419411d5b60b9a4f2ecf3fd6722&v=4" alt="Andre Luiz"/>
      <div>
        <strong>Andre Luiz</strong>
        <span>Matematica</span>
      </div>
    </header>
    <p>Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 50,00</strong>
      </p>
      <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
    </footer>
  </article>
  );
}

export default TeacherItem;