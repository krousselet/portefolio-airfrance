<template>
    <main>
        <div class="container container-coordinates">
            <div class="coordinates-left">
                <ul>
                    <li>Monsieur Rousselet Kevin</li>
                    <li>Développeur web</li>
                    <li>Adresse</li>
                    <li>Pour le poste de</li>
                </ul>
            </div>
            <div class="coordinates-right">
                <ul>
                    <li>Entreprise Air France</li>
                    <li>Service recrutement</li>
                    <li>Adresse</li>
                    <li>Paris</li>
                </ul>
            </div>
        </div>
        <div class="container container-content">
            <div>
                <h2>Message à l'attention de l'entreprise Air France</h2>
            </div>
            <div>
                <p class="text-align-left">Madame, Monsieur</p>
            </div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium modi quae perspiciatis quasi repudiandae, magnam cumque, non perferendis dolorum est repellendus exercitationem quos qui explicabo, unde ipsum animi. Quod, itaque?
                Debitis corrupti quisquam, molestias cum aliquam perferendis dolore, maxime similique odio ea ipsum praesentium obcaecati saepe dolorum, eos id ab nam ullam. Illum sapiente voluptatum ab consectetur, corrupti nihil repudiandae?
                At autem fugit nisi possimus amet ex veniam praesentium corporis. Fuga laborum perferendis ullam enim nam, esse quia quod soluta, cupiditate adipisci similique natus! Cumque in aut sapiente modi! Sapiente.
                Ex, repellat aliquid? Quo mollitia, sequi culpa, est, illum expedita omnis cumque repudiandae reprehenderit perferendis officia in obcaecati exercitationem maxime? Explicabo iste hic quasi accusantium natus eius, repellat deleniti ullam.
                Praesentium voluptatem eaque dolores corporis quam consequuntur numquam quod quia laboriosam, minima veniam id exercitationem sunt illo fugit quos ratione, provident impedit aut ipsam. Quisquam perferendis hic ab adipisci voluptate?</p>
            </div>

        </div>
        <div class="container container-signature">
            <img src="/images/logos/signature.svg" alt="signature du developpeur">
        </div>
    </main>
</template>

<style scoped lang="scss">

body {
  background-color: white;
  overflow: none !important; // prevent unwanted scrollbars
}

.text-align-left {
    text-align: left;
}

p {
    @media(min-width: 320px) and (max-width: 550px) {
        font-size: 2.5vw;
    }
    @media(min-width: 551px) and (max-width: 991px) {
        font-size: 2vw;
    }
    @media(min-width: 992px) and (max-width: 1440px) {
        font-size: 1.8vw;
    }
    @media(min-width: 1441px) and (max-width: 2240px) {
        font-size: 2vw;
    }
    @media (min-width: 2241px) {
        font-size: 1.5vw;
    }
}

h2 {
    @media(min-width: 320px) and (max-width: 550px) {
        font-size: 2vw;
    }
    @media(min-width: 551px) and (max-width: 991px) {
        font-size: 2vw;
    }
    @media(min-width: 992px) and (max-width: 1440px) {
        font-size: 2vw;
    }
    @media(min-width: 1441px) and (max-width: 2240px) {
        font-size: 2vw;
    }
    @media (min-width: 2241px) {
        font-size: 2vw;
    }
}

.container {
    margin-bottom: 100px;
}
    main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 1024px;
        margin: 0 auto;
        @media(min-width: 320px) and (max-width: 550px) {
        width: 310px;
    }
     @media(min-width: 551px) and (max-width: 991px) {
        width: 475px;
    }
     @media(min-width: 992px) and (max-width: 1440px) {
        width: 1024px;
    }
        @media  (min-width: 1441px) {
        width: 80%;
    }

        .container-coordinates {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            width: 100%;
            height: 100%;

            .coordinates-left {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }

            .coordinates-right {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                ul {
                    padding-top: 150px;
                }
            }
        }

        .container-content {
            display: flex;
            justify-content: center;
            align-items: center;

            div {
                display: flex;
                justify-content: left;
                margin-bottom: 40px;
            }
        }

        .container-signature {
            width: 80%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>