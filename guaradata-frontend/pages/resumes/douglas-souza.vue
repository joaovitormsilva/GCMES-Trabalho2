<template>
  <div class="resume">
    <main class="main-content">
      <section class="left-section">
        <div class="left-content">
          <div class="profile">
            <div class="image">
              <img src="https://avatars.githubusercontent.com/u/91169043" alt="">
            </div>
            <h2 class="name">
              Douglas Souza
            </h2>
            <p class="career">
              Estatístico e Cientista de Dados
            </p>
          </div>
          <div class="contact-info">
            <h3 class="main-title">
              Contato
            </h3>
            <ul>
              <li>
                <font-awesome-icon icon="fa fa-envelope" class="m-1" />
                <a href="mailto:guaradata@gmail.com">guaradata@gmail.com</a>
              </li>
              <li>
                <font-awesome-icon icon="fab fa-linkedin" class="m-1" />
                <a href="https://www.linkedin.com/in/douglassudre/">in/douglassudre</a>
              </li>
              <li>
                <font-awesome-icon icon="fab fa-github" class="m-1" />
                <a href="https://github.com/DSudre">github.com/DSudre</a>
              </li>
            </ul>
          </div>
          <div class=" skills-section">
            <h3 class="main-title">
              Skills
            </h3>
            <ul>
              <li>
                <p class="skill-title">
                  Python
                </p>
                <div class="progress-bar">
                  <div class="progress py-progress" />
                </div>
              </li>
              <li>
                <p class="skill-title">
                  Javascript
                </p>
                <div class="progress-bar">
                  <div class="progress js-progress" />
                </div>
              </li>
              <li>
                <p class="skill-title">
                  SQL
                </p>
                <div class="progress-bar">
                  <div class="progress sql-progress" />
                </div>
              </li>
              <li>
                <p class="skill-title">
                  PowerBI
                </p>
                <div class="progress-bar">
                  <div class="progress power-progress" />
                </div>
              </li>
              <li>
                <p class="skill-title">
                  Airflow
                </p>
                <div class="progress-bar">
                  <div class="progress airflow-progress" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="right-section">
        <div class="right-main-content">
          <section class="about sect">
            <h2 class="right-title">
              Sobre mim
            </h2>
            <p class="para">
              Sou o Douglas, formado em Estatística e Ciência de Dados. Com quase dois anos de experiência, atualmente
              atuo como Analista de Inteligência de Dados na ADN Construtora,
              uma construtora e imobiliária atuante em mais de 25 cidades, com mais de cinco mil unidades entregues e
              outras sete mil e quinhentas em construção
              <br>
              <br>
              Na ADN Construtora, faço parte do time de Inteligência de Dados. Focamos em entregar soluções de dados
              para os mais variados setores da empresa utilizando, ferramentas, em sua maioria, da Microsoft Fabric.
              <br>
              <br>
            </p>
          </section>

          <section class="experince sect">
            <h2 class="right-title">
              Experiência
            </h2>
            <div class="timeline">
              <div class="left-tl-content">
                <h5 class="tl-title">
                  ADN Construtora
                </h5>
                <p class="para">
                  2022 - Até o momento
                </p>
              </div>
              <div class="right-tl-content">
                <div class="tl-content">
                  <h5 class="tl-title-2">
                    Analista de Inteligência de Dados
                  </h5>
                  <p class="para">
                    Participação em discussões e análises estratégicas;
                    Automação de processos (RPA) via Power Automate, como também python;
                    Melhorias e contribuições nos outros setores;
                    Criação de painéis via Power BI;
                    Consulta a banco de dados via SQL;
                    Análise e acompanhamento de OKR's.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline">
              <div class="left-tl-content">
                <h5 class="tl-title">
                  Boost Your Business
                </h5>
                <p class="para">
                  2022
                </p>
              </div>
              <div class="right-tl-content">
                <div class="tl-content">
                  <h5 class="tl-title-2">
                    Digital Analytics Intern
                  </h5>
                  <p class="para">
                    Gestão do Google Tag Manager;
                    Tagueamento de Sites;
                    Criação de painéis via Googgle Data Studio;
                    Integrações: Analytics - Google Ads, DataStudio - Google Ads, Meta Ads, Linkedin Ads, Search
                    Console, Universal Analytics, GA4, Big Query;
                    Criação de site via Wordpress.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="education sect">
            <h2 class="right-title">
              Educação
            </h2>
            <div class="timeline">
              <div class="left-tl-content">
                <h5 class="tl-title">
                  Universidade de São Paulo (USP)
                </h5>
                <p class="para">
                  2018 - 2023
                </p>
              </div>
              <div class="right-tl-content">
                <div class="tl-content">
                  <h5 class="tl-title-2">
                    Instituto De Ciências Matemáticas e de Computação (ICMC)
                  </h5>
                  <p class="para">
                    Bacharel em Estatística e Ciência de Dados.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.resume {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%233c3f4c' fill-opacity='.7' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.main-content {
  min-height: 100vh;
  width: 80%;
  margin: 0rem auto;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.left-section {
  grid-column: span 2;
  height: 100%;
  background-color: black;
}

.right-section {
  grid-column: span 5;
  background-color: #f7f7f7;
  height: 100%;
}

.left-content {
  padding: 2rem 3rem;
}

.profile {
  width: 100%;
  border-bottom: 1px solid #ffffff;
}

.image {
  width: 100%;
  text-align: center;
}

@media (max-width: 1200px) {
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.profile img {
  width: 100%;
  border-radius: 50%;
  border: 15px solid #ffffff;

}

.name {
  font-size: 2rem;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1.2rem 0;
}

.career {
  font-size: 1.2rem;
  color: #94D9EA;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 1rem;
}

.main-title {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f7f7f7ec;
  padding-top: 3rem;
}

.contact-info ul {
  padding-top: 2rem;
}

.contact-info ul li {
  padding: .4rem 0;
  display: flex;
  align-items: center;
  color: #fff;
}

.contact-info ul li i {
  padding-right: 1rem;
  font-size: 1.2rem;
  color: #2D9CDB;
}

.skills-section ul {
  padding-top: 2rem;
}

.skills-section ul li {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: .4rem 0;
}

.progress-bar {
  width: 100%;
  height: .4rem;
  background-color: #2f81ed5b;
  position: relative;
  border-radius: 12px;
}

.progress {
  height: 100%;
  position: absolute;
  left: 0;
  background-color: #2D9CDB;
  border-radius: 12px;
}

.py-progress {
  width: 80%;
}

.sql-progress {
  width: 65%;
}

.power-progress {
  width: 95%;
}

.js-progress {
  width: 75%;
}

.airflow-progress {
  width: 40%;
}

.skill-title {
  text-transform: uppercase;
  color: #f7f7f7;
  font-size: 1rem;
}

.sub-title {
  padding-top: 2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #f7f7f7;
}

.sub-para {
  color: #ccc;
  padding: .4rem 0;
}

.references-section li {
  color: #ccc;
  padding: .2rem 0;
}

.references-section li i {
  padding-right: .5rem;
  font-size: 1.2rem;
  color: #2D9CDB;
}

.right-main-content {
  padding: 2rem 3rem;
}

.right-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2F80ED;
  margin-bottom: 1.2rem;
  position: relative;
}

.right-title::after {
  content: "";
  position: absolute;
  width: 60%;
  height: .2rem;
  background-color: #ccc;
  border-radius: 12px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.para {
  line-height: 1.6rem;
  color: #718096;
  font-size: 1.1rem;
}

.sect {
  padding-bottom: 2rem;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.tl-title {
  letter-spacing: 1px;
  font-size: 1.3rem;
  color: #002333;
  text-transform: uppercase;
}

.tl-title-2 {
  letter-spacing: 1px;
  font-size: 1.3rem;
  color: #2D9CDB;
  text-transform: uppercase;
}

.tl-content {
  border-left: 1px solid #ccc;
  padding-left: 2rem;
  position: relative;
  padding-bottom: 2rem;
}

.tl-title-2::before {
  content: "";
  position: absolute;
  width: .7rem;
  height: .7rem;
  background-color: #2D9CDB;
  border-radius: 50%;
  transform: translateX(-50%);
  left: 0;
}

/*Media Querries*/
@media screen and (max-width:823px) {
  .right-title::after {
    width: 40%;
  }
}

@media screen and (max-width:681px) {
  .right-title::after {
    width: 30%;
  }
}

@media screen and (max-width:780px) {
  .timeline {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width:780px) {
  .left-section {
    grid-column: span 3;
  }

  .right-section {
    grid-column: span 4;
  }
}

@media screen and (max-width:1200px) {
  .main-content {
    grid-template-columns: repeat(1, 1fr);
  }

  .profile img {
    width: 40%;
  }
}

@media screen and (max-width:700px) {
  .profile img {
    width: 60%;
  }
}

@media screen and (max-width:390px) {
  .name {
    font-size: 1.5rem;
  }
}
</style>
